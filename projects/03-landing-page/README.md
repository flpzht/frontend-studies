# 💻 Desafio 03: Construção da Página de Listagem de Vídeos do YouTube

Este projeto é a solução para o Desafio 03, focado em replicar a página inicial (listagem de vídeos) do YouTube. O principal foco foi a aplicação de um layout complexo e totalmente responsivo utilizando o conceito de **CSS Grid Aninhado** para estruturar a página e a lista de cards de vídeo.

## 🎯 Objetivo do Projeto

O objetivo deste desafio foi demonstrar proficiência na organização de layouts modernos, abrangendo:

1.  **CSS Grid Aninhado:** Utilização de um Grid principal (para Header, Área de Conteúdo e Footer) contendo um Grid interno (`.main-content`) para dispor a Sidebar e a área de Vídeos.
2.  **Responsividade com `auto-fill` e Media Queries:** Criação de um grid de vídeos dinâmico que ajusta automaticamente o número de colunas (`auto-fill`) em telas menores, e impõe um limite máximo (`repeat(4, 1fr)`) em telas maiores para replicar o design original.
3.  **Estrutura Semântica:** Uso correto de tags HTML5 como `<header>`, `<main>`, `<aside>`, e `<footer>`.
4.  **Flexbox para Componentes:** Aplicação de Flexbox no cabeçalho e nos itens da sidebar para alinhamento preciso.

## ✨ Tecnologias Utilizadas

* **HTML5:** Estrutura e semântica do conteúdo.
* **CSS3:** Estilização, layout e responsividade.
    * **CSS Grid Layout:** Estruturação geral e disposição dos cards de vídeo.
    * **Flexbox:** Componentes internos (Header e Sidebar Items).
    * **Variáveis CSS (`:root`):** Para gestão centralizada de cores.

## 🏗️ Estrutura do Layout (Grid Aninhado)

O layout é construído usando dois níveis de CSS Grid, garantindo que apenas a área de conteúdo principal possa rolar verticalmente, mantendo Header e Footer fixos.

### 1. Grid Principal (`.container` / `body`)

Define a disposição vertical da página.

| Área | Elemento | Comportamento |
| :--- | :--- | :--- |
| `header` | `<header>` | Altura Fixa (`56px`) |
| `main-content-area` | `<main class="main-content">` | Altura Flexível (`1fr`), ocupando o espaço restante. |
| `footer` | `<footer>` | Altura Fixa (`50px`) |

### 2. Grid Interno (`.main-content`)

Define a disposição horizontal da área de conteúdo (Sidebar e Vídeos). 

| Coluna | Elemento | Comportamento |
| :--- | :--- | :--- |
| Coluna 1 | `<aside>` | Largura Fixa (`218px`), com rolagem interna. |
| Coluna 2 | `.video-grid` | Largura Flexível (`1fr`), com rolagem vertical ativada. |

## 🚀 Responsividade do Grid de Vídeos

A listagem de vídeos (`.video-grid`) utiliza uma combinação de regras para garantir que o layout se adapte corretamente a todos os tamanhos de tela.

### A. Responsividade Padrão (`auto-fill`)

Em telas menores, o `grid-template-columns` usa a função `repeat(auto-fill, minmax(282px, 1fr))` para garantir que os cards diminuam ou quebrem a linha quando não há espaço suficiente, mantendo a largura mínima de **282px** por card.

### B. Limite de Colunas (Media Query para Desktop)

Para garantir que o design do YouTube seja mantido em telas grandes com o máximo de 4 colunas, aplicamos uma regra via Media Query:

```css
@media (min-width: 1200px) {
    .video-grid {
        /* Fixa o grid em 4 colunas iguais, impedindo mais que 4 cards por linha. */
        grid-template-columns: repeat(4, 1fr);
    }
}
```
## 📁 Estrutura do Projeto

A estrutura de arquivos do projeto segue o padrão para separação de estilos (CSS) e arquivos estáticos (imagens):
.
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── ... (ícones e miniaturas de vídeo)
└── index.html
└── README.md

