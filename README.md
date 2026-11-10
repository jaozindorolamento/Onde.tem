# OndeTem

Projeto Full Stack com frontend em HTML/CSS/JavaScript + Vite, API REST em Node.js/Express e banco SQLite executado com `sql.js`.

## Compatibilidade

- Windows 10/11
- Linux
- macOS
- Node.js **18 LTS ou superior**
- Faixa declarada: **Node >= 18.0.0 e < 25**
- npm >= 10

> Não é correto prometer compatibilidade com toda versão existente do Node. O projeto define uma faixa suportada para tornar a instalação reproduzível.

O projeto não depende de caminhos absolutos do Windows e usa APIs de caminho do Node, portanto a estrutura é portátil entre Windows, Linux e macOS.

## Estrutura

```text
OndeTem/
├── frontend/              # Interface + Vite
├── backend/               # API Node.js/Express
├── database/
│   ├── data/ondetem.db    # SQLite demonstrativo
│   ├── migrations/
│   └── seeds/
├── docs/
├── .gitignore
└── .nvmrc
```

## Instalação

Clone o repositório e instale as dependências separadamente.

### Backend

```bash
cd backend
npm install
npm start
```

API: `http://localhost:3000`

Teste: `http://localhost:3000/api/health`

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra: `http://localhost:5173/`

No Windows, caso o PowerShell bloqueie `npm.ps1`, os mesmos comandos podem ser executados como `npm.cmd install`, `npm.cmd start` e `npm.cmd run dev`.

## Banco de dados

O repositório inclui `database/data/ondetem.db` com dados de demonstração. O `.gitignore` possui uma exceção específica para esse arquivo, evitando que ele desapareça ao publicar o projeto no GitHub.

O banco contém lojas, categorias, produtos e usuários demonstrativos. Migrations e seeds ficam em `database/migrations` e `database/seeds`.

## Contas de demonstração

- ADMIN: `admin@ondetem.local` / `Admin@123`
- OPERADOR: `operador@ondetem.local` / `Operador@123`
- CLIENTE: `cliente@ondetem.local` / `Cliente@123`

Essas credenciais são somente para demonstração/desenvolvimento. Em produção, devem ser substituídas.

## Configuração

O backend funciona com valores locais padrão. Para configurações adicionais, copie:

```text
backend/.env.example -> backend/.env
```

Nunca envie o arquivo `.env` real para o GitHub. O `.gitignore` já o bloqueia.

Google OAuth é opcional e exige credenciais próprias no `.env`.

## Segurança implementada

O backend inclui hash de senhas com `scrypt`, tokens de sessão armazenados por hash, expiração/revogação de sessão, RBAC, Helmet, CORS, rate limiting, validação com Zod, prepared statements, limite de JSON e auditoria.

Veja `docs/SEGURANCA.md` para detalhes.

## Antes de publicar

Não envie `node_modules` nem `.env`. O `package-lock.json` do backend deve permanecer no repositório. No frontend, execute `npm install` para gerar o lock compatível com a versão instalada do Node.

## Qualidade e validação

No backend: `npm test` executa os testes automatizados. O GitHub Actions em `.github/workflows/ci.yml` valida o projeto em Ubuntu com Node 18, 20 e 22 e também executa o build do frontend.

Consulte `docs/RASTREABILIDADE.md` para a matriz de aderência ao documento de requisitos. Ela registra explicitamente requisitos implementados, parciais e não implementados para evitar alegações de conformidade sem evidência.

## Evidências para avaliação acadêmica
Consulte `docs/CONFORMIDADE-REQUISITOS.md`, `docs/CRITERIOS-ACEITACAO.md`, `docs/RASTREABILIDADE.md`, `docs/SEGURANCA.md` e `.github/workflows/ci.yml`.


## Compatibilidade Node.js

O projeto pode ser executado com Node.js 18, 20 ou 22. Para usar Node 18, entre em `frontend/` e `backend/` e execute `npm install` antes de iniciar. O frontend usa Vite 6, compatível com Node 18.
