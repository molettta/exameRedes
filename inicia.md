# 🎵 Como Iniciar o Projeto - Playlist API

## Pré-requisitos

- Docker instalado
- Docker Compose instalado
- VS Code (ou outro editor)
- Postman instalado

---

## 🚀 Iniciando o Projeto

### Passo 1: Abra o Terminal

- **Windows:** CMD ou PowerShell
- **Mac:** Terminal
- **Linux:** Terminal

### Passo 2: Navegue até a pasta do projeto

```bash
cd caminho/para/atividadeApieFront2
```

### Passo 3: Suba os containers

```bash
docker-compose up --build
```

### Passo 4: Aguarde as mensagens

Você deve ver:
```
🎵 ================================
   API DE PLAYLIST RODANDO!
🎵 ================================
   URL: http://localhost:3000
```

---

## 🌐 URLs do Projeto

| Serviço | URL | Descrição |
|---------|-----|-----------|
| Frontend | http://localhost:8080 | Página visual da aplicação |
| Backend | http://localhost:3000 | API (para testar no Postman) |

---

## 🛑 Parando o Projeto

Para parar os containers, pressione:
```
Ctrl + C
```

Ou em outro terminal:
```bash
docker-compose down
```

---

## 🔄 Reiniciando após Erros

Se algo der errado:

```bash
# Para tudo
docker-compose down

# Remove volumes (limpa tudo)
docker-compose down -v

# Sobe novamente
docker-compose up --build
```

---

## 📋 Ordem dos Exercícios

1. **Exercício 1:** Testar API no Postman
2. **Exercício 2:** Adicionar/Remover músicas no código
3. **Exercício 3:** Criar endpoint estático
4. **Exercício 4:** Criar endpoints música longa/curta
5. **Exercício 5:** Frontend consumir os novos endpoints

