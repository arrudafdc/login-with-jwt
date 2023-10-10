# login-with-jwt

## Sobre o Projeto

Uma aplicação de criação de usuário com autenticação JWT, o projeto foi feito com o intuito de praticar princípios SOLID, Typescript, Prisma, Bcrypt e autenticação JWT.

## Como Usar

```bash
# clonar repositório
git clone https://github.com/arrudafdc/login-with-jwt.git

# entrar na pasta do projeto login-with-jwt
cd login-with-jwt

# baixar as dependências
npm install

# gerar as migrations do prisma
npx prisma migrate dev

# executar o projeto em modo de desenvolvimento
npm run dev

```

## Rotas

A URL base é http://localhost:3333

### create user

> http://localhost:3333/user/create
- Rota do tipo POST que cria um usuário
- Parâmetros necessários (exemplo):

```json
{
   "name": "João",
   "email": "joao@gmail.com",
   "password": "123"
}
```

### create authentication

> http://localhost:3333/auth
- Rota do tipo POST que cria uma autenticação
- Parâmetros necessários (exemplo):
  
```json
{
   "email": "joao@gmail.com",
   "password": "123"
}
```

### get user by email

> http://localhost:3333/:email
- Rota do tipo GET que lista as informações do usuário

## Construído Com

* Typescript
* NodeJS
* Prisma
* JWT
* Bcrypt
* Express

## Autor

Lucas Arruda
