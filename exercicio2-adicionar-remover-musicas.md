# 🎵 Exercício 2 - Criando Sua Playlist Favorita

## 📋 Objetivo
Substituir a playlist de exemplo pela **sua própria playlist** com suas músicas favoritas!

> ⚠️ **Importante:** Neste exercício você vai **apagar todas as músicas** de exemplo e criar sua própria playlist com **no mínimo 3 músicas**.

---

## 🚀 Passo a Passo

### PASSO 1: Abrir o Arquivo do Backend

1. **Abra o VS Code** (ou seu editor de código)

2. **Navegue até o arquivo:**
   ```
   backend/server.js
   ```

3. **Localize o array de músicas:**
   - Procure pela linha que começa com `const musicas = [`
   - Fica aproximadamente na **linha 30** do arquivo

---

### PASSO 2: Entender a Estrutura de uma Música

Cada música é um **objeto JavaScript** com estas propriedades:

```javascript
{
    id: 1,                        // Número único (1, 2, 3...)
    nome: "Nome da Música",       // Título da música
    artista: "Nome do Artista",   // Quem canta/toca
    duracao: 240,                 // Duração em SEGUNDOS
    genero: "Rock"                // Estilo musical
}
```

**📐 Como converter minutos para segundos:**

| Duração | Cálculo | Resultado |
|---------|---------|-----------|
| 3:00 | 3 × 60 | **180 segundos** |
| 3:30 | (3 × 60) + 30 | **210 segundos** |
| 4:15 | (4 × 60) + 15 | **255 segundos** |
| 5:42 | (5 × 60) + 42 | **342 segundos** |

---

### PASSO 3: Apagar as Músicas de Exemplo

1. **Encontre o array `const musicas = [`**

2. **Selecione TODO o conteúdo** entre os colchetes `[` e `]`
   - São todas as músicas de Bohemian Rhapsody até Stayin' Alive

3. **Apague tudo** (Delete ou Backspace)

4. **O array deve ficar vazio assim:**
   ```javascript
   const musicas = [
       
   ];
   ```

---

### PASSO 4: Adicionar Suas Músicas Favoritas

Agora adicione **no mínimo 3 músicas** que você gosta!

1. **Use este modelo para cada música:**

```javascript
    { 
        id: 1, 
        nome: "NOME DA MÚSICA", 
        artista: "NOME DO ARTISTA", 
        duracao: 000,           // duração em segundos
        genero: "GÊNERO"
    }
```

2. **Exemplo de playlist completa:**

```javascript
const musicas = [
    { 
        id: 1, 
        nome: "Blinding Lights", 
        artista: "The Weeknd", 
        duracao: 200,           // 3:20
        genero: "Pop"
    },
    { 
        id: 2, 
        nome: "Flowers", 
        artista: "Miley Cyrus", 
        duracao: 200,           // 3:20
        genero: "Pop"
    },
    { 
        id: 3, 
        nome: "Anti-Hero", 
        artista: "Taylor Swift", 
        duracao: 200,           // 3:20
        genero: "Pop"
    }
];
```

3. **⚠️ ATENÇÃO às vírgulas:**
   - Cada música termina com `},` (com vírgula)
   - **EXCETO a última** que termina só com `}` (sem vírgula)

4. **Salve o arquivo** (Ctrl + S)

---

### PASSO 5: Verificar se o Servidor Reiniciou

1. **Olhe o terminal** onde o Docker está rodando

2. **Deve aparecer a mensagem:**
   ```
   🎵 ================================
      API DE PLAYLIST RODANDO!
   🎵 ================================
   ```

3. **Se aparecer erro vermelho:**
   - Leia a mensagem de erro
   - Geralmente é vírgula faltando ou sobrando
   - Corrija e salve novamente

---

### PASSO 6: Testar no Postman

1. **Abra o Postman**

2. **Faça uma requisição GET para:**
   ```
   http://localhost:3000/pega-musicas
   ```

3. **Verifique:**
   - Suas músicas devem aparecer
   - A quantidade deve bater com o número de músicas que você adicionou

4. **Teste a duração total:**
   ```
   http://localhost:3000/duracao-total
   ```

---

## ✏️ Sua Tarefa

### Crie sua playlist com NO MÍNIMO 3 músicas favoritas!

Preencha a tabela abaixo com as músicas que você vai adicionar:

| # | Música | Artista | Duração (MM:SS) | Duração (segundos) | Gênero |
|---|--------|---------|-----------------|-------------------|--------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

## 💡 Como Descobrir a Duração de uma Música

### Método 1: Google
1. Pesquise: `"nome da música" duration`
2. O Google geralmente mostra a duração

### Método 2: Spotify / YouTube
1. Abra a música no Spotify ou YouTube
2. Veja a duração no player

### Método 3: Chute Educado 😄
- Músicas curtas: ~180 segundos (3 min)
- Músicas médias: ~210 segundos (3:30)
- Músicas longas: ~300 segundos (5 min)

---

## ✅ Checklist de Entrega

- [ ] Apaguei todas as músicas de exemplo
- [ ] Adicionei no mínimo 3 músicas minhas favoritas
- [ ] Cada música tem: id, nome, artista, duracao, genero
- [ ] Os IDs estão em sequência (1, 2, 3...)
- [ ] A última música NÃO tem vírgula depois do `}`
- [ ] Salvei o arquivo e o servidor reiniciou
- [ ] Testei no Postman e minhas músicas aparecem
- [ ] A duração total está calculando corretamente

---

## 📸 Captura de Tela para Entrega

Tire um print do Postman mostrando:
1. A URL `http://localhost:3000/pega-musicas`
2. A lista com SUAS músicas favoritas
3. O status `200 OK`

---

## 🆘 Problemas Comuns

| Problema | Causa | Solução |
|----------|-------|---------|
| `Unexpected token` | Vírgula errada | Verifique: última música NÃO tem vírgula |
| `Unexpected string` | Faltou vírgula | Adicione vírgula entre as músicas |
| Servidor não reinicia | Erro de sintaxe | Leia o erro no terminal e corrija |
| `musicas is not defined` | Deletou demais | Mantenha `const musicas = [ ];` |
| Aspas erradas | Copiou do Word | Use aspas retas `"` e não curvas `"` |

---

## 🎯 Exemplo Completo

Se ainda tiver dúvida, aqui está um exemplo completo funcionando:

```javascript
const musicas = [
    { 
        id: 1, 
        nome: "Shallow", 
        artista: "Lady Gaga", 
        duracao: 216,           // 3:36
        genero: "Pop"
    },
    { 
        id: 2, 
        nome: "Evidências", 
        artista: "Chitãozinho e Xororó", 
        duracao: 288,           // 4:48
        genero: "Sertanejo"
    },
    { 
        id: 3, 
        nome: "Aquarela", 
        artista: "Toquinho", 
        duracao: 252,           // 4:12
        genero: "MPB"
    }
];
```
