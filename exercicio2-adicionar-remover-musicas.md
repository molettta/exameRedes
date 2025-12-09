# 🎵 Exercício 2 - Adicionando e Removendo Músicas

## 📋 Objetivo
Aprender a modificar dados diretamente no código do backend, editando o array de músicas no arquivo `server.js`.

> ⚠️ **Importante:** Neste exercício NÃO vamos criar endpoints novos. Vamos editar diretamente o "banco de dados" (array) no código.

---

## 🚀 Passo a Passo

### PASSO 1: Abrir o Arquivo do Backend

1. **Abra o VS Code** (ou seu editor de código)

2. **Navegue até o arquivo:**
   ```
   atividadeApieFront2/backend/server.js
   ```

3. **Localize o array de músicas:**
   - Procure pela linha que começa com `const musicas = [`
   - Fica aproximadamente na **linha 30** do arquivo
   - Deve parecer assim:

   ```javascript
   const musicas = [
       { 
           id: 1, 
           nome: "Bohemian Rhapsody", 
           artista: "Queen", 
           duracao: 354,
           genero: "Rock"
       },
       // ... mais músicas
   ];
   ```

---

### PASSO 2: Entender a Estrutura de uma Música

Cada música é um **objeto JavaScript** com estas propriedades:

```javascript
{
    id: 1,                        // Número único de identificação
    nome: "Nome da Música",       // Título da música
    artista: "Nome do Artista",   // Quem canta/toca
    duracao: 240,                 // Duração em SEGUNDOS (não minutos!)
    genero: "Rock"                // Estilo musical
}
```

**Como converter minutos para segundos:**
- 3 minutos = 3 × 60 = **180 segundos**
- 4 minutos e 30 segundos = (4 × 60) + 30 = **270 segundos**
- 5 minutos e 15 segundos = (5 × 60) + 15 = **315 segundos**

---

### PASSO 3: Adicionar uma Nova Música

1. **Encontre o final da última música no array**
   - Procure pelo último `}` antes do `];`

2. **Adicione uma vírgula** após o último `}`

3. **Cole o código de uma nova música:**

   ```javascript
       { 
           id: 7, 
           nome: "Sweet Child O' Mine", 
           artista: "Guns N' Roses", 
           duracao: 356,           // 5:56
           genero: "Rock"
       }
   ```

4. **O array deve ficar assim (mostrando só o final):**

   ```javascript
       // ... músicas anteriores ...
       { 
           id: 6, 
           nome: "Stayin' Alive", 
           artista: "Bee Gees", 
           duracao: 245,
           genero: "Disco"
       },
       { 
           id: 7, 
           nome: "Sweet Child O' Mine", 
           artista: "Guns N' Roses", 
           duracao: 356,
           genero: "Rock"
       }
   ];
   ```

5. **Salve o arquivo** (Ctrl + S)

6. **O servidor reinicia automaticamente!**
   - Olhe no terminal, deve aparecer a mensagem da API novamente
   - Isso acontece por causa do `nodemon` que monitora mudanças

---

### PASSO 4: Testar a Alteração no Postman

1. **Abra o Postman**

2. **Faça uma requisição GET para:**
   ```
   http://localhost:3000/pega-musicas
   ```

3. **Verifique:**
   - Agora deve mostrar `"quantidade": 7`
   - A nova música deve aparecer no final da lista

4. **Teste também a duração total:**
   ```
   http://localhost:3000/duracao-total
   ```
   - O tempo total deve ter aumentado!

---

### PASSO 5: Remover uma Música

1. **Volte ao arquivo `server.js`**

2. **Encontre a música que quer remover**
   - Por exemplo, vamos remover "Stayin' Alive"

3. **Delete TODO o bloco da música:**
   - Delete desde o `{` até o `}`
   - Não esqueça de remover a vírgula que sobrar!

4. **Antes de remover:**
   ```javascript
       { 
           id: 5, 
           nome: "Imagine", 
           artista: "John Lennon", 
           duracao: 183,
           genero: "Pop"
       },
       { 
           id: 6,                      // ← Vamos remover esta
           nome: "Stayin' Alive", 
           artista: "Bee Gees", 
           duracao: 245,
           genero: "Disco"
       },
       { 
           id: 7, 
           nome: "Sweet Child O' Mine", 
           artista: "Guns N' Roses", 
           duracao: 356,
           genero: "Rock"
       }
   ```

5. **Depois de remover:**
   ```javascript
       { 
           id: 5, 
           nome: "Imagine", 
           artista: "John Lennon", 
           duracao: 183,
           genero: "Pop"
       },
       { 
           id: 7, 
           nome: "Sweet Child O' Mine", 
           artista: "Guns N' Roses", 
           duracao: 356,
           genero: "Rock"
       }
   ```

6. **Salve o arquivo** (Ctrl + S)

7. **Teste no Postman** - a música removida não deve mais aparecer

---

## ✏️ Sua Tarefa

Agora é sua vez! Faça as seguintes alterações:

### Tarefa 1: Adicione 2 músicas novas da sua escolha
Escolha músicas que você gosta e adicione ao array.

**Música 1:**
- Nome: _____________
- Artista: _____________
- Duração (em segundos): _____________
- Gênero: _____________

**Música 2:**
- Nome: _____________
- Artista: _____________
- Duração (em segundos): _____________
- Gênero: _____________

### Tarefa 2: Remova 1 música da lista original
Qual música você removeu? _____________

---

## ✅ Checklist de Entrega

- [ ] Adicionei 2 músicas novas ao array
- [ ] O servidor reiniciou automaticamente após salvar
- [ ] Testei no Postman e as músicas novas aparecem
- [ ] Removi 1 música da lista
- [ ] A duração total mudou conforme as alterações

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| Erro de sintaxe no terminal | Faltou vírgula ou chave | Verifique se todas as `{` têm `}` correspondente |
| Música não aparece | Esqueceu de salvar | Pressione Ctrl + S |
| Servidor não reinicia | Erro grave no código | Olhe a mensagem de erro no terminal |
| `unexpected token` | Vírgula no lugar errado | A última música NÃO deve ter vírgula depois |

---

## 💡 Dica Extra

Para encontrar a duração de uma música em segundos:
1. Google: "nome da música duration"
2. Converta para segundos: minutos × 60 + segundos

**Exemplo:** "Wonderwall" = 4:18
- 4 × 60 = 240
- 240 + 18 = **258 segundos**

