// Dados simples para produtos
const produtos = [
    {
        nome: "Capa Rosa",
        preco: "R$39,90",
        imagem: "Imagens/capinhaRosa.png"
    },
    {
        nome: "Capa Dragon Ball",
        preco: "R$39,90",
        imagem: "Imagens/fone-de-ouvido-preto.png"
    },
    {
        nome: "Suporte Popsocket",
        preco: "R$14,90",
        imagem: "Imagens/popsockets.png"
    },

    {
        nome: "Protetor de Cabo",
        preco: "R$5,90",
        imagem: "Imagens/Protetor-de-Cabo.png"
    },
    {
        nome: "Suporte de Celular",
        preco: "R$45,90",
        imagem: "Imagens/Suporte-Celular.png"
    },
    {
        nome: "Lente Camera Traseira",
        preco: "R$10,90",
        imagem: "Imagens/Lente-Camera-Traseira.png"
    },
];

// Inserir produtos no grid
const productGrid = document.getElementById("productGrid");

produtos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}" />
        <h3>${prod.nome}</h3>
        <p>${prod.preco}</p>
    `;
    productGrid.appendChild(card);
});
