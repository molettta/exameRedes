# 🎵 Exercício 5 - Criar o Frontend: Música Mais Longa e Curta

## 📋 Objetivo
Criar **do zero** uma nova seção no frontend que mostra a música mais longa e a mais curta da playlist.

Você vai criar:
1. O **HTML** (a estrutura visual)
2. O **JavaScript** (a função que busca os dados)

---

## ⚠️ Pré-requisito

Antes de começar, certifique-se que:
- ✅ Você completou o Exercício 4
- ✅ Os endpoints `/musica-mais-longa` e `/musica-mais-curta` estão funcionando
- ✅ Testou ambos no Postman com sucesso

---

## 🚀 Passo a Passo

### PASSO 1: Abrir o Arquivo do Frontend

1. **Abra o VS Code**

2. **Abra o arquivo:**
   ```
   frontend/index.html
   ```

---

### PASSO 2: Encontrar Onde Adicionar o HTML

1. **Procure pelo comentário:**
   ```html
   <!-- ============================================
        EXERCÍCIO 5: Adicione aqui a Seção 3!
        ============================================ -->
   ```

2. Este comentário fica **depois da Seção 2** (Duração Total)

3. É aqui que você vai adicionar o código HTML da nova seção

---

### PASSO 3: Adicionar o HTML da Seção 3

**Copie e cole o código abaixo** logo após o comentário do Exercício 5:

```html
        <div class="section">
            <h2>🏆 3. Música Mais Longa e Mais Curta</h2>
            <button onclick="buscarExtremos()">🔍 Buscar Extremos</button>
            <div id="resultado-extremos"></div>
        </div>
```

**Explicação do código:**

| Parte | O que faz |
|-------|-----------|
| `<div class="section">` | Cria uma caixa com estilo de seção |
| `<h2>` | Título da seção |
| `<button onclick="buscarExtremos()">` | Botão que chama a função JavaScript |
| `<div id="resultado-extremos">` | Onde o resultado vai aparecer |

---

### PASSO 4: Encontrar Onde Adicionar o JavaScript

1. **Procure pelo comentário:**
   ```javascript
   // ============================================
   // EXERCÍCIO 5: Adicione aqui a Função 3!
   // ============================================
   ```

2. Este comentário fica no final do código JavaScript, dentro da tag `<script>`

---

### PASSO 5: Adicionar a Função JavaScript

**Copie e cole o código abaixo** logo após o comentário do Exercício 5:

```javascript
        // ============================================
        // FUNÇÃO 3: Buscar Extremos (Mais Longa e Mais Curta)
        // ============================================
        async function buscarExtremos() {
            // Passo 1: Encontrar onde mostrar o resultado
            const resultadoDiv = document.getElementById('resultado-extremos');
            
            // Passo 2: Mostrar mensagem de carregando
            resultadoDiv.innerHTML = '<p class="loading">🔍 Buscando músicas...</p>';

            try {
                // Passo 3: Fazer as duas requisições ao mesmo tempo
                const respostaLonga = await fetch(`${API_URL}/musica-mais-longa`);
                const respostaCurta = await fetch(`${API_URL}/musica-mais-curta`);
                
                // Passo 4: Converter as respostas para JSON
                const dadosLonga = await respostaLonga.json();
                const dadosCurta = await respostaCurta.json();

                // Passo 5: Verificar se deu certo
                if (dadosLonga.sucesso && dadosCurta.sucesso) {
                    // Passo 6: Montar o HTML com os resultados
                    resultadoDiv.innerHTML = `
                        <div class="card-destaque">
                            <h4>🏆 Música Mais LONGA</h4>
                            <div class="musica-nome">${dadosLonga.musica.nome}</div>
                            <div class="musica-artista">${dadosLonga.musica.artista}</div>
                            <div class="musica-duracao" style="font-size: 1.5em; margin-top: 10px;">
                                ⏱️ ${dadosLonga.musica.duracaoFormatada}
                            </div>
                        </div>
                        
                        <div class="card-destaque">
                            <h4>⚡ Música Mais CURTA</h4>
                            <div class="musica-nome">${dadosCurta.musica.nome}</div>
                            <div class="musica-artista">${dadosCurta.musica.artista}</div>
                            <div class="musica-duracao" style="font-size: 1.5em; margin-top: 10px;">
                                ⏱️ ${dadosCurta.musica.duracaoFormatada}
                            </div>
                        </div>
                    `;
                } else {
                    resultadoDiv.innerHTML = '<p class="erro">❌ Erro ao buscar dados</p>';
                }
            } catch (error) {
                // Se der erro, mostrar mensagem
                resultadoDiv.innerHTML = `
                    <p class="erro">
                        ❌ Erro: ${error.message}<br>
                        <small>Verifique se você completou o Exercício 4!</small>
                    </p>
                `;
            }
        }
```

