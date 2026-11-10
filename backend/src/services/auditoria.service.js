import {run} from '../models/database.model.js';
export function registrarAuditoria(db,req,acao,entidade,entidadeId,detalhes={}){run(db,`INSERT INTO auditoria(usuario_id,acao,entidade,entidade_id,detalhes,ip) VALUES(?,?,?,?,?,?)`,[req.user?.id??null,acao,entidade,entidadeId,JSON.stringify(detalhes),req.ip]);}
