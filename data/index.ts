import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
    categories: Category[],
    products: Product[]
};

export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Placas de Vídeo',
            cover: 'https://tpucdn.com/gpu-specs/images/c/3339-top.jpg'
        },
        {
            id: 2,
            title: 'Processadores',
            cover: 'https://http2.mlstatic.com/D_NQ_NP_729031-MLB71851556873_092023-O.webp'
        },
        {
            id: 3,
            title: 'Placas Mãe',
            cover: 'https://img.terabyteshop.com.br/produto/g/placa-mae-asus-prime-h610m-e-d4-chipset-h610-intel-lga-1700-matx-ddr4-90mb19n0-m0eay0_136252.jpg'
        },
        {
            id: 4,
            title: 'Memórias RAM',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrav2ijn8ccVVeE-pSB7Xq5br-mAu6rFmkA&s'
        },
        {
            id: 5,
            title: 'Fontes',
            cover: 'https://cdn.iset.io/assets/37352/produtos/759/hardware-759-184331.jpg'
        }
    ],
    products: [
        // Placas de Vídeo
        { id: 1, idCategory: 1, image: "https://picsum.photos/id/1/200/200", title: "RTX 4090", description: "Placa de vídeo topo de linha para jogos 4K e 8K.", price: 2499.99 },
        { id: 2, idCategory: 1, image: "https://picsum.photos/id/2/200/200", title: "RX 6900 XT", description: "Desempenho extremo com arquitetura RDNA 2.", price: 1799.99 },
        { id: 3, idCategory: 1, image: "https://picsum.photos/id/3/200/200", title: "GTX 1660 Super", description: "Boa performance para jogos Full HD.", price: 299.99 },
        { id: 4, idCategory: 1, image: "https://picsum.photos/id/4/200/200", title: "RTX 3070", description: "Excelente desempenho para jogos em 1440p.", price: 699.99 },
        { id: 5, idCategory: 1, image: "https://picsum.photos/id/5/200/200", title: "RX 570", description: "Placa de vídeo acessível com bom desempenho em 1080p.", price: 199.99 },
        { id: 6, idCategory: 1, image: "https://picsum.photos/id/6/200/200", title: "RTX 3080", description: "Placa de vídeo de alto desempenho para jogos e criação de conteúdo.", price: 999.99 },
        { id: 7, idCategory: 1, image: "https://picsum.photos/id/7/200/200", title: "RTX 2060", description: "Boa escolha para jogos em 1080p com Ray Tracing.", price: 349.99 },
        { id: 8, idCategory: 1, image: "https://picsum.photos/id/8/200/200", title: "RX 6800", description: "Desempenho de alta qualidade com suporte a Ray Tracing.", price: 649.99 },
        { id: 9, idCategory: 1, image: "https://picsum.photos/id/9/200/200", title: "GTX 1650", description: "Placa de entrada para jogos leves e eSports.", price: 179.99 },
        { id: 10, idCategory: 1, image: "https://picsum.photos/id/10/200/200", title: "RTX 3050", description: "Excelente custo-benefício para 1080p e Ray Tracing.", price: 329.99 },
        { id: 11, idCategory: 1, image: "https://picsum.photos/id/11/200/200", title: "RTX 2080 Super", description: "Performance avançada para jogos em 4K.", price: 899.99 },
        { id: 12, idCategory: 1, image: "https://picsum.photos/id/12/200/200", title: "RX 5600 XT", description: "Desempenho sólido em 1080p com bom custo-benefício.", price: 299.99 },
        { id: 13, idCategory: 1, image: "https://picsum.photos/id/13/200/200", title: "RTX 3060 Ti", description: "Desempenho próximo ao RTX 3070, ideal para 1440p.", price: 499.99 },
        { id: 14, idCategory: 1, image: "https://picsum.photos/id/14/200/200", title: "RX 550", description: "Placa de entrada para uso em multitarefas e eSports.", price: 119.99 },
        { id: 15, idCategory: 1, image: "https://picsum.photos/id/15/200/200", title: "RTX 2070", description: "Placa sólida para jogos em 1440p.", price: 549.99 },
        { id: 16, idCategory: 1, image: "https://picsum.photos/id/16/200/200", title: "RX 6700 XT", description: "Performance excelente para jogos em 1440p.", price: 479.99 },
        { id: 17, idCategory: 1, image: "https://picsum.photos/id/17/200/200", title: "GTX 1080 Ti", description: "Aclamada por seu desempenho em jogos 4K.", price: 399.99 },
        { id: 18, idCategory: 1, image: "https://picsum.photos/id/18/200/200", title: "RTX 3090", description: "Desempenho extremo com 24GB de VRAM.", price: 1999.99 },
        { id: 19, idCategory: 1, image: "https://picsum.photos/id/19/200/200", title: "RX 580", description: "Popular por seu desempenho em jogos em 1080p.", price: 249.99 },
        { id: 20, idCategory: 1, image: "https://picsum.photos/id/20/200/200", title: "RTX 3060", description: "Placa intermediária com ótimo custo-benefício para jogos em 1080p.", price: 499.99 },

        // Processadores
        { id: 21, idCategory: 2, image: "https://picsum.photos/id/21/200/200", title: "Intel Core i9-13900K", description: "Processador topo de linha com 24 núcleos e 32 threads.", price: 699.99 },
        { id: 22, idCategory: 2, image: "https://picsum.photos/id/22/200/200", title: "AMD Ryzen 9 7950X", description: "Desempenho extremo com 16 núcleos e 32 threads.", price: 599.99 },
        { id: 23, idCategory: 2, image: "https://picsum.photos/id/23/200/200", title: "Intel Core i7-13700K", description: "Processador de alto desempenho com 16 núcleos e 24 threads.", price: 449.99 },
        { id: 24, idCategory: 2, image: "https://picsum.photos/id/24/200/200", title: "AMD Ryzen 7 7800X3D", description: "Processador com 3D V-Cache para jogos de alto desempenho.", price: 499.99 },
        { id: 25, idCategory: 2, image: "https://picsum.photos/id/25/200/200", title: "Intel Core i5-13600K", description: "Processador intermediário com 14 núcleos e 20 threads.", price: 329.99 },
        { id: 26, idCategory: 2, image: "https://picsum.photos/id/26/200/200", title: "AMD Ryzen 5 7600X", description: "Processador eficiente com 6 núcleos e 12 threads.", price: 299.99 },
        { id: 27, idCategory: 2, image: "https://picsum.photos/id/27/200/200", title: "Intel Core i3-12100F", description: "Processador de entrada com 4 núcleos e 8 threads.", price: 109.99 },
        { id: 28, idCategory: 2, image: "https://picsum.photos/id/28/200/200", title: "AMD Ryzen 3 4100", description: "Processador acessível com 4 núcleos e 8 threads.", price: 99.99 },
        { id: 29, idCategory: 2, image: "https://picsum.photos/id/29/200/200", title: "Intel Core i9-12900K", description: "Processador com 16 núcleos híbridos para desempenho extremo.", price: 589.99 },
        { id: 30, idCategory: 2, image: "https://picsum.photos/id/30/200/200", title: "AMD Ryzen 9 5900X", description: "Processador de 12 núcleos com excelente performance multithread.", price: 449.99 },
        { id: 31, idCategory: 2, image: "https://picsum.photos/id/31/200/200", title: "Intel Core i5-12600K", description: "Processador com 10 núcleos e excelente eficiência energética.", price: 279.99 },
        { id: 32, idCategory: 2, image: "https://picsum.photos/id/32/200/200", title: "AMD Ryzen 7 5800X", description: "Desempenho balanceado para jogos e multitarefas.", price: 359.99 },
        { id: 33, idCategory: 2, image: "https://picsum.photos/id/33/200/200", title: "Intel Core i7-12700K", description: "Processador com 12 núcleos, ideal para multitarefas e jogos.", price: 379.99 },
        { id: 34, idCategory: 2, image: "https://picsum.photos/id/34/200/200", title: "AMD Ryzen 5 5600X", description: "Excelente desempenho em jogos com 6 núcleos.", price: 229.99 },
        { id: 35, idCategory: 2, image: "https://picsum.photos/id/35/200/200", title: "Intel Core i9-11900K", description: "Processador de 8 núcleos para gamers e criadores de conteúdo.", price: 429.99 },
        { id: 36, idCategory: 2, image: "https://picsum.photos/id/36/200/200", title: "AMD Ryzen 9 3950X", description: "Processador com 16 núcleos para workstations e games.", price: 749.99 },
        { id: 37, idCategory: 2, image: "https://picsum.photos/id/37/200/200", title: "Intel Core i5-11600K", description: "Processador intermediário para jogos e produtividade.", price: 219.99 },
        { id: 38, idCategory: 2, image: "https://picsum.photos/id/38/200/200", title: "AMD Ryzen 7 3700X", description: "Processador de 8 núcleos com ótimo custo-benefício.", price: 299.99 },
        { id: 39, idCategory: 2, image: "https://picsum.photos/id/39/200/200", title: "Intel Core i7-10700K", description: "Processador de 8 núcleos com overclock para alto desempenho.", price: 329.99 },
        { id: 40, idCategory: 2, image: "https://picsum.photos/id/40/200/200", title: "AMD Ryzen 5 3600", description: "Excelente opção de 6 núcleos com ótimo custo-benefício.", price: 199.99 },

        // Placas Mãe
        { id: 41, idCategory: 3, image: "https://picsum.photos/id/41/200/200", title: "ASUS ROG Strix Z690-E", description: "Placa-mãe premium para Intel com suporte a DDR5.", price: 499.99 },
        { id: 42, idCategory: 3, image: "https://picsum.photos/id/42/200/200", title: "MSI MPG Z590 Gaming Edge", description: "Placa-mãe com suporte a PCIe 4.0 e Wi-Fi 6.", price: 299.99 },
        { id: 43, idCategory: 3, image: "https://picsum.photos/id/43/200/200", title: "Gigabyte B550 AORUS Elite", description: "Placa-mãe AM4 com ótimo custo-benefício para AMD Ryzen.", price: 159.99 },
        { id: 44, idCategory: 3, image: "https://picsum.photos/id/44/200/200", title: "ASRock B450M Steel Legend", description: "Placa-mãe micro-ATX robusta e acessível para AMD.", price: 89.99 },
        { id: 45, idCategory: 3, image: "https://picsum.photos/id/45/200/200", title: "ASUS TUF Gaming X570-Plus", description: "Placa-mãe durável e com suporte a PCIe 4.0.", price: 199.99 },
        { id: 46, idCategory: 3, image: "https://picsum.photos/id/46/200/200", title: "MSI MAG B550M Mortar", description: "Placa-mãe micro-ATX de alta qualidade para AMD Ryzen.", price: 139.99 },
        { id: 47, idCategory: 3, image: "https://picsum.photos/id/47/200/200", title: "Gigabyte Z690 AORUS Master", description: "Placa-mãe topo de linha com suporte a DDR5 e PCIe 5.0.", price: 589.99 },
        { id: 48, idCategory: 3, image: "https://picsum.photos/id/48/200/200", title: "ASRock B560 Pro4", description: "Placa-mãe acessível com suporte a 11ª geração Intel.", price: 129.99 },
        { id: 49, idCategory: 3, image: "https://picsum.photos/id/49/200/200", title: "ASUS Prime X570-P", description: "Placa-mãe X570 com suporte a AMD Ryzen de 3ª geração.", price: 179.99 },
        { id: 50, idCategory: 3, image: "https://picsum.photos/id/50/200/200", title: "MSI B450 Tomahawk Max", description: "Placa-mãe popular com excelente compatibilidade para AMD.", price: 109.99 },
        { id: 51, idCategory: 3, image: "https://picsum.photos/id/51/200/200", title: "Gigabyte A520 AORUS Elite", description: "Placa-mãe acessível com chipset A520 para Ryzen.", price: 79.99 },
        { id: 52, idCategory: 3, image: "https://picsum.photos/id/52/200/200", title: "ASUS ROG Crosshair VIII Hero", description: "Placa-mãe premium para entusiastas de overclock.", price: 399.99 },
        { id: 53, idCategory: 3, image: "https://picsum.photos/id/53/200/200", title: "MSI X570-A Pro", description: "Placa-mãe de entrada com chipset X570 e PCIe 4.0.", price: 149.99 },
        { id: 54, idCategory: 3, image: "https://picsum.photos/id/54/200/200", title: "ASRock X570 Phantom Gaming", description: "Placa-mãe focada em gamers com suporte a AMD Ryzen.", price: 229.99 },
        { id: 55, idCategory: 3, image: "https://picsum.photos/id/55/200/200", title: "Gigabyte Z590 AORUS Ultra", description: "Placa-mãe de alta performance com suporte a Intel 11ª geração.", price: 369.99 },
        { id: 56, idCategory: 3, image: "https://picsum.photos/id/56/200/200", title: "ASUS TUF Gaming B550M-Plus", description: "Placa-mãe compacta e resistente para setups AMD.", price: 129.99 },
        { id: 57, idCategory: 3, image: "https://picsum.photos/id/57/200/200", title: "MSI Z490-A Pro", description: "Placa-mãe para Intel com suporte a 10ª geração.", price: 189.99 },
        { id: 58, idCategory: 3, image: "https://picsum.photos/id/58/200/200", title: "ASRock Z590 Extreme", description: "Placa-mãe com chipset Z590 para performance superior.", price: 269.99 },
        { id: 59, idCategory: 3, image: "https://picsum.photos/id/59/200/200", title: "Gigabyte B560M DS3H", description: "Placa-mãe acessível com suporte a Intel de 10ª e 11ª geração.", price: 99.99 },
        { id: 60, idCategory: 3, image: "https://picsum.photos/id/60/200/200", title: "ASUS Prime H510M-E", description: "Placa-mãe de entrada com suporte a Intel de 10ª geração.", price: 79.99 },

        // Memórias RAM
        { id: 61, idCategory: 4, image: "https://picsum.photos/id/61/200/200", title: "Corsair Vengeance LPX 16GB (2x8GB) DDR4", description: "Memória RAM de alta performance com dissipador de calor.", price: 89.99 },
        { id: 62, idCategory: 4, image: "https://picsum.photos/id/62/200/200", title: "Kingston HyperX Fury 8GB DDR4", description: "Memória DDR4 ideal para gamers e criadores de conteúdo.", price: 44.99 },
        { id: 63, idCategory: 4, image: "https://picsum.photos/id/63/200/200", title: "G.Skill Ripjaws V 32GB (2x16GB) DDR4", description: "Memória de alto desempenho com frequência de 3200MHz.", price: 139.99 },
        { id: 64, idCategory: 4, image: "https://picsum.photos/id/64/200/200", title: "Crucial Ballistix 16GB DDR4 3600MHz", description: "Memória rápida e eficiente com dissipador de calor.", price: 79.99 },
        { id: 65, idCategory: 4, image: "https://picsum.photos/id/65/200/200", title: "Corsair Dominator Platinum RGB 32GB DDR4", description: "Memória premium com iluminação RGB personalizável.", price: 189.99 },
        { id: 66, idCategory: 4, image: "https://picsum.photos/id/66/200/200", title: "Patriot Viper Steel 16GB DDR4 3200MHz", description: "Memória RAM robusta e com alto desempenho.", price: 74.99 },
        { id: 67, idCategory: 4, image: "https://picsum.photos/id/67/200/200", title: "TeamGroup T-Force Delta RGB 16GB DDR4", description: "Memória com design agressivo e iluminação RGB.", price: 94.99 },
        { id: 68, idCategory: 4, image: "https://picsum.photos/id/68/200/200", title: "Kingston Fury Renegade 32GB DDR4 3600MHz", description: "Alto desempenho com design avançado para entusiastas.", price: 149.99 },
        { id: 69, idCategory: 4, image: "https://picsum.photos/id/69/200/200", title: "G.Skill Trident Z Royal 16GB DDR4 4000MHz", description: "Memória com design luxuoso e performance extrema.", price: 199.99 },
        { id: 70, idCategory: 4, image: "https://picsum.photos/id/70/200/200", title: "Corsair Vengeance RGB Pro 32GB DDR4 3200MHz", description: "Memória com iluminação RGB e alta frequência.", price: 169.99 },
        { id: 71, idCategory: 4, image: "https://picsum.photos/id/71/200/200", title: "ADATA XPG Spectrix D50 16GB DDR4 3600MHz", description: "Memória com design futurista e LED RGB.", price: 99.99 },
        { id: 72, idCategory: 4, image: "https://picsum.photos/id/72/200/200", title: "Patriot Viper RGB 16GB DDR4 3200MHz", description: "Memória RAM com iluminação personalizável RGB.", price: 84.99 },
        { id: 73, idCategory: 4, image: "https://picsum.photos/id/73/200/200", title: "Corsair Vengeance LPX 8GB DDR4 2400MHz", description: "Memória compacta e eficiente para sistemas de baixo perfil.", price: 39.99 },
        { id: 74, idCategory: 4, image: "https://picsum.photos/id/74/200/200", title: "TeamGroup T-Force Vulcan Z 16GB DDR4 3000MHz", description: "Memória de alto desempenho com ótimo custo-benefício.", price: 69.99 },
        { id: 75, idCategory: 4, image: "https://picsum.photos/id/75/200/200", title: "G.Skill Ripjaws V 8GB DDR4 2400MHz", description: "Memória DDR4 confiável e acessível.", price: 34.99 },
        { id: 76, idCategory: 4, image: "https://picsum.photos/id/76/200/200", title: "Kingston HyperX Predator 16GB DDR4 3200MHz", description: "Memória RAM de alto desempenho para setups gamer.", price: 84.99 },
        { id: 77, idCategory: 4, image: "https://picsum.photos/id/77/200/200", title: "Crucial Ballistix MAX 32GB DDR4 4000MHz", description: "Memória RAM ultra rápida para overclockers.", price: 199.99 },
        { id: 78, idCategory: 4, image: "https://picsum.photos/id/78/200/200", title: "Patriot Viper Steel RGB 16GB DDR4 3600MHz", description: "Memória RAM com RGB e desempenho avançado.", price: 89.99 },
        { id: 79, idCategory: 4, image: "https://picsum.photos/id/79/200/200", title: "Corsair Dominator Platinum 16GB DDR4 3200MHz", description: "Memória de luxo com excelente performance.", price: 159.99 },
        { id: 80, idCategory: 4, image: "https://picsum.photos/id/80/200/200", title: "G.Skill Trident Z RGB 32GB DDR4 3200MHz", description: "Memória de alta performance com iluminação RGB.", price: 179.99 },

        // Fontes
        { id: 81, idCategory: 5, image: "https://picsum.photos/id/81/200/200", title: "Corsair RM750x 750W 80 Plus Gold", description: "Fonte modular com alta eficiência energética.", price: 129.99 },
        { id: 82, idCategory: 5, image: "https://picsum.photos/id/82/200/200", title: "EVGA 600 W1 600W 80 Plus", description: "Fonte com excelente custo-benefício e alta durabilidade.", price: 49.99 },
        { id: 83, idCategory: 5, image: "https://picsum.photos/id/83/200/200", title: "Cooler Master MWE 650W 80 Plus Bronze", description: "Fonte eficiente com certificado Bronze.", price: 74.99 },
        { id: 84, idCategory: 5, image: "https://picsum.photos/id/84/200/200", title: "Seasonic Focus GX-850 850W 80 Plus Gold", description: "Fonte premium com alta durabilidade e eficiência.", price: 149.99 },
        { id: 85, idCategory: 5, image: "https://picsum.photos/id/85/200/200", title: "Thermaltake Smart 600W 80 Plus", description: "Fonte econômica com performance confiável.", price: 54.99 },
        { id: 86, idCategory: 5, image: "https://picsum.photos/id/86/200/200", title: "Corsair CX550 550W 80 Plus Bronze", description: "Fonte com boa relação custo-benefício e eficiência.", price: 64.99 },
        { id: 87, idCategory: 5, image: "https://picsum.photos/id/87/200/200", title: "EVGA SuperNOVA 750 G5 750W 80 Plus Gold", description: "Fonte modular com alta eficiência e durabilidade.", price: 139.99 },
        { id: 88, idCategory: 5, image: "https://picsum.photos/id/88/200/200", title: "Corsair RM850x 850W 80 Plus Gold", description: "Fonte modular de alta performance com certificação Gold.", price: 149.99 },
        { id: 89, idCategory: 5, image: "https://picsum.photos/id/89/200/200", title: "Cooler Master V850 850W 80 Plus Gold", description: "Fonte de alta eficiência para setups de alta performance.", price: 159.99 },
        { id: 90, idCategory: 5, image: "https://picsum.photos/id/90/200/200", title: "Thermaltake Toughpower 750W 80 Plus Gold", description: "Fonte com certificação Gold e design robusto.", price: 129.99 },
        { id: 91, idCategory: 5, image: "https://picsum.photos/id/91/200/200", title: "Seasonic Prime TX-1000 1000W 80 Plus Titanium", description: "Fonte de altíssima qualidade com certificação Titanium.", price: 249.99 },
        { id: 92, idCategory: 5, image: "https://picsum.photos/id/92/200/200", title: "Corsair VS450 450W 80 Plus", description: "Fonte compacta e eficiente para PCs de entrada.", price: 39.99 },
        { id: 93, idCategory: 5, image: "https://picsum.photos/id/93/200/200", title: "Cooler Master MWE 550W 80 Plus Bronze", description: "Fonte eficiente com certificação Bronze e preço acessível.", price: 59.99 },
        { id: 94, idCategory: 5, image: "https://picsum.photos/id/94/200/200", title: "Corsair AX1600i 1600W 80 Plus Titanium", description: "Fonte topo de linha para entusiastas com certificação Titanium.", price: 449.99 },
        { id: 95, idCategory: 5, image: "https://picsum.photos/id/95/200/200", title: "EVGA 500 W1 500W 80 Plus", description: "Fonte simples e eficiente para PCs básicos.", price: 44.99 },
        { id: 96, idCategory: 5, image: "https://picsum.photos/id/96/200/200", title: "Thermaltake Smart RGB 600W 80 Plus", description: "Fonte com iluminação RGB e eficiência energética.", price: 69.99 },
        { id: 97, idCategory: 5, image: "https://picsum.photos/id/97/200/200", title: "Corsair HX1000i 1000W 80 Plus Platinum", description: "Fonte modular de alta performance com certificação Platinum.", price: 229.99 },
        { id: 98, idCategory: 5, image: "https://picsum.photos/id/98/200/200", title: "Cooler Master MasterWatt 750W 80 Plus Bronze", description: "Fonte semi-modular com boa eficiência e durabilidade.", price: 89.99 },
        { id: 99, idCategory: 5, image: "https://picsum.photos/id/99/200/200", title: "Seasonic S12III 500W 80 Plus Bronze", description: "Fonte confiável com bom custo-benefício para sistemas intermediários.", price: 59.99 },
        { id: 100, idCategory: 5, image: "https://picsum.photos/id/100/200/200", title: "Thermaltake Smart BX1 650W 80 Plus Bronze", description: "Fonte com eficiência Bronze e operação silenciosa.", price: 74.99 }
    ],
};
