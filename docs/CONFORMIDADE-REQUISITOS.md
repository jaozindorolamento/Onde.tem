# Conformidade dos requisitos — OndeTem

## Escopo adotado
O documento acadêmico original descrevia uma Plataforma Integrada de Gestão de Atendimentos. O produto implementado é o **OndeTem**, cujo domínio real é consulta e administração de lojas, categorias e produtos. Para evitar documentação falsa, os requisitos foram alinhados ao domínio real mantendo os atributos de qualidade e arquitetura exigidos (REST, camadas, autenticação, autorização, auditoria, validação, persistência e segurança).

## Arquitetura implementada
`Frontend -> REST/JSON -> Routes -> Middleware -> Controllers -> Services/Models -> SQLite -> Auditoria`

- Frontend: HTML5, CSS3 e JavaScript Vanilla.
- Backend: Node.js + Express.
- Persistência: SQLite executado por sql.js, com PK, FK, CHECK e índices.
- Segurança: Helmet, CORS restrito, rate limit, Zod, prepared statements, scrypt com salt, tokens aleatórios armazenados apenas por hash, expiração/revogação de sessão e RBAC.
- Exclusão de produto: somente ADMIN, confirmação textual e revalidação da senha administrativa; a senha nunca é escrita na auditoria.
- Auditoria: login/logout e operações administrativas relevantes.

## Requisitos adaptados ao domínio OndeTem
| ID | Requisito | Evidência | Estado |
|---|---|---|---|
| RS-01 | API REST/JSON | `backend/src/routes` | Implementado |
| RS-02 | Separação em camadas | routes/controllers/services/models | Implementado |
| RS-03 | Persistência relacional | `database/data/ondetem.db` | Implementado |
| RS-04 | Autenticação segura | auth service + middleware | Implementado |
| RS-05 | Autorização por perfil | ADMIN/OPERADOR/CLIENTE | Implementado |
| RS-06 | Proteção contra SQL Injection | parâmetros/prepared statements | Implementado |
| RS-07 | Proteções HTTP | Helmet/CORS/rate limit | Implementado |
| RS-08 | Auditoria | tabela `auditoria` + service | Implementado |
| RS-09 | Exclusão administrativa em duas confirmações | texto + senha ADMIN | Implementado |
| RS-10 | Portabilidade | Node 18/20/22 CI em Ubuntu | Automatizado na CI |
| RS-11 | Testes automatizados | `backend/test` | Implementado (base) |
| RS-12 | Build frontend | workflow CI | Automatizado na CI |

## Itens do documento original que não pertencem ao produto OndeTem
Fluxos de protocolo de atendimento, pareceres e estados PENDENTE/EM_ANALISE/EM_ANDAMENTO/CONCLUIDO/INDEFERIDO não foram implementados porque descrevem outro domínio. Se esses itens forem obrigatórios literalmente pela disciplina, o escopo do software precisará ser alterado, e não apenas a arquitetura.

## Limitações declaradas
- Autenticação atual usa sessão com token Bearer opaco e hash do token no banco; não é JWT stateless nem cookie HTTP-Only.
- Google OAuth depende de credenciais externas configuradas em `.env`.
- `sql.js` trabalha com um arquivo SQLite e não usa pool de conexões como PostgreSQL.
- A CI valida Linux após o projeto ser publicado no GitHub; o selo verde do workflow é a evidência final desse ambiente.
