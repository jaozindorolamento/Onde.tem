import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import initSqlJs from 'sql.js';
const here=path.dirname(fileURLToPath(import.meta.url));
const require=createRequire(import.meta.url);
const dbPath=path.resolve(here,'../../../database/data/ondetem.db');
let db;
export async function getDb(){if(db)return db;const entry=require.resolve('sql.js');const SQL=await initSqlJs({locateFile:f=>path.join(path.dirname(entry),f)});db=fs.existsSync(dbPath)?new SQL.Database(fs.readFileSync(dbPath)):new SQL.Database();db.run('PRAGMA foreign_keys=ON');return db;}
export function saveDb(){if(db)fs.writeFileSync(dbPath,Buffer.from(db.export()));}