---

### PASSO 6: Salvar e Testar

1. **Salve o arquivo** (Ctrl + S)

2. **Abra o navegador:** http://localhost:8080

3. **Verifique:**
   - A Seção 3 deve aparecer na página
   - O botão "🔍 Buscar Extremos" deve estar visível

4. **Clique no botão** e veja se funciona!

---

## 🔍 Entendendo o Código

### HTML - Estrutura Visual

```html
<div class="section">           <!-- Caixa da seção -->
    <h2>🏆 3. Título</h2>       <!-- Título -->
    <button onclick="...">      <!-- Botão que executa função -->
    <div id="resultado-...">    <!-- Onde aparece o resultado -->
</div>
```

### JavaScript - A Função

```javascript
async function buscarExtremos() {
    // 1. Encontra o elemento HTML
    const resultadoDiv = document.getElementById('resultado-extremos');
    
    // 2. Faz requisição para a API
    const resposta = await fetch(`${API_URL}/musica-mais-longa`);
    
    // 3. Converte para JSON
    const dados = await resposta.json();
    
    // 4. Mostra na tela
    resultadoDiv.innerHTML = `<p>${dados.musica.nome}</p>`;
}
```

---

## ✅ Checklist de Entrega

- [ ] Encontrei o comentário do HTML (Exercício 5)
- [ ] Colei o código HTML da Seção 3
- [ ] Encontrei o comentário do JavaScript (Exercício 5)
- [ ] Colei o código da função `buscarExtremos()`
- [ ] Salvei o arquivo
- [ ] A Seção 3 aparece na página
- [ ] Cliquei no botão e funcionou
- [ ] Aparece a música mais longa e mais curta

---

## 📸 Captura de Tela para Entrega

Tire um print mostrando:
1. A página no navegador (http://localhost:8080)
2. A Seção 3 com os dois cards preenchidos
3. As informações das músicas mais longa e mais curta

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| Seção 3 não aparece | HTML no lugar errado | Cole dentro do `<div class="container">` |
| Botão não faz nada | Função no lugar errado | Cole dentro da tag `<script>` |
| Erro no console | Erro de sintaxe | Verifique crases e chaves |
| "Erro: Failed to fetch" | Backend não está rodando | Suba o Docker |
| "Erro: 404" | Endpoint não existe | Complete o Exercício 4 primeiro |

---

## 💡 Como Ver Erros

1. Abra o navegador em http://localhost:8080
2. Pressione **F12** (abre DevTools)
3. Clique na aba **Console**
4. Clique no botão e veja se aparece erro em vermelho

---

## 🎉 Parabéns!

Se chegou até aqui, você completou todos os exercícios! Agora você sabe:

- ✅ Testar APIs no Postman
- ✅ Modificar dados no backend
- ✅ Criar endpoints simples
- ✅ Criar endpoints que processam dados
- ✅ Criar HTML para exibir dados
- ✅ Criar funções JavaScript que consomem APIs

**Você está no caminho certo para entender como aplicações web funcionam!** 🚀
