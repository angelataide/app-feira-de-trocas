export const propostasRecebidasMock = [
    {
        id: 1,
        itemSolicitado: "Livros de Romance",
        itemOferecido: "Conjunto de Panelas",
        usuario: "Roberto Mendes",
        bairro: "Jardim das Flores",
        data: "2 dias atrás",
        status: "pendente",
        mensagem:
            "Olá! Tenho interesse nos seus livros. Posso oferecer um conjunto de panelas de inox em ótimo estado.",
        conversa: [
            {
                id: 1,
                autor: "Roberto Mendes",
                mensagem: "Olá! Tenho interesse...",
                data: "2 dias atrás",
                isOwner: false,
            },
            {
                id: 2,
                autor: "Você",
                mensagem: "Oi Roberto! Tenho interesse sim.",
                data: "1 dia atrás",
                isOwner: true,
            },
        ],
    },
    {
        id: 2,
        itemSolicitado: "Livros de Romance",
        itemOferecido: "Roupas Femininas",
        usuario: "Ana Costa",
        bairro: "Jardim das Flores",
        data: "1 dia atrás",
        status: "pendente",
        mensagem:
            "Oi! Gostaria de trocar por algumas roupas femininas tamanho M.",
        conversa: [
            {
                id: 1,
                autor: "Ana Costa",
                mensagem: "Oi! Gostaria de trocar...",
                data: "1 dia atrás",
                isOwner: false,
            },
        ],
    },
];

export const propostasEnviadasMock = [
    {
        id: 3,
        itemSolicitado: "Bicicleta Infantil",
        itemOferecido: "Jogos de Tabuleiro",
        usuario: "João Santos",
        bairro: "Vila Nova",
        data: "3 dias atrás",
        status: "aceita",
        mensagem:
            "Tenho jogos de tabuleiro completos para trocar pela bicicleta.",
        conversa: [
            {
                id: 1,
                autor: "Você",
                mensagem: "Tenho jogos...",
                data: "3 dias atrás",
                isOwner: true,
            },
            {
                id: 2,
                autor: "João Santos",
                mensagem: "Perfeito! Aceito a troca.",
                data: "2 dias atrás",
                isOwner: false,
            },
        ],
    },
    {
        id: 4,
        itemSolicitado: "Kit Ferramentas",
        itemOferecido: "Livros Técnicos",
        usuario: "Carlos Oliveira",
        bairro: "Centro",
        data: "5 dias atrás",
        status: "recusada",
        mensagem: "Posso oferecer livros técnicos de engenharia.",
        conversa: [
            {
                id: 1,
                autor: "Você",
                mensagem: "Posso oferecer...",
                data: "5 dias atrás",
                isOwner: true,
            },
            {
                id: 2,
                autor: "Carlos Oliveira",
                mensagem: "Obrigado, mas preciso de ferramentas.",
                data: "4 dias atrás",
                isOwner: false,
            },
        ],
    },
];
