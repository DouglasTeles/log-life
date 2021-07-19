# API-loglife

API para cadastro de clientes!

## Tecnologias utilizadas
- Nodejs <br/>
- JavaScrip <br/>
- Sequelize ORM <br/>
- MySql <br/>
- React para o front

Recursos disponiveis (Usuários)
    Cadastrar clientes
    Visualizar clientes
    Atualizar clientes
    Deletar clientes


REQUISITOS
Para a execução da API é necessario ter o MySqlworkbench instalado local.
Basta instalar e definir a senha de acesso root como "admin123", caso crie uma senha diferente será necessario modificar o arquivo de configuração que estáem src>>app>>config

Rode o comando "npm install" para instalar as dependencias

Por ter utilizado o Sequelize fica facil criar o banco e as tabelas. Basta executar
## Criar banco
    npx sequelize db:create
    
 ##  Criar Tabelas
    npx sequelize db:migrate

Após esses passos rodar o comando 'npm run dev'

## Rotas
      '/cadastro' Cadastrar Cliente
      '/clientes' Visualizar Clientes
      '/cliente/:id/update' Atualizar  Cliente
      '/cliente/:id/delete' Deletar cliente
