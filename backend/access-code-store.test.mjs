import assert from "node:assert/strict";
import test from "node:test";
import { createAccessCode, redeemCode, revokeCode, verifyToken } from "./access-code-store.mjs";

test("creates and redeems an access code for 24 hours", async () => {
  const created = await createAccessCode();
  const result = await redeemCode(created.code, "test-device", "mobile");
  assert.equal(result.statusCode, 200);
  assert.equal(result.code.status, "active");
  assert.ok(new Date(result.expiresAt).getTime() > Date.now());
  assert.ok(verifyToken(result.accessToken));
});

test("rejects an unknown code", async () => {
  const result = await redeemCode("HANOI-NOTFOUND-0000", "test-device");
  assert.equal(result.statusCode, 404);
});

test("revokes an active code", async () => {
  const created = await createAccessCode();
  const revoked = await revokeCode(created.code);
  assert.equal(revoked.status, "revoked");
});
