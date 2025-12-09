# 🎵 Exercício 1 - Testando a API no Postman

## 📋 Objetivo
Aprender a usar o Postman para testar APIs, fazendo requisições HTTP para o backend da playlist.

---

## 🚀 Passo a Passo

### PASSO 1: Verificar se o Backend está Rodando

1. **Abra o terminal** (CMD, PowerShell ou Terminal do Mac)

2. **Navegue até a pasta do projeto:**
   ```bash
   cd caminho/para/atividadeApieFront2
   ```

3. **Suba os containers com Docker:**
   ```bash
   docker-compose up --build
   ```

4. **Aguarde até ver a mensagem:**
   ```
   🎵 ================================
      API DE PLAYLIST RODANDO!
   🎵 ================================
   ```

5. **Teste no navegador:** Abra http://localhost:3000
   - Deve aparecer uma mensagem JSON com "API de Playlist funcionando!"

---

### PASSO 2: Abrir o Postman

1. **Abra o Postman** no seu computador
   - Se não tiver, baixe em: https://www.postman.com/downloads/

2. **Crie uma nova requisição:**
   - Clique no botão **"+"** (nova aba)
   - Ou use o atalho **Ctrl + T** (Windows) / **Cmd + T** (Mac)

---

### PASSO 3: Testar o Endpoint de Teste (Rota Raiz)

1. **Configure a requisição:**
   - **Método:** Selecione `GET` no dropdown (já vem selecionado por padrão)
   - **URL:** Digite `http://localhost:3000/`

2. **Clique no botão azul "Send"**

3. **Veja o resultado:**
   - Na parte de baixo vai aparecer a resposta da API
   - Deve mostrar algo como:
   ```json
   {
       "mensagem": "🎵 API de Playlist funcionando!",
       "endpoints": [
           "GET /pega-musicas - Lista todas as músicas",
           "GET /duracao-total - Soma a duração de todas as músicas"
       ]
   }
   ```

4. **Verifique o Status:**
   - No canto direito deve aparecer `200 OK` (significa que deu certo!)

---

### PASSO 4: Listar Todas as Músicas

1. **Crie uma nova aba** (Ctrl + T ou clique no "+")

2. **Configure a requisição:**
   - **Método:** `GET`
   - **URL:** `http://localhost:3000/pega-musicas`

3. **Clique em "Send"**

4. **Resultado esperado:**
   ```json
   {
       "sucesso": true,
       "quantidade": 6,
       "musicas": [
           {
               "id": 1,
               "nome": "Bohemian Rhapsody",
               "artista": "Queen",
               "duracao": 354,
               "genero": "Rock"
           },
           ... (mais músicas)
       ]
   }
   ```

5. **Observe:**
   - `sucesso: true` → A requisição funcionou
   - `quantidade: 6` → Tem 6 músicas na playlist
   - `musicas: [...]` → Array com todas as músicas

---

### PASSO 5: Ver a Duração Total

1. **Crie uma nova aba**

2. **Configure a requisição:**
   - **Método:** `GET`
   - **URL:** `http://localhost:3000/duracao-total`

3. **Clique em "Send"**

4. **Resultado esperado:**
   ```json
   {
       "sucesso": true,
       "totalMusicas": 6,
       "duracaoTotalSegundos": 1767,
       "duracaoFormatada": "29 minutos e 27 segundos"
   }
   ```

---

## ✅ Checklist de Entrega

Marque os itens conforme for completando:

- [ ] Testei a rota raiz `/` e recebi a mensagem de boas-vindas
- [ ] Testei a rota `/pega-musicas` e vi a lista de 6 músicas
- [ ] Testei a rota `/duracao-total` e vi a duração formatada
- [ ] Todos os endpoints retornaram status `200 OK`

---

## 📝 Perguntas para Responder

1. **Qual é a duração total da playlist em segundos?**
   - Resposta: _____________

2. **Quantas músicas têm na playlist?**
   - Resposta: _____________

3. **Qual é o nome da primeira música da lista?**
   - Resposta: _____________

4. **Qual é o gênero da música "Billie Jean"?**
   - Resposta: _____________

---

## 💡 Dicas

- **GET** é um método HTTP usado para **buscar/pegar** dados
- O Postman mostra em verde quando a requisição dá certo (200 OK)
- Se aparecer erro vermelho (400, 404, 500), algo deu errado
- Verifique sempre se a URL está escrita corretamente

---

## 🆘 Problemas Comuns

| Problema | Solução |
|----------|---------|
| "Could not get response" | Verifique se o Docker está rodando |
| "Connection refused" | O backend não está no ar. Rode `docker-compose up` |
| Status 404 | URL errada. Confira se digitou corretamente |

