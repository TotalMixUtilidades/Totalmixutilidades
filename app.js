/* ══════════════════════════════════════════════════════════════════
   TOTAL MIX Utilidades - INTERACTIVE E-COMMERCE LOGIC (PORTUGUESE)
   ══════════════════════════════════════════════════════════════════ */

// ══ BANCO DE DADOS DE PRODUTOS ══
const PRODUCTS = [
    // --- LIMPEZA DOMÉSTICA E PROFISSIONAL ---
    {
        id: "limp-detergente-pro",
        name: "Detergente Neutro Pro 5L",
        category: "limpeza",
        volume: "Bombona de 5 Litros",
        tag: "Mais Vendido",
        tagClass: "tag-bestseller",
        icon: "droplet",
        rating: 5,
        yield: "Até 100 Litros diluídos",
        dilution: "1:20 (Limpeza Leve) ou Puro (Gordura)",
        usage: "Ideal para cozinhas industriais, louças, superfícies laváveis, pisos e azulejos. Alto poder desengordurante com tensoativos biodegradáveis.",
        description: "Detergente neutro super concentrado desenvolvido para alto rendimento na remoção de gorduras e limpeza geral de superfícies sem danificar o brilho natural."
    },
    {
        id: "limp-desinfetante-euc",
        name: "Desinfetante Concentrado Eucalipto 5L",
        category: "limpeza",
        volume: "Bombona de 5 Litros",
        tag: "Mais Vendido",
        tagClass: "tag-bestseller",
        icon: "wind",
        rating: 5,
        yield: "Até 150 Litros diluídos",
        dilution: "1:30 (Desinfecção) ou 1:50 (Aromatização)",
        usage: "Aplicar diluído em pisos, banheiros, ralos, paredes e superfícies laváveis. Deixar agir por 10 minutos para eliminação de germes e bactérias.",
        description: "Desinfetante de alta eficácia com delicioso e duradouro perfume de eucalipto. Elimina 99.9% dos microrganismos mantendo o ambiente limpo e higienizado."
    },
    {
        id: "limp-multiuso-prem",
        name: "Limpador Multiuso Premium 1L",
        category: "limpeza",
        volume: "Frasco de 1 Litro",
        tag: "Básico",
        tagClass: "tag-new",
        icon: "spray-can",
        rating: 4,
        yield: "Pronto para Uso",
        dilution: "Não requer (Pronto Uso)",
        usage: "Pulverizar diretamente sobre a superfície a ser limpa e remover o excesso com um pano de microfibra limpo e seco.",
        description: "Fórmula balanceada com ação rápida. Remove poeira, gordura superficial, marcas de dedos e sujeiras comuns em mesas, plásticos, vidros e eletrodomésticos."
    },
    {
        id: "limp-pos-obra",
        name: "Limpador Pós-Obra Ultra 5L",
        category: "limpeza",
        volume: "Bombona de 5 Litros",
        tag: "Profissional",
        tagClass: "tag-bestseller",
        icon: "shield-alert",
        rating: 5,
        yield: "Até 25 Litros diluídos",
        dilution: "1:5 (Limpeza Pesada) a 1:10 (Limpeza Média)",
        usage: "Aplicar sobre o piso seco, deixar agir por 5 a 10 minutos (sem deixar secar), esfregar com vassoura ou enceradeira e enxaguar com bastante água.",
        description: "Detergente ácido decapante profissional desenvolvido especialmente para remover resíduos de cimento, argamassa, rejunte, cal e gesso de pisos cerâmicos e porcelanatos."
    },
    {
        id: "limp-cloro-gel",
        name: "Cloro Gel Ativo Aditivado 1L",
        category: "limpeza",
        volume: "Frasco de 1 Litro",
        tag: "Lançamento",
        tagClass: "tag-new",
        icon: "droplet",
        rating: 5,
        yield: "Alta rentabilidade (Fórmula em Gel)",
        dilution: "Pronto Uso ou 1:10 em balde",
        usage: "Ideal para banheiros, azulejos, rejuntes encardidos e vasos sanitários. O gel adere às paredes verticais potencializando a limpeza.",
        description: "Alvejante com cloro ativo em textura gel. Não escorre rapidamente, garantindo maior tempo de contato com a sujeira para branquear rejuntes e eliminar mofo de forma prática."
    },
    {
        id: "limp-aromatizante-lav",
        name: "Aromatizador Lavanda CD 140ml",
        category: "limpeza",
        volume: "Frasco Gotas de 140ml",
        tag: "Concentrado",
        tagClass: "tag-new",
        icon: "wind",
        rating: 4,
        yield: "Rende centenas de aplicações",
        dilution: "Algumas gotas na água ou pano",
        usage: "Pingar de 5 a 10 gotas no ralo do banheiro, no lixo ou em um pano úmido para passar nos móveis e manter o perfume por horas.",
        description: "Essência concentrada de lavanda de alta fixação. Proporciona perfume sofisticado e sensação de bem-estar por períodos prolongados no ambiente."
    },

    // --- TRATAMENTO DE PISCINA ---
    {
        id: "pisc-cloro-gran",
        name: "Cloro Granulado Estabilizado 10kg",
        category: "piscina",
        volume: "Balde de 10 Kg",
        tag: "Essencial",
        tagClass: "tag-bestseller",
        icon: "waves",
        rating: 5,
        yield: "Rendimento para piscinas de grande porte",
        dilution: "4g por cada 1.000 litros (1m³) de água",
        usage: "Dissolver previamente em um balde plástico com água da própria piscina e espalhar uniformemente sobre toda a superfície, de preferência à noite.",
        description: "Cloro ativo granulado de origem orgânica com estabilizador solar. Mantém o teor de cloro residual por mais tempo livre da ação dos raios UV, garantindo água cristalina e desinfetada."
    },
    {
        id: "pisc-algicida-choque",
        name: "Algicida de Choque Extra Fiel 1L",
        category: "piscina",
        volume: "Frasco de 1 Litro",
        tag: "Eficiente",
        tagClass: "tag-bestseller",
        icon: "waves",
        rating: 4,
        yield: "Trata até 100.000 litros de água",
        dilution: "6ml para cada 1.000 litros de água",
        usage: "Usar quando a água estiver esverdeada ou com as paredes escorregadias (presença de algas). Filtrar ou aspirar o fundo após a decantação.",
        description: "Fórmula poderosa sem cobre livre, recomendada para eliminar e combater infestações severas de algas que deixam a água verde e as superfícies da piscina viscosas."
    },
    {
        id: "pisc-clarificante",
        name: "Clarificante e Floculante Concentrado 1L",
        category: "piscina",
        volume: "Frasco de 1 Litro",
        tag: "Brilho Extra",
        tagClass: "tag-new",
        icon: "waves",
        rating: 5,
        yield: "Trata até 200.000 litros",
        dilution: "1.5ml a 6ml para cada 1.000 litros de água",
        usage: "Aplicar para decantar a sujeira fina suspensa na água. Deixar a água em repouso por 12 horas e, em seguida, aspirar o fundo drenando.",
        description: "Auxiliar de filtração de alto rendimento. Aglutina as micropartículas de sujeira na água, formando flocos pesados que se depositam facilmente no fundo para aspiração rápida."
    },
    {
        id: "pisc-barrilha-ph",
        name: "Elevador de pH Barrilha Leve 2kg",
        category: "piscina",
        volume: "Saco de 2 Kg",
        tag: "Essencial",
        tagClass: "tag-bestseller",
        icon: "waves",
        rating: 4,
        yield: "Conforme nível medido no teste",
        dilution: "Aproximadamente 10g a 20g por 1.000L",
        usage: "Utilizar quando o pH da água estiver abaixo de 7.2. Dissolver o pó em um balde com água e distribuir na piscina com o filtro ligado.",
        description: "Carbonato de sódio purificado indicado para elevar o pH da água da piscina quando este estiver na faixa ácida, prevenindo irritações nos olhos e corrosão de metais."
    },
    {
        id: "pisc-limpa-bordas",
        name: "Limpa Bordas Gel Concentrado 1L",
        category: "piscina",
        volume: "Frasco de 1 Litro",
        tag: "Praticidade",
        tagClass: "tag-new",
        icon: "waves",
        rating: 5,
        yield: "Rendimento superior (textura em gel)",
        dilution: "Aplicar diretamente puro na esponja",
        usage: "Colocar o gel em uma esponja macia umedecida, esfregar as bordas secas da piscina na linha d'água e enxaguar com a própria água.",
        description: "Limpador biodegradável formulado especialmente para remover gordura acumulada nas bordas da piscina sem alterar o pH da água ou causar espuma."
    },

    // --- LINHA AUTOMOTIVA ---
    {
        id: "auto-shampoo-cera",
        name: "Lava Carros com Cera Carnaúba 1L",
        category: "automotivo",
        volume: "Frasco de 1 Litro",
        tag: "Mais Vendido",
        tagClass: "tag-bestseller",
        icon: "car",
        rating: 5,
        yield: "Rende até 20 lavagens",
        dilution: "1:40 (1 parte para 40 partes de água)",
        usage: "Diluir o produto em água, ensaboar o veículo de cima para baixo usando luva de microfibra, enxaguar e secar com pano apropriado.",
        description: "Shampoo neutro automotivo aditivado com cera de carnaúba de alta qualidade. Limpa e remove a sujeira pesada, deixando uma película protetora hidrofóbica e brilho imediato."
    },
    {
        id: "auto-pretinho-pneu",
        name: "Pretinho Especial Brilho Molhado 1L",
        category: "automotivo",
        volume: "Garrafa de 1 Litro",
        tag: "Brilho Intenso",
        tagClass: "tag-bestseller",
        icon: "car",
        rating: 5,
        yield: "Rende dezenas de aplicações",
        dilution: "Pronto para Uso (Não diluir)",
        usage: "Limpar e secar bem os pneus. Aplicar o produto de forma uniforme com pincel ou esponja e aguardar secar por 10 minutos.",
        description: "Pretinho automotivo com fórmula especial de longa duração. Garante efeito 'brilho molhado' profundo nos pneus, protegendo contra o ressecamento causado pelo sol."
    },
    {
        id: "auto-cera-polidora",
        name: "Cera Carnaúba Polidora Paste 200g",
        category: "automotivo",
        volume: "Lata de 200g",
        tag: "Oferta",
        tagClass: "tag-promo",
        icon: "sparkles",
        rating: 5,
        yield: "Cobre até 15 veículos de porte médio",
        dilution: "Não se aplica (Pasta)",
        usage: "Aplicar uma camada fina sobre a pintura limpa e fria usando aplicador de espuma. Deixar secar e lustrar com pano de microfibra macio.",
        description: "Cera de polimento premium à base de carnaúba pura e silicones. Restaura o brilho original da pintura automotiva, camufla micro-riscos e cria barreira contra intempéries."
    },
    {
        id: "auto-limpa-vidros",
        name: "Limpa Vidros Antiembaçante 500ml",
        category: "automotivo",
        volume: "Pulverizador 500ml",
        tag: "Prático",
        tagClass: "tag-new",
        icon: "spray-can",
        rating: 4,
        yield: "Rendimento prolongado",
        dilution: "Pronto Uso",
        usage: "Pulverizar o produto nos vidros externos/internos e secar em seguida com pano de microfibra limpo e seco.",
        description: "Limpador especial para vidros e espelhos automotivos. Remove marcas de gordura e poeira, deixando uma película invisível que evita o embaçamento em dias de chuva."
    },
    {
        id: "auto-renovador",
        name: "Renovador de Plásticos e Borrachas 250g",
        category: "automotivo",
        volume: "Pote de 250g",
        tag: "Lançamento",
        tagClass: "tag-new",
        icon: "car",
        rating: 5,
        yield: "Alta cobertura em painéis e parachoques",
        dilution: "Pronto Uso (Gel/Pasta)",
        usage: "Aplicar pequena quantidade com esponja de espuma sobre os plásticos internos (painel) ou externos do veículo. Lustrar de leve para acabamento seco.",
        description: "Gel de silicone especial para restaurar o aspect original de plásticos e borrachas ressecadas. Proporciona brilho acetinado com proteção contra raios solares UV."
    },

    // --- UTENSÍLIOS DE FAXINA ---
    {
        id: "uten-mop-inox",
        name: "Mop Giratório Inox com Balde 15L",
        category: "utensilios",
        volume: "Kit Completo (Balde + Mop + Refil)",
        tag: "Oferta",
        tagClass: "tag-promo",
        icon: "brush",
        rating: 5,
        yield: "Durabilidade residencial e comercial",
        dilution: "Não se aplica",
        usage: "Ideal para limpar pisos frios, amadeirados ou sintéticos. O espremedor de inox centrífugo regula a umidade do refil de microfibra de forma prática.",
        description: "Balde espremedor super reforçado com cesto de centrifugação em aço inox. Acompanha cabo ajustável em metal e refil de microfibra altamente absorvente e lavável."
    },
    {
        id: "uten-vassoura",
        name: "Vassoura de Nylon Macia com Cabo",
        category: "utensilios",
        volume: "Unidade (Cerdas + Cabo 1.20m)",
        tag: "Básico",
        tagClass: "tag-bestseller",
        icon: "brush",
        rating: 4,
        yield: "Alta resistência",
        dilution: "Não se aplica",
        usage: "Para varrer poeiras finas e detritos leves em pisos internos como cerâmicos, vinílicos ou laminados sem riscar a superfície.",
        description: "Vassoura com cerdas de nylon macias e plumadas, que retêm melhor a sujeira e cabelos. Acompanha cabo de aço revestido muito resistente."
    },
    {
        id: "uten-rodo-alum",
        name: "Rodo de Alumínio Reforçado 40cm",
        category: "utensilios",
        volume: "Unidade com Cabo",
        tag: "Durabilidade",
        tagClass: "tag-bestseller",
        icon: "brush",
        rating: 5,
        yield: "Qualidade profissional",
        dilution: "Não se aplica",
        usage: "Utilizado para puxar água e secar pisos com rapidez. Borracha dupla que adere perfeitamente a superfícies planas.",
        description: "Rodo fabricado com base em alumínio anodizado ultra resistente, que não enferruja. Borracha EVA dupla aderente que seca o chão em uma única passada."
    },
    {
        id: "uten-panos-micro",
        name: "Kit Panos de Microfibra 30x30 (5 un)",
        category: "utensilios",
        volume: "Embalagem com 5 unidades",
        tag: "Mais Vendido",
        tagClass: "tag-bestseller",
        icon: "brush",
        rating: 5,
        yield: "Laváveis e reutilizáveis dezenas de vezes",
        dilution: "Não se aplica",
        usage: "Uso seco para tirar pó (estática atrai sujeira) ou úmido para limpeza geral de móveis, telas de LED, vidros e secagem de louças.",
        description: "Panos de microfibra ultra macios que limpam sem riscar e não soltam fiapos. Excelente absorção de líquidos e poeira, ideal para residências e estética de carros."
    },
    {
        id: "uten-luvas-latex",
        name: "Luvas de Látex Multiuso Forradas (Par)",
        category: "utensilios",
        volume: "Par de Luvas",
        tag: "EPI",
        tagClass: "tag-new",
        icon: "brush",
        rating: 4,
        yield: "Proteção de longa duração",
        dilution: "Não se aplica",
        usage: "Usar durante o manuseio de químicos corrosivos (cloro, ácidos), lavagem de louças, faxina pesada em banheiros e manutenção de jardim.",
        description: "Luva confeccionada em látex 100% natural com palma antiderrapante e forro interno de algodão para maior conforto e absorção do suor nas mãos durante a limpeza."
    },
    {
        id: "uten-balde-15l",
        name: "Balde Plástico Reforçado 15 Litros",
        category: "utensilios",
        volume: "Balde plástico 15L",
        tag: "Básico",
        tagClass: "tag-new",
        icon: "bucket",
        rating: 4,
        yield: "Muito resistente a impactos",
        dilution: "Não se aplica",
        usage: "Diluir produtos químicos de limpeza doméstica, transportar água para lavagem e organizar ferramentas ou panos molhados.",
        description: "Balde plástico fabricado em polipropileno de alta densidade, com alça metálica anatômica confortável e escala graduada de litros interna para medições precisas."
    },
    {
        id: "uten-esponjas",
        name: "Esponjas Dupla Face Macias (4 un)",
        category: "utensilios",
        volume: "Pacote com 4 unidades",
        tag: "Uso Diário",
        tagClass: "tag-new",
        icon: "brush",
        rating: 4,
        yield: "Durabilidade média de 2 semanas por unidade",
        dilution: "Não se aplica",
        usage: "Lado verde de fibra abrasiva para sujeiras difíceis e panelas; lado amarelo de espuma macia para copos, pratos e vidros delicados.",
        description: "Esponja multiuso dupla face de espuma firme e fibra sintética de alta qualidade. Ideal para a lavagem diária de utensílios de cozinha sem esfarelar facilmente."
    }
];

