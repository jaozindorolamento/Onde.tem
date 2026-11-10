import test from 'node:test';
import assert from 'node:assert/strict';
import {hashPassword,verifyPassword,newToken,tokenHash} from '../src/utils/security.js';

test('senha é armazenada com salt/hash e validada corretamente',()=>{
  const hash=hashPassword('Senha@123');
  assert.notEqual(hash,'Senha@123');
  assert.equal(verifyPassword('Senha@123',hash),true);
  assert.equal(verifyPassword('senha-errada',hash),false);
});

test('tokens de sessão são aleatórios e persistidos somente como SHA-256',()=>{
  const a=newToken(), b=newToken();
  assert.equal(a.length,64);
  assert.notEqual(a,b);
  assert.equal(tokenHash(a).length,64);
  assert.notEqual(tokenHash(a),a);
});
