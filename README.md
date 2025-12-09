# 🎵 Atividade 2 - API de Playlist de Músicas

## 📋 Sobre o Projeto

Este projeto é uma aplicação web com frontend e backend separados, usando Docker para facilitar a execução. O tema é uma **Playlist de Músicas** onde você vai aprender a:

- Consumir APIs usando o Postman
- Modificar dados no backend
- Criar novos endpoints
- Fazer o frontend consumir dados da API

---

## 🏗️ Estrutura do Projeto

```
atividadeApieFront2/
├── backend/
│   ├── server.js         # Código do servidor (API)
│   ├── package.json      # Dependências do Node.js
│   ├── Dockerfile        # Configuração do container
│   └── nodemon.json      # Configuração do hot-reload
├── frontend/
│   ├── index.html        # Página visual da aplicação
│   └── Dockerfile        # Configuração do container
├── docker-compose.yml    # Orquestração dos containers
├── inicia.md             # Como iniciar o projeto
├── README.md             # Este arquivo
└── exercicios/
    ├── exercicio1-postman.md
    ├── exercicio2-adicionar-remover-musicas.md
    ├── exercicio3-endpoint-estatico.md
    ├── exercicio4-musica-longa-curta.md
    └── exercicio5-frontend-extremos.md
```

---

## 🚀 Como Executar

```bash
# Navegue até a pasta
cd atividadeApieFront2

# Suba os containers
docker-compose up --build
```

**URLs:**
- Frontend: http://localhost:8080
- Backend: http://localhost:3000

---

## 📚 Exercícios

| # | Exercício | Descrição |
|---|-----------|-----------|
| 1 | [Postman](exercicio1-postman.md) | Testar os endpoints da API |
| 2 | [Adicionar/Remover](exercicio2-adicionar-remover-musicas.md) | Modificar músicas no código |
| 3 | [Endpoint Estático](exercicio3-endpoint-estatico.md) | Criar endpoint simples |
| 4 | [Música Longa/Curta](exercicio4-musica-longa-curta.md) | Criar endpoints de busca |
| 5 | [Frontend](exercicio5-frontend-extremos.md) | Consumir no frontend |

---

## 🎯 Endpoints da API

### Já Prontos (para os exercícios 1 e 2):

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Teste - retorna mensagem de boas-vindas |
| GET | `/pega-musicas` | Lista todas as músicas |
| GET | `/duracao-total` | Soma duração de todas as músicas |

### A Criar (exercícios 3, 4 e 5):

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/info` | Informações da playlist (Ex. 3) |
| GET | `/sobre` | Sobre o desenvolvedor (Ex. 3) |
| GET | `/musica-mais-longa` | Música com maior duração (Ex. 4) |
| GET | `/musica-mais-curta` | Música com menor duração (Ex. 4) |

---

## 🎵 Músicas na Playlist (inicial)

| # | Música | Artista | Duração |
|---|--------|---------|---------|
| 1 | Bohemian Rhapsody | Queen | 5:54 |
| 2 | Billie Jean | Michael Jackson | 4:54 |
| 3 | Smells Like Teen Spirit | Nirvana | 5:01 |
| 4 | Hotel California | Eagles | 6:30 |
| 5 | Imagine | John Lennon | 3:03 |
| 6 | Stayin' Alive | Bee Gees | 4:05 |

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js + Express
- **Frontend:** HTML + CSS + JavaScript
- **Containers:** Docker + Docker Compose
- **Servidor Web:** Nginx (para o frontend)

---

## 👨‍🏫 Para o Professor

Este projeto foi desenvolvido para alunos de Redes de Computadores que estão tendo o primeiro contato com desenvolvimento web e APIs. Os exercícios são progressivos:

1. **Exercício 1:** Apenas consumir (GET) - familiarização com Postman
2. **Exercício 2:** Editar código existente - entender estrutura de dados
3. **Exercício 3:** Criar código simples - copiar e modificar
4. **Exercício 4:** Criar código com lógica - entender reduce()
5. **Exercício 5:** Integrar frontend e backend - visão completa

Cada exercício tem:
- Objetivo claro
- Passo a passo detalhado
- Código para copiar (quando necessário)
- Checklist de entrega
- Troubleshooting de erros comuns

