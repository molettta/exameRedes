# 🎵 Exercício 5 - Frontend: Consumindo Música Mais Longa e Curta

## 📋 Objetivo
Fazer o frontend consumir os endpoints que você criou no Exercício 4, exibindo na tela a música mais longa e a mais curta.

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
   atividadeApieFront2/frontend/index.html
   ```

3. **Localize a seção 3** (Música Mais Longa e Mais Curta)
   - Procure pelo texto: `SEÇÃO 3: Música Mais Longa e Mais Curta`

---

### PASSO 2: Habilitar o Botão

1. **Encontre o botão desabilitado:**
   ```html
   <button onclick="buscarExtremos()" disabled style="opacity: 0.5; cursor: not-allowed;">
       Buscar Extremos (Em breve)
   </button>
   ```

2. **Modifique para habilitar o botão:**
   ```html
   <button onclick="buscarExtremos()">
       🔍 Buscar Extremos
   </button>
   ```

3. **Remova também o aviso:**
   - Delete ou comente a linha:
   ```html
   <p style="color: #b3b3b3; margin-bottom: 15px;">
       ⚠️ Esta seção será implementada no <strong>Exercício 5</strong>
   </p>
   ```

---

### PASSO 3: Implementar a Função JavaScript

1. **Localize a função `buscarExtremos()`**
   - Procure no código JavaScript (dentro da tag `<script>`)
   - Você vai encontrar:
   ```javascript
   async function buscarExtremos() {
       const resultadoDiv = document.getElementById('resultado-extremos');
       resultadoDiv.innerHTML = '<p class="erro">⚠️ Função ainda não implementada...</p>';
       
       // TODO: Os alunos vão implementar isso no Exercício 5
   }
   ```

2. **Substitua TODO o conteúdo da função pelo código abaixo:**

```javascript
// ============================================
// FUNÇÃO 3: Buscar Extremos (Mais Longa e Mais Curta)
// ============================================
async function buscarExtremos() {
    const resultadoDiv = document.getElementById('resultado-extremos');
    resultadoDiv.innerHTML = '<p class="loading">🔍 Buscando músicas...</p>';

    try {
        // Faz DUAS requisições: uma para cada endpoint
        // Promise.all() executa as duas ao mesmo tempo (mais rápido!)
        const [respostaLonga, respostaCurta] = await Promise.all([
            fetch(`${API_URL}/musica-mais-longa`),
            fetch(`${API_URL}/musica-mais-curta`)
        ]);
        
        // Converte as duas respostas para JSON
        const dadosLonga = await respostaLonga.json();
        const dadosCurta = await respostaCurta.json();

        // Verifica se as duas requisições deram certo
        if (dadosLonga.sucesso && dadosCurta.sucesso) {
            // Monta o HTML com os resultados
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
        // Se der erro (ex: endpoint não existe), mostra mensagem
        resultadoDiv.innerHTML = `
            <p class="erro">
                ❌ Erro: ${error.message}<br>
                <small>Verifique se você completou o Exercício 4!</small>
            </p>
        `;
    }
}
```

3. **Salve o arquivo** (Ctrl + S)

---

### PASSO 4: Testar no Navegador

1. **Abra o navegador**

2. **Acesse:** `http://localhost:8080`

3. **Clique no botão "🔍 Buscar Extremos"**

4. **Resultado esperado:**
   - Deve aparecer dois cards:
     - Um mostrando a música mais LONGA
     - Um mostrando a música mais CURTA

---

## 🔍 Entendendo o Código

### O que é `Promise.all()`?

```javascript
const [resultado1, resultado2] = await Promise.all([
    fetch(url1),
    fetch(url2)
]);
```

Isso faz **duas requisições ao mesmo tempo**, em paralelo!
- Mais rápido do que fazer uma, esperar, fazer outra
- Os resultados vêm em um array na mesma ordem

### Template Strings (Crases)

```javascript
const nome = "João";
const mensagem = `Olá, ${nome}!`;  // Resultado: "Olá, João!"
```

- Usamos crases ` `` ` em vez de aspas
- `${variavel}` insere o valor da variável no texto
- Permite quebrar linhas facilmente

---

## ✅ Checklist de Entrega

- [ ] Habilitei o botão removendo `disabled`
- [ ] Removi o aviso de "Em breve"
- [ ] Substituí a função `buscarExtremos()` pelo código novo
- [ ] Salvei o arquivo
- [ ] Testei no navegador e funcionou
- [ ] Os dois cards aparecem com as músicas corretas

---

## 📸 Captura de Tela para Entrega

Tire um print mostrando:
1. A página no navegador (`http://localhost:8080`)
2. A seção 3 com os dois cards preenchidos
3. As informações das músicas mais longa e mais curta

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| Botão não funciona | JavaScript com erro | Abra o Console (F12) e veja o erro |
| "Erro: Failed to fetch" | Backend não está rodando | Verifique se o Docker está no ar |
| "Erro: 404" | Endpoint não existe | Complete o Exercício 4 primeiro |
| Mostra "undefined" | Nome da propriedade errado | Confira se está usando `dadosLonga.musica.nome` |

---

## 💡 Como Ver Erros JavaScript

1. **Abra o navegador** em `http://localhost:8080`

2. **Pressione F12** para abrir as Ferramentas do Desenvolvedor

3. **Clique na aba "Console"**

4. **Clique no botão** e veja se aparece algum erro em vermelho

5. **Leia a mensagem de erro** - ela indica o problema!

---

## 🎉 Parabéns!

Se chegou até aqui, você completou todos os exercícios! Agora você sabe:

- ✅ Testar APIs no Postman
- ✅ Modificar dados no backend
- ✅ Criar endpoints simples
- ✅ Criar endpoints que processam dados
- ✅ Fazer o frontend consumir APIs

**Você está no caminho certo para entender como aplicações web funcionam!** 🚀

