# Architecture — Cineverso

## 1. Visão Geral

O Cineverso é uma aplicação web responsiva desenvolvida utilizando React.

A aplicação é organizada em páginas e componentes reutilizáveis. O React Router é utilizado para controlar a navegação entre as páginas e para criar a rota dinâmica de detalhes dos filmes e séries.

Os dados dos conteúdos são obtidos através da API do TMDB utilizando efeitos do React (`useEffect`).

As interações do usuário são controladas principalmente através de estados do React (`useState`).

Os conteúdos adicionados à lista, seus respectivos status e o progresso dos episódios são armazenados no `localStorage` do navegador.

A aplicação possui um layout principal compartilhado entre as páginas, contendo cabeçalho, área de conteúdo e rodapé.

---

## 2. Estrutura de Pastas

```text
cineverso/
├── docs/
│   ├── references/
│   │   └── imagens/
│   │       ├── netflix.png
│   │       ├── sofa-time.png
│   │       └── letterboxd.png
│   ├── references.md
│   ├── requirements.md
│   └── architecture.md
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── StatusButton.jsx
│   │   ├── Loading.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explorar.jsx
│   │   ├── Buscar.jsx
│   │   ├── Detalhes.jsx
│   │   └── MinhaLista.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md