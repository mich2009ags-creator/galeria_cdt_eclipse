// DADOS DAS 10 FOTOS
const fotosData = [
    {
        id: 1,
        filename: 'WhatsApp Image 2026-05-18 at 16.19.53.jpeg',
        titulo: 'Retratos do mundo',
        descricao: 'Entre luzes, ruas e expressões, suas fotos ganham vida própria, unindo estética urbana e a força da beleza negra de forma autêntica.',
        autor: 'Jef Delgado'
    },
    {
        id: 2,
        filename: 'IMG-20260518-WA0026.jpg',
        titulo: 'Cidade Noturna',
        descricao: 'Cada traço e cada expressão se tornam parte do seu cotidiano através da sua sensibilidade visual.',
        autor: 'Jef Delgado'
    },
    {
        id: 3,
        filename: 'WhatsApp Image 2026-05-18 at 16.17.08.jpeg',
        titulo: 'Show Mano Brown',
        descricao: 'O olhar de Jeff mostra que grandes histórias também nascem na comunidade. Suas fotos carregam simplicidade, estética e a força de quem batalhou para chegar longe.',
        autor: 'Jef Delgado'
    },
    {
        id: 4,
        filename: 'IMG-20260518-WA0022.jpg',
        titulo: 'O início',
        descricao: 'Um menino da quebrada que aprendeu a enxergar beleza onde muitos nunca pararam para olhar.',
        autor: 'Jef Delgado'
    },
    {
        id: 5,
        filename: 'IMG-20260518-WA0020.jpg',
        titulo: 'Sucessk',
        descricao: 'Um homem de sucesso que nunca deixou de carregar a essência do menino que começou do zero.',
        autor: 'Jef Delgado'
    },
    {
        id: 6,
        filename: 'IMG-20260518-WA0018.jpg',
        titulo: 'Mudanças',
        descricao: 'Jeff Delgado transforma cotidiano em narrativa visual. Entre lajes, ruas, música, luzes e rostos, suas fotografias carregam identidade, verdade e visão.',
        autor: 'Jef Delgado'
    },
    {
        id: 7,
        filename: 'IMG-20260518-WA0017.jpg',
        titulo: 'Os filmes',
        descricao: 'Cada imagem parece saída de um filme onde a periferia deixa de ser cenário e passa a ser protagonista.',
        autor: 'Jef Delgado'
    },
    {
        id: 8,
        filename: 'IMG-20260518-WA0016(1).jpg',
        titulo: 'Cotidiano da quebrada',
        descricao: 'Mano Brown sentado em um carro clássico, com a quebrada ao fundo e o ônibus "Vale das Virtudes" passando. Uma foto simples, urbana e cheia de atitude.',
        autor: 'Jef Delgado'
    },
    {
        id: 9,
        filename: 'IMG-20260518-WA0015.jpg',
        titulo: 'Da laje para o mundo',
        descricao: 'Da laje para o mundo, Jeff Delgado fotografa a quebrada transformando concreto em memória, identidade e arte.',
        autor: 'Jef Delgado'
    },
    {
        id: 10,
        filename: 'IMG-20260518-WA0030.jpg',
        titulo: 'Ice Cube Brasil',
        descricao: 'Ice Cube mostrando a força do rap em sua passagem pelo Brasil. 🎤🔥',
        autor: 'Jef Delgado'
    }
];

// Aguarda o HTML carregar
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('galleryGrid');
    
    // Criar os cards das fotos
    fotosData.forEach(foto => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.id = foto.id;
        
        // Descrição resumida para o card (máximo 100 caracteres)
        const descricaoResumida = foto.descricao.length > 100 ? 
            foto.descricao.substring(0, 100) + '...' : 
            foto.descricao;
        
        item.innerHTML = `
            <img src="${foto.filename}" alt="${foto.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Foto+não+encontrada'">
            <div class="overlay-info">
                <h3>${foto.titulo}</h3>
                <div class="descricao">${descricaoResumida}</div>
                <p class="autor">📷 ${foto.autor}</p>
            </div>
        `;
        grid.appendChild(item);
    });
    
    // ===== MODAL =====
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalAutor = document.getElementById('modalAutor');
    const closeBtn = document.querySelector('.close-modal');
    
    // Função para abrir o modal
    function abrirModal(foto) {
        modalImg.src = foto.filename;
        modalTitle.textContent = foto.titulo;
        modalDesc.textContent = foto.descricao;
        modalAutor.textContent = foto.autor;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Adicionar evento de clique em cada foto
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const foto = fotosData.find(f => f.id === id);
            if (foto) abrirModal(foto);
        });
    });
    
    // Fechar modal
    function fecharModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', fecharModal);
    
    // Clicar fora do modal fecha
    window.addEventListener('click', function(e) {
        if (e.target === modal) fecharModal();
    });
    
    // Tecla ESC fecha
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') fecharModal();
    });
    
    console.log('🌑 Eclipse Galeria carregada com ' + fotosData.length + ' fotos!');
});
