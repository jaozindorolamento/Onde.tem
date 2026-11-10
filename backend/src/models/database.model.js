import {getDb,saveDb} from '../config/database.js';
export async function database(){return getDb();}
export function rows(db,sql,p=[]){const r=db.exec(sql,p);if(!r.length)return[];return r[0].values.map(v=>Object.fromEntries(r[0].columns.map((c,i)=>[c,v[i]])));}
export function run(db,sql,p=[]){const s=db.prepare(sql);try{s.bind(p);s.step();}finally{s.free();}}
export function persist(){saveDb();}