// ══ CONFIGURAÇÕES DO MONTE SEU KIT ══
const KIT_STEPS_CONFIG = {
    step1: {
        title: "Balde ou Organização",
        allowedQuantity: 1,
        items: [
            { id: "uten-balde-15l", name: "Balde Plástico Reforçado 15L", volume: "15 Litros", icon: "bucket" },
            { id: "uten-mop-inox-bucket", name: "Balde Espremedor Centrífuga Mop", volume: "Sistema Inox", icon: "bucket" }
        ]
    },
    step2: {
        title: "Equipamento Principal",
        allowedQuantity: 1,
        items: [
            { id: "uten-mop-inox", name: "Mop Giratório Inox (Sem Balde)", volume: "Cabo + Refil", icon: "brush" },
            { id: "uten-vassoura", name: "Vassoura Nylon Macia", volume: "Com Cabo", icon: "brush" },
            { id: "uten-rodo-alum", name: "Rodo Alumínio 40cm", volume: "Com Cabo", icon: "brush" }
        ]
    },
    step3: {
        title: "Produtos Químicos (Escolha 2)",
        allowedQuantity: 2,
        items: [
            { id: "limp-detergente-pro", name: "Detergente Neutro Pro 5L", volume: "5 Litros", icon: "droplet" },
            { id: "limp-desinfetante-euc", name: "Desinfetante Eucalipto 5L", volume: "5 Litros", icon: "wind" },
            { id: "limp-cloro-gel", name: "Cloro Gel Ativo 1L", volume: "1 Litro", icon: "droplet" },
            { id: "auto-shampoo-cera", name: "Lava Carros com Cera 1L", volume: "1 Litro", icon: "car" },
            { id: "pisc-clarificante", name: "Clarificante Piscina 1L", volume: "1 Litro", icon: "waves" }
        ]
    },
    step4: {
        title: "Acessórios de Faxina (Escolha 2)",
        allowedQuantity: 2,
        items: [
            { id: "uten-panos-micro", name: "Kit Panos Microfibra (5 un)", volume: "30x30cm", icon: "brush" },
            { id: "uten-luvas-latex", name: "Luvas de Látex Forradas", volume: "Par de Luvas", icon: "brush" },
            { id: "uten-esponjas", name: "Esponjas Dupla Face (4 un)", volume: "4 Unidades", icon: "brush" }
        ]
    }
};

