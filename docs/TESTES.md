# Plano de Testes

## Automatizados

No backend, execute `npm test`. Os testes verificam hashing/validação de senha, geração e hash de token, integridade das chaves estrangeiras e presença do conjunto mínimo de dados de demonstração.

## Build e integração contínua

O workflow `.github/workflows/ci.yml` executa em Ubuntu com Node 18, 20 e 22: `npm ci`, verificação de sintaxe do backend, testes automatizados e build do frontend. Isso fornece evidência reproduzível de compatibilidade Linux após o projeto ser enviado ao GitHub.

## Aceitação manual

Validar catálogo e filtros; cadastro; login/logout; bloqueio de rota administrativa sem token; permissões ADMIN/OPERADOR; criação e edição de produto; alteração de status; exclusão com confirmação textual; auditoria; recusa de payload inválido; e CORS com origem não autorizada.
