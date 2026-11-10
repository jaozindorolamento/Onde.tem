# Critérios de aceitação — OndeTem

1. Visitante consegue listar e pesquisar produtos ativos sem autenticação.
2. Usuário consegue cadastrar/login e recebe sessão expirada/revogável.
3. CLIENTE não acessa operações administrativas.
4. OPERADOR pode administrar produtos, mas não executar ações exclusivas de ADMIN.
5. ADMIN pode consultar usuários/auditoria e excluir produto somente após duas confirmações: texto exato e senha administrativa válida.
6. Senhas não são armazenadas em texto puro; tokens persistidos são hashes.
7. Entradas de produto são validadas e consultas usam parâmetros.
8. Banco mantém integridade referencial sem violações de FK.
9. Frontend compila e backend passa nos testes em Node 18, 20 e 22 na CI Ubuntu.
10. Clone limpo não exige `node_modules` versionado e não expõe `.env`.
