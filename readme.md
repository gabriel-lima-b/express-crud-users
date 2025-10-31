# Express CRUD Users API

A simple Node.js + Express REST API built for study purposes.  
Implements basic CRUD operations for users, with in-memory storage and error handling middleware.

## 🚀 Run locally

```bash
npm install
npm run dev
```
## Examples of use:
```bash
# Criar usuário
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Gabriel","email":"gabriel@example.com"}'

# Listar usuários
curl http://localhost:3000/users

# Deletar usuário
curl -X DELETE http://localhost:3000/users/1
```