## 🛠️ Para Executar o Projeto

1.  Baixe ou clone o repositório.
2.  Abra o arquivo `index.html` em seu navegador web.
3.  Utilize as ferramentas de desenvolvedor (ou redimensione a janela) para observar a perfeita adaptação do grid de vídeos.


----------------------------------------------------------------------------------------------------------

# 💻 Challenge 03: Building the YouTube Video Listing Page

This project is the solution for Challenge 03, focused on replicating the YouTube homepage (video listing). The main focus was applying a complex and fully responsive layout using the concept of **Nested CSS Grid** to structure the page and the list of video cards.

## 🎯 Project Goal

The goal of this challenge was to demonstrate proficiency in organizing modern layouts, encompassing:

1.  **Nested CSS Grid:** Utilizing a main Grid (for Header, Content Area, and Footer) containing an inner Grid (`.main-content`) to arrange the Sidebar and the Video Area.
2.  **Responsiveness with `auto-fill` and Media Queries:** Creating a dynamic video grid that automatically adjusts the number of columns (`auto-fill`) on smaller screens, and enforces a maximum limit (`repeat(4, 1fr)`) on larger screens to replicate the original design.
3.  **Semantic Structure:** Correct use of HTML5 tags such as `<header>`, `<main>`, `<aside>`, and `<footer>`.
4.  **Flexbox for Components:** Application of Flexbox in the header and sidebar items for precise alignment.

## ✨ Technologies Used

* **HTML5:** Content structure and semantics.
* **CSS3:** Styling, layout, and responsiveness.
    * **CSS Grid Layout:** General structuring and arrangement of video cards.
    * **Flexbox:** Internal components (Header and Sidebar Items).
    * **CSS Variables (`:root`):** For centralized color management.

## 🏗️ Layout Structure (Nested Grid)

The layout is built using two levels of CSS Grid, ensuring that only the main content area can scroll vertically, keeping the Header and Footer fixed.

### 1. Main Grid (`.container` / `body`)

Defines the vertical arrangement of the page.

| Area | Element | Behavior |
| :--- | :--- | :--- |
| `header` | `<header>` | Fixed Height (`56px`) |
| `main-content-area` | `<main class="main-content">` | Flexible Height (`1fr`), occupying the remaining space. |
| `footer` | `<footer>` | Fixed Height (`50px`) |

### 2. Inner Grid (`.main-content`)

Defines the horizontal arrangement of the content area (Sidebar and Videos).

| Column | Element | Behavior |
| :--- | :--- | :--- |
| Column 1 | `<aside>` | Fixed Width (`218px`), with internal scrolling. |
| Column 2 | `.video-grid` | Flexible Width (`1fr`), with vertical scrolling enabled. |

## 🚀 Video Grid Responsiveness

The video listing (`.video-grid`) uses a combination of rules to ensure the layout adapts correctly to all screen sizes.

### A. Standard Responsiveness (`auto-fill`)

On smaller screens, the `grid-template-columns` uses the function `repeat(auto-fill, minmax(282px, 1fr))` to ensure that cards shrink or wrap to the next line when there is not enough space, maintaining a minimum width of **282px** per card.

### B. Column Limit (Media Query for Desktop)

To ensure the YouTube design is maintained on large screens with a maximum of 4 columns, a rule is applied via Media Query:

```css
@media (min-width: 1200px) {
    .video-grid {
        /* Fixes the grid to 4 equal columns, preventing more than 4 cards per row. */
        grid-template-columns: repeat(4, 1fr);
    }
}
```
## 📁 Project Structure

The project file structure follows the standard for separating styles (CSS) and static files (images):
.
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── ... (icons and video thumbnails)
├── index.html
└── README.md

## 🛠️ How to Run the Project

1.  Download or clone the repository.
2.  Open the `index.html` file in your web browser.
3.  Use the developer tools (or resize the window) to observe the perfect adaptation of the video grid.