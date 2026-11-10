import test from 'node:test';
import assert from 'node:assert/strict';
import {getDb} from '../src/config/database.js';

test('banco distribuído possui integridade referencial e dados de demonstração',async()=>{
  const db=await getDb();
  const fk=db.exec('PRAGMA foreign_key_check');
  assert.equal(fk.length,0);
  const count=(table)=>db.exec(`SELECT COUNT(*) FROM ${table}`)[0].values[0][0];
  assert.ok(count('produtos')>=35);
  assert.ok(count('lojas')>=10);
  assert.ok(count('categorias')>=10);
});