// ══ ESTADOS DO APLICATIVO ══
let cart = [];
let currentFilter = "todos";
let currentSearchTerm = "";
let currentSort = "default";

// Estado da montagem do Kit
let kitSelection = {
    step1: [], // Máx 1
    step2: [], // Máx 1
    step3: [], // Máx 2
    step4: []  // Máx 2
};

// Configuração do WhatsApp da loja (Substitua por número válido, ex: 5548999999999)
const STORE_PHONE = "5548999999999"; 

// ══ INICIALIZAÇÃO DO APP ══
document.addEventListener("DOMContentLoaded", () => {
    // Carregar carrinho salvo no cache se houver
    const cachedCart = localStorage.getItem("totalmix_cart");
    if (cachedCart) {
        try {
            cart = JSON.parse(cachedCart);
        } catch (e) {
            cart = [];
        }
    }
    
    // Configurar Navegação e Elementos Globais
    initHeaderScroll();
    initMobileNav();
    
    // Inicializar Catálogo de Produtos
    renderCatalog();
    initCatalogControls();
    
    // Inicializar o Monte seu Kit
    renderKitBuilderOptions();
    initKitBuilderControls();
    
    // Inicializar Carrinho de Compras
    renderCart();
    initCartControls();
    
    // Inicializar Formulário de Contato
    initContactForm();

    // Inicializar detalhamento modal
    initProductModalControls();

    // Inicializar os ícones do Lucide
    lucide.createIcons();
});

