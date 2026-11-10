# Matriz de Rastreabilidade e Evidências — OndeTem

Esta matriz diferencia o que está implementado do que é apenas solicitado pelo documento-base. Não considerar uma linha "parcial" como requisito concluído.

| Requisito do documento-base | Situação | Evidência no projeto | Validação |
|---|---|---|---|
| Frontend HTML5/CSS3/JavaScript ES6+ | Implementado | `frontend/index.html`, `style.css`, `script.js` | `npm run build` |
| Backend Node.js + Express | Implementado | `backend/src/server.js` | `npm run check` |
| API REST/JSON | Implementado | rotas `/api/*` | execução da aplicação |
| Persistência relacional SQLite | Implementado | `database/data/ondetem.db`, migration | teste de integridade |
| Prepared Statements / SQL parametrizado | Implementado | helper `run()` e consultas com parâmetros | revisão de código |
| Senha com algoritmo seguro + salt aleatório | Implementado | `utils/security.js` usa `crypto.scrypt` + salt | `security.test.js` |
| Proteção XSS | Implementado no rendering dinâmico | escape de HTML em `frontend/script.js` | revisão de código |
| Helmet / CORS / rate limiting | Implementado | `server.js` | revisão/execução |
| Autorização por papéis | Implementado | `middleware/auth.js`, `requireRoles` | revisão/execução |
| Trilha de auditoria | Implementado | tabela `auditoria` e chamadas `audit()` | banco/API admin |
| Exclusão em duas etapas | Implementado para produto | confirmação textual + endpoint admin | teste manual |
| JWT stateless ou cookie HTTP-Only | **Parcial/divergente** | token Bearer opaco; hash do token é persistido em `sessoes` | requer mudança arquitetural para aderência literal |
| Route → Middleware → Controller → Service/Model → DB → Auditoria | **Parcial** | middleware separado, mas controllers/services ainda estão concentrados em `server.js` | refatoração futura recomendada |
| PostgreSQL | **Não implementado** | projeto executável usa SQLite/sql.js | fora da versão atual |
| Pool de conexões | **Não aplicável ao SQLite/sql.js atual** | banco local em memória + persistência em arquivo | necessário em variante PostgreSQL |
| Google OAuth | **Preparado, depende de credenciais externas** | endpoints e `.env.example` | exige credenciais válidas |
| Testes automatizados | Implementado (núcleo) | `backend/test/*.test.js` | `npm test` |
| CI em Linux | Implementado | `.github/workflows/ci.yml` | GitHub Actions em Node 18, 20 e 22 |
| Portabilidade | Automatizada para verificação | sem caminhos absolutos; `sql.js`; CI Linux | CI + teste local Windows |

## Critério de entrega

Uma funcionalidade só deve ser apresentada como concluída quando houver código executável e evidência de validação. Itens marcados como parcial ou não implementado são lacunas conhecidas entre a especificação-base e a versão atual do produto.
