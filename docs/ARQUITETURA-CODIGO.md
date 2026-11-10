# Arquitetura do código

Fluxo implementado: **Route → Middleware → Controller → Service/Model → SQLite → Auditoria**.

- `routes/`: contratos HTTP e proteção das rotas.
- `middleware/`: autenticação e autorização por perfil.
- `controllers/`: validação de entrada e resposta HTTP.
- `services/`: regras de negócio e auditoria.
- `models/`: operações reutilizáveis de persistência.
- `config/database.js`: inicialização e persistência SQLite via sql.js.
- `server.js`: somente bootstrap, segurança global e montagem das rotas.

As URLs públicas existentes foram preservadas, incluindo `/api/produtos` e as rotas administrativas em `/api/admin/produtos`.