// ══ LÓGICA DE HEADER E SCROLL ══
function initHeaderScroll() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initMobileNav() {
    const btnMenu = document.getElementById("btn-menu-mobile");
    const mobileNav = document.getElementById("mobile-nav");
    
    btnMenu.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        btnMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
        btnMenu.classList.toggle("active");
    });
    
    // Fechar ao clicar em algum link
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            btnMenu.classList.remove("active");
            btnMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// ══ RENDERIZAÇÃO DO CATÁLOGO DE PRODUTOS ══
function renderCatalog() {
    const catalogGrid = document.getElementById("products-catalog-grid");
    const emptyState = document.getElementById("empty-search");
    
    if (!catalogGrid) return;
    
    // 1. Filtrar Produtos
    let filtered = PRODUCTS.filter(prod => {
        const matchesCategory = currentFilter === "todos" || prod.category === currentFilter;
        const matchesSearch = prod.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                              prod.category.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                              prod.description.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    // 2. Ordenar Produtos
    if (currentSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // 3. Mostrar/Ocultar estado vazio
    if (filtered.length === 0) {
        catalogGrid.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
    } else {
        emptyState.classList.add("hidden");
    }
    
    // 4. Renderizar os cards de produtos
    catalogGrid.innerHTML = filtered.map(prod => {
        return `
            <article class="product-card" id="card-${prod.id}">
                ${prod.tag ? `<div class="product-tag-badge ${prod.tagClass || 'tag-new'}">${prod.tag}</div>` : ''}
                <div class="product-img-box" onclick="openProductDetail('${prod.id}')">
                    <i data-lucide="${prod.icon}"></i>
                    <div class="product-quick-view">Visualização Rápida</div>
                </div>
                <div class="product-info-box">
                    <span class="product-category">${getCategoryNamePT(prod.category)}</span>
                    <h3 class="product-title" onclick="openProductDetail('${prod.id}')">${prod.name}</h3>
                    <span class="product-volume">${prod.volume}</span>
                    <div class="product-rating">
                        ${'★'.repeat(prod.rating)}${'☆'.repeat(5 - prod.rating)}
                    </div>
                    <div class="product-price-row">
                        <span class="product-price" style="font-size: 0.95rem; color: var(--primary);">Sob Consulta</span>
                        <button class="btn-add-cart-circle" onclick="addToCart('${prod.id}')" title="Adicionar à lista de orçamento" aria-label="Adicionar à lista de orçamento">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
    
    lucide.createIcons();
}

function getCategoryNamePT(cat) {
    switch (cat) {
        case "limpeza": return "Limpeza Geral";
        case "piscina": return "Linha Piscina";
        case "automotivo": return "Linha Automotiva";
        case "utensilios": return "Utensílios de Faxina";
        default: return cat;
    }
}

// ══ EVENTOS E CONTROLES DO CATÁLOGO ══
function initCatalogControls() {
    const tabs = document.querySelectorAll(".filter-tab-btn");
    const searchInput = document.getElementById("catalog-search");
    const sortSelect = document.getElementById("catalog-sort");
    const btnClearSearch = document.getElementById("btn-clear-catalog-search");
    const btnResetFilters = document.getElementById("btn-reset-filters");
    
    // Quick search from header
    const quickSearchInput = document.getElementById("quick-search");
    
    if (quickSearchInput) {
        quickSearchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value;
            if (searchInput) searchInput.value = currentSearchTerm;
            renderCatalog();
            // Scroll para catálogo para mostrar o resultado da busca
            if (currentSearchTerm.length > 0) {
                const catalogSection = document.getElementById("produtos");
                if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
    
    // Filtros de Categoria (Tabs)
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.getAttribute("data-filter");
            renderCatalog();
        });
    });
    
    // Categoria links no Grid de Categorias (Home)
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const filter = card.getAttribute("data-category-filter");
            currentFilter = filter;
            
            // Ativa o botão da aba correspondente
            tabs.forEach(t => {
                if (t.getAttribute("data-filter") === filter) {
                    t.classList.add("active");
                } else {
                    t.classList.remove("active");
                }
            });
            
            renderCatalog();
            document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Digitação de Busca no catálogo
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value;
            if (currentSearchTerm.length > 0) {
                btnClearSearch.classList.remove("hidden");
            } else {
                btnClearSearch.classList.add("hidden");
            }
            renderCatalog();
        });
    }
    
    // Botão de limpar busca
    if (btnClearSearch) {
        btnClearSearch.addEventListener("click", () => {
            currentSearchTerm = "";
            searchInput.value = "";
            btnClearSearch.classList.add("hidden");
            renderCatalog();
        });
    }
    
    // Ordenação por seletor
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderCatalog();
        });
    }
    
    // Resetar quando busca vazia
    if (btnResetFilters) {
        btnResetFilters.addEventListener("click", () => {
            currentSearchTerm = "";
            currentFilter = "todos";
            currentSort = "default";
            if (searchInput) searchInput.value = "";
            if (sortSelect) sortSelect.value = "default";
            if (quickSearchInput) quickSearchInput.value = "";
            tabs.forEach(t => {
                if (t.getAttribute("data-filter") === "todos") t.classList.add("active");
                else t.classList.remove("active");
            });
            btnClearSearch.classList.add("hidden");
            renderCatalog();
        });
    }
}

// ══ LÓGICA DO CARRINHO DE COMPRAS ══
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartCounter = document.getElementById("cart-counter");
    const cartTotalItems = document.getElementById("cart-total-items");
    
    if (!cartItemsContainer) return;
    
    // Atualizar badge e contador do footer do carrinho
    let totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.innerText = totalItemsCount;
    cartTotalItems.innerText = totalItemsCount;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i data-lucide="shopping-bag" class="empty-icon" style="width:50px; height:50px; color:var(--text-muted); margin-bottom:12px;"></i>
                <p style="color:var(--text-secondary)">Sua lista de orçamento está vazia.</p>
                <button class="btn btn-secondary" style="margin-top:16px;" onclick="closeCartDrawer()">Ver Produtos</button>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => {
        let name = item.name;
        let isKit = item.isKit || false;
        
        // Determina o ícone com base na categoria ou se é kit
        let iconName = "droplet";
        if (isKit) iconName = "box";
        else {
            const originalProduct = PRODUCTS.find(p => p.id === item.productId);
            if (originalProduct) iconName = originalProduct.icon;
        }
        
        return `
            <div class="cart-item-card" id="cart-item-${item.id}">
                <div class="cart-item-icon-box">
                    <i data-lucide="${iconName}"></i>
                </div>
                <div class="cart-item-details">
                    <h4>${name}</h4>
                    <span>${isKit ? 'Combo de Faxina Personalizado' : item.volume}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="qty-adjuster-row">
                        <button class="qty-adjuster-btn" onclick="adjustQuantity('${item.id}', -1)" aria-label="Reduzir quantidade">−</button>
                        <span class="qty-display-num">${item.quantity}</span>
                        <button class="qty-adjuster-btn" onclick="adjustQuantity('${item.id}', 1)" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <span class="btn-remove-cart-item" onclick="removeFromCart('${item.id}')">Excluir</span>
                </div>
            </div>
        `;
    }).join("");
    
    lucide.createIcons();
}

window.addToCart = function(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // Verificar se já existe no carrinho
    const existing = cart.find(item => item.productId === productId && !item.isKit);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            id: `cart-item-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
            productId: product.id,
            name: product.name,
            volume: product.volume,
            quantity: qty,
            isKit: false
        });
    }
    
    saveAndSyncCart();
    
    // Feedback visual animado no botão
    const cardEl = document.getElementById(`card-${productId}`);
    if (cardEl) {
        const btn = cardEl.querySelector(".btn-add-cart-circle");
        btn.innerHTML = `<i data-lucide="check" style="color:var(--success)"></i>`;
        btn.style.background = "var(--bg-main)";
        btn.style.borderColor = "var(--success)";
        lucide.createIcons();
        
        setTimeout(() => {
            btn.innerHTML = `<i data-lucide="plus"></i>`;
            btn.style.background = "";
            btn.style.borderColor = "";
            lucide.createIcons();
        }, 1500);
    }
    
    // Abre o carrinho lateral automaticamente para feedback imediato
    openCartDrawer();
}

window.removeFromCart = function(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveAndSyncCart();
}

window.adjustQuantity = function(cartItemId, amount) {
    const item = cart.find(i => i.id === cartItemId);
    if (!item) return;
    
    item.quantity += amount;
    if (item.quantity <= 0) {
        removeFromCart(cartItemId);
    } else {
        saveAndSyncCart();
    }
}

function saveAndSyncCart() {
    localStorage.setItem("totalmix_cart", JSON.stringify(cart));
    renderCart();
}

function initCartControls() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    const btnToggle = document.getElementById("btn-cart-toggle");
    const btnClose = document.getElementById("btn-cart-close");
    const btnCheckout = document.getElementById("btn-checkout");
    const addressGroup = document.getElementById("delivery-address-group");
    const deliveryRadios = document.getElementsByName("delivery-method");
    const addressInput = document.getElementById("cart-address-input");
    
    window.openCartDrawer = function() {
        overlay.classList.add("open");
        drawer.classList.add("open");
    };
    
    window.closeCartDrawer = function() {
        overlay.classList.remove("open");
        drawer.classList.remove("open");
    };
    
    if (btnToggle) btnToggle.addEventListener("click", openCartDrawer);
    if (btnClose) btnClose.addEventListener("click", closeCartDrawer);
    if (overlay) overlay.addEventListener("click", closeCartDrawer);
    
    // Toggle campo endereço conforme entrega
    deliveryRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.value === "entrega") {
                addressGroup.classList.remove("hidden");
            } else {
                addressGroup.classList.add("hidden");
            }
        });
    });
    
    // Botão de Checkout (WhatsApp)
    if (btnCheckout) {
        btnCheckout.addEventListener("click", () => {
            if (cart.length === 0) return;
            
            // Validar endereço se for entrega
            const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;
            let addressText = "";
            if (deliveryMethod === "entrega") {
                const addressVal = addressInput.value.trim();
                if (!addressVal) {
                    alert("Por favor, preencha o seu endereço ou bairro para que possamos calcular a entrega.");
                    addressInput.focus();
                    return;
                }
                addressText = addressVal;
            }
            
            sendCartToWhatsApp(deliveryMethod, addressText);
        });
    }
}

