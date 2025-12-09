# 🎵 Exercício 3 - Criando um Endpoint Estático

## 📋 Objetivo
Aprender a criar um endpoint (rota) simples no backend que retorna uma mensagem estática.

> 💡 **O que é um endpoint estático?** É uma rota que sempre retorna a mesma resposta, não importa quantas vezes você chame.

---

## 🚀 Passo a Passo

### PASSO 1: Abrir o Arquivo do Backend

1. **Abra o VS Code**

2. **Abra o arquivo:**
   ```
   atividadeApieFront2/backend/server.js
   ```

3. **Localize onde estão os endpoints**
   - Procure pelas linhas que começam com `app.get(`
   - Você vai ver endpoints como `/`, `/pega-musicas`, `/duracao-total`

---

### PASSO 2: Entender a Estrutura de um Endpoint

Todo endpoint tem esta estrutura:

```javascript
app.get('/nome-da-rota', (req, res) => {
    res.json({
        // dados que serão retornados
    });
});
```

**Explicação de cada parte:**

| Parte | Significado |
|-------|-------------|
| `app.get` | Cria uma rota do tipo GET (para buscar dados) |
| `'/nome-da-rota'` | O "endereço" da rota (ex: /teste, /info) |
| `(req, res)` | Função que recebe requisição (req) e resposta (res) |
| `res.json({...})` | Envia uma resposta em formato JSON |

---

### PASSO 3: Criar o Endpoint de Informações

Vamos criar um endpoint que retorna informações sobre a playlist.

1. **Encontre um bom lugar para adicionar o código**
   - Procure pelo comentário `// INICIA O SERVIDOR`
   - Adicione o novo endpoint **ANTES** dessa linha

2. **Copie e cole o código abaixo:**

```javascript
// ============================================
// ROTA 4: Informações da Playlist (ESTÁTICA)
// ============================================
// Este endpoint retorna sempre a mesma informação
app.get('/info', (req, res) => {
    res.json({
        nome: "Minha Playlist de Clássicos",
        criador: "Seu Nome Aqui",
        descricao: "Uma playlist com músicas clássicas de diversos gêneros",
        versao: "1.0"
    });
});
```

3. **Personalize o código:**
   - Troque `"Seu Nome Aqui"` pelo seu nome
   - Mude a descrição se quiser

4. **Salve o arquivo** (Ctrl + S)

---

### PASSO 4: Testar no Postman

1. **Abra o Postman**

2. **Crie uma nova requisição:**
   - **Método:** `GET`
   - **URL:** `http://localhost:3000/info`

3. **Clique em "Send"**

4. **Resultado esperado:**
   ```json
   {
       "nome": "Minha Playlist de Clássicos",
       "criador": "Seu Nome Aqui",
       "descricao": "Uma playlist com músicas clássicas de diversos gêneros",
       "versao": "1.0"
   }
   ```

5. **Verifique o status:** Deve ser `200 OK`

---

### PASSO 5: Testar no Navegador

1. **Abra o navegador** (Chrome, Firefox, etc.)

2. **Digite na barra de endereço:**
   ```
   http://localhost:3000/info
   ```

3. **Você deve ver o JSON na tela!**
   - O navegador também consegue acessar endpoints GET

---

## ✏️ Sua Tarefa

Agora crie MAIS UM endpoint estático por conta própria!

### Tarefa: Criar o endpoint `/sobre`

Este endpoint deve retornar informações sobre você (o desenvolvedor).

**Requisitos:**
- Rota: `/sobre`
- Deve retornar um JSON com:
  - `desenvolvedor`: seu nome
  - `curso`: "Redes de Computadores" (ou seu curso)
  - `instituicao`: "SENAC"
  - `mensagem`: uma mensagem qualquer

**Modelo para copiar e modificar:**

```javascript
// ============================================
// ROTA: Sobre o Desenvolvedor
// ============================================
app.get('/sobre', (req, res) => {
    res.json({
        desenvolvedor: "SEU NOME",
        curso: "SEU CURSO",
        instituicao: "SENAC",
        mensagem: "SUA MENSAGEM AQUI"
    });
});
```

---

## ✅ Checklist de Entrega

- [ ] Criei o endpoint `/info` conforme o tutorial
- [ ] Personalizei com meu nome
- [ ] Testei no Postman e funcionou (status 200)
- [ ] Testei no navegador e funcionou
- [ ] Criei o endpoint `/sobre` por conta própria
- [ ] Testei o `/sobre` no Postman

---

## 📸 Captura de Tela para Entrega

Tire um print do Postman mostrando:
1. A URL `http://localhost:3000/sobre`
2. O resultado JSON com suas informações
3. O status `200 OK`

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| `Cannot GET /info` | Endpoint não foi criado | Verifique se salvou o arquivo |
| Erro de sintaxe | Código com erro | Verifique chaves `{}` e parênteses `()` |
| `404 Not Found` | URL errada | Confira se escreveu `/info` corretamente |
| Servidor não reinicia | Erro no código | Leia a mensagem de erro no terminal |

---

## 💡 Dica de Ouro

Se o terminal mostrar um erro, leia a mensagem com calma! Geralmente indica a linha onde está o problema.

Exemplo de erro:
```
SyntaxError: Unexpected token ')' at line 85
```
Isso significa: tem algo errado na linha 85, provavelmente um parêntese ou chave faltando.

