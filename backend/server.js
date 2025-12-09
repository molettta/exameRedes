// ============================================
// SERVIDOR BACKEND - API DE PLAYLIST DE MÚSICAS
// ============================================
// Este arquivo cria um servidor que responde requisições HTTP
// É como um "garçom digital" que recebe pedidos e devolve respostas

// ============================================
// IMPORTAÇÃO DAS BIBLIOTECAS
// ============================================
// require() = importa código de outras bibliotecas
const express = require('express');  // Framework para criar APIs
const cors = require('cors');        // Permite requisições de outros domínios

// ============================================
// CONFIGURAÇÃO DO SERVIDOR
// ============================================
const app = express();  // Cria a aplicação Express
const PORT = 3000;      // Porta onde o servidor vai rodar

// Middlewares (configurações que rodam antes das rotas)
app.use(cors());              // Permite que o frontend acesse a API
app.use(express.json());      // Permite receber dados JSON no body

// ============================================
// BANCO DE DADOS SIMULADO (Array em memória)
// ============================================
// Em uma aplicação real, isso seria um banco de dados como MySQL ou MongoDB
// Aqui usamos um array simples para fins didáticos

const musicas = [
    { 
        id: 1, 
        nome: "Bohemian Rhapsody", 
        artista: "Queen", 
        duracao: 354,           // duração em segundos (5:54)
        genero: "Rock"
    },
    { 
        id: 2, 
        nome: "Billie Jean", 
        artista: "Michael Jackson", 
        duracao: 294,           // duração em segundos (4:54)
        genero: "Pop"
    },
    { 
        id: 3, 
        nome: "Smells Like Teen Spirit", 
        artista: "Nirvana", 
        duracao: 301,           // duração em segundos (5:01)
        genero: "Grunge"
    },
    { 
        id: 4, 
        nome: "Hotel California", 
        artista: "Eagles", 
        duracao: 390,           // duração em segundos (6:30)
        genero: "Rock"
    },
    { 
        id: 5, 
        nome: "Imagine", 
        artista: "John Lennon", 
        duracao: 183,           // duração em segundos (3:03)
        genero: "Pop"
    },
    { 
        id: 6, 
        nome: "Stayin' Alive", 
        artista: "Bee Gees", 
        duracao: 245,           // duração em segundos (4:05)
        genero: "Disco"
    }
];

// ============================================
// ROTA 1: Página inicial (teste)
// ============================================
// GET = método HTTP para "buscar/pegar" dados
// '/' = rota raiz (página inicial)
app.get('/', (req, res) => {
    // req = requisição (o que o cliente enviou)
    // res = resposta (o que vamos devolver)
    res.json({
        mensagem: "🎵 API de Playlist funcionando!",
        endpoints: [
            "GET /pega-musicas - Lista todas as músicas",
            "GET /duracao-total - Soma a duração de todas as músicas"
        ]
    });
});

// ============================================
// ROTA 2: Listar todas as músicas
// ============================================
// Retorna a lista completa de músicas da playlist
app.get('/pega-musicas', (req, res) => {
    // Retorna objeto JSON com sucesso e a lista de músicas
    res.json({
        sucesso: true,
        quantidade: musicas.length,
        musicas: musicas
    });
});

// ============================================
// ROTA 3: Calcular duração total da playlist
// ============================================
// Soma a duração de todas as músicas em segundos
app.get('/duracao-total', (req, res) => {
    // reduce() = percorre o array e acumula um valor
    // acc = acumulador (começa em 0)
    // musica = cada item do array
    const totalSegundos = musicas.reduce((acc, musica) => {
        return acc + musica.duracao;
    }, 0);
    
    // Converte segundos para minutos e segundos
    const minutos = Math.floor(totalSegundos / 60);   // Math.floor = arredonda para baixo
    const segundos = totalSegundos % 60;              // % = resto da divisão (sobra)
    
    res.json({
        sucesso: true,
        totalMusicas: musicas.length,
        duracaoTotalSegundos: totalSegundos,
        duracaoFormatada: `${minutos} minutos e ${segundos} segundos`
    });
});

// ============================================
// INICIA O SERVIDOR
// ============================================
app.listen(PORT, () => {
    console.log('');
    console.log('🎵 ================================');
    console.log('   API DE PLAYLIST RODANDO!');
    console.log('🎵 ================================');
    console.log(`   URL: http://localhost:${PORT}`);
    console.log('');
    console.log('   Endpoints disponíveis:');
    console.log('   GET /              - Teste');
    console.log('   GET /pega-musicas  - Lista músicas');
    console.log('   GET /duracao-total - Duração total');
    console.log('');
});

