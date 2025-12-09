# 🎵 Exercício 4 - Endpoints: Música Mais Longa e Mais Curta

## 📋 Objetivo
Criar dois endpoints que processam os dados das músicas e retornam:
- A música com MAIOR duração (mais longa)
- A música com MENOR duração (mais curta)

---

## 🧠 Conceito: Como Encontrar o Maior/Menor Valor

Para encontrar o maior ou menor item em uma lista, usamos a função `reduce()`.

**Analogia:** Imagine que você tem várias réguas de tamanhos diferentes e quer achar a maior. Você pega a primeira, compara com a segunda, guarda a maior, compara com a terceira, guarda a maior... e assim por diante.

---

## 🚀 Passo a Passo

### PASSO 1: Abrir o Arquivo do Backend

1. **Abra o VS Code**

2. **Abra o arquivo:**
   ```
   atividadeApieFront2/backend/server.js
   ```

3. **Localize onde adicionar o código**
   - Procure pelo comentário `// INICIA O SERVIDOR`
   - Adicione os novos endpoints **ANTES** dessa linha

---

### PASSO 2: Criar o Endpoint da Música Mais Longa

1. **Copie e cole o código abaixo no `server.js`:**

```javascript
// ============================================
// ROTA: Música Mais Longa
// ============================================
// Encontra a música com maior duração na playlist
app.get('/musica-mais-longa', (req, res) => {
    // reduce() percorre o array e mantém o "vencedor"
    // Começa comparando a primeira com a segunda música
    // Depois compara o vencedor com a terceira, e assim por diante
    
    const maisLonga = musicas.reduce((maior, atual) => {
        // Se a música atual tem duração maior que a "maior" até agora
        // então a atual vira a nova "maior"
        if (atual.duracao > maior.duracao) {
            return atual;    // Retorna a atual como nova maior
        } else {
            return maior;    // Mantém a maior que já tínhamos
        }
    });
    
    // Calcula a duração formatada (MM:SS)
    const minutos = Math.floor(maisLonga.duracao / 60);
    const segundos = maisLonga.duracao % 60;
    
    // Retorna a resposta
    res.json({
        sucesso: true,
        mensagem: "Música mais longa da playlist",
        musica: {
            nome: maisLonga.nome,
            artista: maisLonga.artista,
            duracao: maisLonga.duracao,
            duracaoFormatada: `${minutos}:${segundos.toString().padStart(2, '0')}`,
            genero: maisLonga.genero
        }
    });
});
```

2. **Salve o arquivo** (Ctrl + S)

3. **Teste no Postman:**
   - **URL:** `http://localhost:3000/musica-mais-longa`
   - **Método:** GET

4. **Resultado esperado:**
   ```json
   {
       "sucesso": true,
       "mensagem": "Música mais longa da playlist",
       "musica": {
           "nome": "Hotel California",
           "artista": "Eagles",
           "duracao": 390,
           "duracaoFormatada": "6:30",
           "genero": "Rock"
       }
   }
   ```

---

### PASSO 3: Criar o Endpoint da Música Mais Curta

Agora é a sua vez! Crie o endpoint para encontrar a música mais curta.

**Dica:** O código é muito parecido! A única diferença é:
- Trocar `>` por `<` na comparação
- Mudar os textos para "mais curta"

1. **Use este modelo e COMPLETE as partes que faltam:**

```javascript
// ============================================
// ROTA: Música Mais Curta
// ============================================
// Encontra a música com menor duração na playlist
app.get('/musica-mais-curta', (req, res) => {
    const maisCurta = musicas.reduce((menor, atual) => {
        // TODO: Complete a condição
        // Dica: se atual.duracao for MENOR que menor.duracao, retorna atual
        if (atual.duracao ___ menor.duracao) {   // <-- Troque ___ pelo operador correto
            return atual;
        } else {
            return menor;
        }
    });
    
    const minutos = Math.floor(maisCurta.duracao / 60);
    const segundos = maisCurta.duracao % 60;
    
    res.json({
        sucesso: true,
        mensagem: "_______________",    // <-- Complete a mensagem
        musica: {
            nome: maisCurta.nome,
            artista: maisCurta.artista,
            duracao: maisCurta.duracao,
            duracaoFormatada: `${minutos}:${segundos.toString().padStart(2, '0')}`,
            genero: maisCurta.genero
        }
    });
});
```

2. **Complete o código:**
   - Substitua `___` pelo operador de comparação correto (`<`)
   - Complete a mensagem

3. **Salve e teste no Postman:**
   - **URL:** `http://localhost:3000/musica-mais-curta`

---

### PASSO 4: Verificar os Resultados

Teste ambos os endpoints e anote os resultados:

**Música mais longa:**
- Nome: _____________
- Duração: _____________

**Música mais curta:**
- Nome: _____________
- Duração: _____________

---

## ✅ Checklist de Entrega

- [ ] Criei o endpoint `/musica-mais-longa` copiando o código
- [ ] Testei no Postman e funcionou
- [ ] Criei o endpoint `/musica-mais-curta` completando o código
- [ ] Testei no Postman e funcionou
- [ ] Os dois endpoints retornam status `200 OK`
- [ ] Os resultados fazem sentido (a mais longa realmente é a maior)

---

## 📸 Capturas de Tela para Entrega

Tire prints do Postman mostrando:
1. Resultado do `/musica-mais-longa`
2. Resultado do `/musica-mais-curta`

---

## 🔍 Entendendo o Código

### O que é `reduce()`?

```javascript
const resultado = array.reduce((acumulador, itemAtual) => {
    // lógica de comparação
    return novoAcumulador;
});
```

| Parte | Significado |
|-------|-------------|
| `array` | A lista que vamos percorrer |
| `acumulador` | O "vencedor" atual da comparação |
| `itemAtual` | O item que estamos analisando agora |
| `return` | Define quem será o próximo "vencedor" |

### Exemplo Visual:

```
Músicas: [354s, 294s, 301s, 390s, 183s]

Passo 1: 354 vs 294 → maior = 354
Passo 2: 354 vs 301 → maior = 354
Passo 3: 354 vs 390 → maior = 390  ← novo vencedor!
Passo 4: 390 vs 183 → maior = 390

Resultado: 390 segundos (Hotel California)
```

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| `Cannot GET /musica-mais-longa` | Não salvou ou erro de sintaxe | Salve e verifique o terminal |
| Retorna música errada | Operador errado (`>` vs `<`) | Revise a lógica de comparação |
| `undefined` no resultado | Nome da variável errado | Use `maisCurta` e não `maisLonga` |

---

## 💡 Desafio Extra (Opcional)

Se terminar antes dos colegas, tente criar um endpoint que retorna AMBAS as músicas (mais longa E mais curta) em uma única resposta!

**Dica:** Você pode chamar `reduce()` duas vezes e montar um JSON com os dois resultados.

