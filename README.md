# Como instalar o projeto

### NodeJS
- O projeto usa o NodeJS na versão 18.16. Caso esteja usando outra versão do NodeJS e precise instalar outra versão,
recomando instalar o [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) para uma maior facilidade na hora da instalação e mudança de diferentes versões do NodeJS.

### Frontend

- Para instalar o frontend, você deve entrar na pasta `frontend` e rodar os seguintes comandos abaixo:
  - `npm i` para instalar todas as dependências contidas dentro do arquivo `package.json`

### Backend
- Para instalar o frontend, você deve entrar na pasta `server` e rodar os seguintes comandos abaixo:
  - `npm i` para instalar todas as dependências contidas dentro do arquivo `package.json`
  - Aṕos isso, crie o arquivo `.env` na pasta raiz e coloque as seguintes informações:
    ```
      DB_USER = USUARIO_DO_BANCO
      DB_HOST = URL_ONDE_O_BANCO_ESTA_RODANDO
      DB_DATABASE = NOME_DO_BANCO
      DB_PASS = SENHA_DO_BANCO
      DB_PORT = PORTA_ONDE_O_POSTGRES_ESTA_RODANDO
      ADMIN_USERNAME = USERNAME_PARA_OS_ADMINS
      ADMIN_PASSWORD = SENHA_PARA_OS_ADMINS
    ```

### Banco de Dados (PostgreSQL)
- O site usa o banco de dados PostgreSQL 16.0, e as informações são:
  - Nome do banco: seed
  - Nome da tabela de empresas: empresas
  - Script para a tabela empresas abaixo
    ```
      CREATE TABLE empresas (
        id UUID PRIMARY KEY,
        nome_fantasia,
        cnpj VARCHAR(18),
        telefone VARCHAR(20),
        razao_social VARCHAR(255),
        categoria VARCHAR(25),
        email VARCHAR(255)
      );
      
    ```