// ══ FORMATAR PEDIDO E ENVIAR PARA O WHATSAPP ══
function sendCartToWhatsApp(method, address) {
    let text = `📋 *SOLICITAÇÃO DE ORÇAMENTO - TOTAL MIX*\n`;
    text += `===================================\n\n`;
    
    cart.forEach((item, idx) => {
        text += `*${idx + 1}. ${item.name}*\n`;
        text += `   Qtd: ${item.quantity}x | Vol/Embalagem: ${item.volume}\n`;
        if (item.isKit) {
            text += `   _(Combo de Faxina Personalizado (6 itens))_\n`;
            if (item.itemsDetails) {
                item.itemsDetails.forEach(subItem => {
                    text += `     - ${subItem.name} (${subItem.volume})\n`;
                });
            }
        }
        text += `-----------------------------------\n`;
    });
    
    text += `\n🛵 *MÉTODO DE RECEBIMENTO:*`;
    
    if (method === "entrega") {
        text += `\n   » *Solicitar Entrega*`;
        text += `\n   » *Endereço/Bairro:* ${address}`;
    } else {
        text += `\n   » *Retirar no Centro de Distribuição* (Sem custo de frete)`;
    }
    
    text += `\n\n===================================\n`;
    text += `Olá! Gostaria de solicitar um orçamento para os itens listados acima. Como podemos proceder com a cotação? Obrigado!`;
    
    // Codificar URL do WhatsApp
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${STORE_PHONE}&text=${encodedText}`;
    
    // Abrir o WhatsApp em nova aba
    window.open(whatsappUrl, "_blank");
}

// ══ LÓGICA DO CONSTRUTOR DE KITS ("MONTE SEU KIT") ══
function renderKitBuilderOptions() {
    const step1Container = document.getElementById("kit-step-1-options");
    const step2Container = document.getElementById("kit-step-2-options");
    const step3Container = document.getElementById("kit-step-3-options");
    const step4Container = document.getElementById("kit-step-4-options");
    
    if (!step1Container) return;
    
    // Passo 1: Baldes
    step1Container.innerHTML = KIT_STEPS_CONFIG.step1.items.map(item => getKitOptionHTML(item, 1)).join("");
    // Passo 2: Mops/Vassouras
    step2Container.innerHTML = KIT_STEPS_CONFIG.step2.items.map(item => getKitOptionHTML(item, 2)).join("");
    // Passo 3: Químicos
    step3Container.innerHTML = KIT_STEPS_CONFIG.step3.items.map(item => getKitOptionHTML(item, 3)).join("");
    // Passo 4: Acessórios
    step4Container.innerHTML = KIT_STEPS_CONFIG.step4.items.map(item => getKitOptionHTML(item, 4)).join("");
    
    lucide.createIcons();
}

function getKitOptionHTML(item, stepNum) {
    return `
        <div class="kit-option-card" data-step="${stepNum}" data-id="${item.id}" onclick="selectKitItem(${stepNum}, '${item.id}')">
            <span class="option-check">✓</span>
            <div class="option-icon-wrapper">
                <i data-lucide="${item.icon}"></i>
            </div>
            <h4 title="${item.name}">${item.name}</h4>
            <span class="option-vol">${item.volume}</span>
        </div>
    `;
}

window.selectKitItem = function(stepNum, itemId) {
    const stepKey = `step${stepNum}`;
    const config = KIT_STEPS_CONFIG[stepKey];
    const allowedQty = config.allowedQuantity;
    
    const card = document.querySelector(`.kit-option-card[data-step="${stepNum}"][data-id="${itemId}"]`);
    if (!card) return;
    
    const index = kitSelection[stepKey].indexOf(itemId);
    
    if (index > -1) {
        // Se já estava selecionado, desmarque
        kitSelection[stepKey].splice(index, 1);
        card.classList.remove("selected");
    } else {
        // Se é seleção única (Passos 1 e 2), remove o anterior
        if (allowedQty === 1) {
            kitSelection[stepKey].forEach(prevId => {
                const prevCard = document.querySelector(`.kit-option-card[data-step="${stepNum}"][data-id="${prevId}"]`);
                if (prevCard) prevCard.classList.remove("selected");
            });
            kitSelection[stepKey] = [itemId];
            card.classList.add("selected");
        } else {
            // Se ultrapassar a quantidade permitida nos passos multi-seleção, não permite adicionar
            if (kitSelection[stepKey].length >= allowedQty) {
                alert(`Você pode escolher no máximo ${allowedQty} itens nesta etapa.`);
                return;
            }
            kitSelection[stepKey].push(itemId);
            card.classList.add("selected");
        }
    }
    
    // Atualizar interface do Kit
    updateKitSummary();
}

function updateKitSummary() {
    const summaryList = document.getElementById("kit-summary-list");
    const progressText = document.getElementById("kit-progress-label");
    const progressBar = document.getElementById("kit-progress");
    const btnAddKit = document.getElementById("btn-add-kit-to-cart");
    
    let selectedProducts = [];
    
    // Reunir todos os itens selecionados
    Object.keys(kitSelection).forEach(stepKey => {
        const stepConfig = KIT_STEPS_CONFIG[stepKey];
        kitSelection[stepKey].forEach(itemId => {
            const foundItem = stepConfig.items.find(item => item.id === itemId);
            if (foundItem) {
                selectedProducts.push(foundItem);
            }
        });
    });
    
    // Calcular progresso da montagem
    // Total de itens necessários: 1 (balde) + 1 (mop) + 2 (químicos) + 2 (acessórios) = 6 itens
    const totalNeeded = 6;
    const currentSelectedCount = selectedProducts.length;
    const progressPercentage = Math.round((currentSelectedCount / totalNeeded) * 100);
    
    progressBar.style.setProperty('--progress-pct', `${progressPercentage}%`);
    progressText.innerText = `${progressPercentage}% Concluído (${currentSelectedCount} de ${totalNeeded})`;
    
    // Controlar ativação dos blocos visuais de passos
    const isStep1Done = kitSelection.step1.length === 1;
    const isStep2Done = kitSelection.step2.length === 1;
    const isStep3Done = kitSelection.step3.length === 2;
    const isStep4Done = kitSelection.step4.length === 2;
    
    const step1El = document.querySelector('.kit-step-block[data-step="1"]');
    const step2El = document.querySelector('.kit-step-block[data-step="2"]');
    const step3El = document.querySelector('.kit-step-block[data-step="3"]');
    const step4El = document.querySelector('.kit-step-block[data-step="4"]');
    
    if (step2El) {
        if (isStep1Done) step2El.classList.add("active");
        else step2El.classList.remove("active");
    }
    if (step3El) {
        if (isStep1Done && isStep2Done) step3El.classList.add("active");
        else step3El.classList.remove("active");
    }
    if (step4El) {
        if (isStep1Done && isStep2Done && isStep3Done) step4El.classList.add("active");
        else step4El.classList.remove("active");
    }
    
    // Atualizar marcadores e contadores de seleção
    document.getElementById("step-3-counter").innerText = `(${kitSelection.step3.length} de 2 selecionados)`;
    document.getElementById("step-4-counter").innerText = `(${kitSelection.step4.length} de 2 selecionados)`;
    
    // Renderizar lista resumo
    if (selectedProducts.length === 0) {
        summaryList.innerHTML = `<p class="empty-kit-msg">Selecione os itens para começar a montar o seu Combo personalizado.</p>`;
        btnAddKit.disabled = true;
        return;
    }
    
    summaryList.innerHTML = selectedProducts.map(item => {
        return `
            <div class="summary-item-line">
                <span class="summary-item-name" title="${item.name}">${item.name}</span>
                <div>
                    <span class="summary-item-remove" onclick="removeKitItemFromSummary('${item.id}')">✕</span>
                </div>
            </div>
        `;
    }).join("");
    
    // O combo está completo quando tem exatamente 6 itens
    const isKitComplete = currentSelectedCount === totalNeeded;
    btnAddKit.disabled = !isKitComplete;
}

window.removeKitItemFromSummary = function(itemId) {
    // Acha qual step continha o item e remove-o
    Object.keys(kitSelection).forEach(stepKey => {
        const index = kitSelection[stepKey].indexOf(itemId);
        if (index > -1) {
            kitSelection[stepKey].splice(index, 1);
            
            // Remove classe de estilo selecionada no card
            const card = document.querySelector(`.kit-option-card[data-id="${itemId}"]`);
            if (card) card.classList.remove("selected");
        }
    });
    updateKitSummary();
}

function initKitBuilderControls() {
    const btnAddKit = document.getElementById("btn-add-kit-to-cart");
    
    if (btnAddKit) {
        btnAddKit.addEventListener("click", () => {
            // Reunir todos os itens do Kit em um único objeto de produto
            let selectedItems = [];
            
            Object.keys(kitSelection).forEach(stepKey => {
                const stepConfig = KIT_STEPS_CONFIG[stepKey];
                kitSelection[stepKey].forEach(itemId => {
                    const foundItem = stepConfig.items.find(item => item.id === itemId);
                    if (foundItem) {
                        selectedItems.push(foundItem);
                    }
                });
            });
            
            if (selectedItems.length !== 6) return;
            
            // Monta o nome customizado do kit mostrando os itens principais
            const mainItemsNames = `${selectedItems[0].name.split(" ")[0]} + ${selectedItems[1].name.split(" ")[0]} + Químicos/Acessórios`;
            
            // Adiciona o kit ao carrinho de compras como um item especial
            cart.push({
                id: `kit-${Date.now()}`,
                name: `Combo Faxina: ${mainItemsNames}`,
                quantity: 1,
                volume: "Combo Customizado (6 itens)",
                isKit: true,
                itemsDetails: selectedItems
            });
            
            // Resetar a seleção do Construtor de Kits
            Object.keys(kitSelection).forEach(stepKey => {
                kitSelection[stepKey] = [];
            });
            document.querySelectorAll(".kit-option-card").forEach(card => card.classList.remove("selected"));
            
            updateKitSummary();
            saveAndSyncCart();
            openCartDrawer();
        });
    }
}

// ══ LÓGICA DO MODAL DE DETALHES DO PRODUTO ══
let currentModalProductId = null;
let currentModalQty = 1;

window.openProductDetail = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    currentModalProductId = productId;
    currentModalQty = 1;
    
    // Atualiza campos do modal
    document.getElementById("modal-product-tag").innerText = product.tag || "Limpeza";
    document.getElementById("modal-product-tag").className = `modal-product-badge ${product.tagClass || 'tag-new'}`;
    document.getElementById("modal-product-category").innerText = getCategoryNamePT(product.category);
    document.getElementById("modal-product-title").innerText = product.name;
    document.getElementById("modal-product-description").innerText = product.description;
    document.getElementById("modal-product-usage").innerText = product.usage;
    document.getElementById("modal-product-volume").innerText = product.volume;
    document.getElementById("modal-product-yield").innerText = product.yield;
    document.getElementById("modal-product-dilution").innerText = product.dilution;
    
    // Atualiza a quantidade do input
    document.getElementById("input-modal-qty").value = currentModalQty;
    
    // Define o ícone no container
    const iconContainer = document.getElementById("modal-product-icon-container");
    iconContainer.innerHTML = `<i data-lucide="${product.icon}" style="width: 100px; height: 100px;"></i>`;
    
    // Abre o modal
    const modal = document.getElementById("product-detail-modal");
    modal.classList.add("open");
    
    lucide.createIcons();
}

function initProductModalControls() {
    const modal = document.getElementById("product-detail-modal");
    const btnClose = document.getElementById("btn-close-product-modal");
    const btnMinus = document.getElementById("btn-modal-qty-minus");
    const btnPlus = document.getElementById("btn-modal-qty-plus");
    const inputQty = document.getElementById("input-modal-qty");
    const btnAddToCart = document.getElementById("btn-modal-add-to-cart");
    
    const closeModal = () => {
        modal.classList.remove("open");
        currentModalProductId = null;
    };
    
    if (btnClose) btnClose.addEventListener("click", closeModal);
    
    // Fechar ao clicar no fundo escuro
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    // Ajustar quantidades
    if (btnMinus) {
        btnMinus.addEventListener("click", () => {
            if (currentModalQty > 1) {
                currentModalQty--;
                inputQty.value = currentModalQty;
            }
        });
    }
    
    if (btnPlus) {
        btnPlus.addEventListener("click", () => {
            currentModalQty++;
            inputQty.value = currentModalQty;
        });
    }
    
    if (inputQty) {
        inputQty.addEventListener("change", (e) => {
            const val = parseInt(e.target.value);
            if (isNaN(val) || val <= 0) {
                currentModalQty = 1;
                inputQty.value = 1;
            } else {
                currentModalQty = val;
            }
        });
    }
    
    // Adicionar do modal para o carrinho
    if (btnAddToCart) {
        btnAddToCart.addEventListener("click", () => {
            if (currentModalProductId) {
                addToCart(currentModalProductId, currentModalQty);
                closeModal();
            }
        });
    }
}

// ══ FORMULÁRIO DE CONTATO ══
function initContactForm() {
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("contact-success-msg");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Simular envio
            successMsg.classList.remove("hidden");
            form.reset();
            lucide.createIcons();
            
            // Esconde após 5 segundos
            setTimeout(() => {
                successMsg.classList.add("hidden");
            }, 5000);
        });
    }
}
