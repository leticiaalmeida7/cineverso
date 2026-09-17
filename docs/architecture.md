# Architecture — CineTrack

## 1. Visão Geral

O CineTrack será desenvolvido como uma aplicação web responsiva utilizando React.

A aplicação será organizada em páginas e componentes reutilizáveis. O React Router será utilizado para controlar a navegação entre as páginas e para criar a rota dinâmica de detalhes dos filmes e séries.

Os dados dos conteúdos serão obtidos através da API do TMDB utilizando efeitos do React (`useEffect`).

A interação do usuário será controlada principalmente através de estados do React (`useState`).

Os conteúdos adicionados à lista, seus respectivos status e o progresso dos episódios serão armazenados no `localStorage` do navegador.

A aplicação terá um layout principal compartilhado entre as páginas, contendo cabeçalho, área de conteúdo e rodapé.

---

## 2. Estrutura de Pastas

```cine-track
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── SearchBar.jsx
│   ├── StatusButton.jsx
│   ├── Loading.jsx
│   └── EmptyState.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Explorar.jsx
│   ├── Buscar.jsx
│   ├── Detalhes.jsx
│   └── MinhaLista.jsx
│
├── App.jsx
├── main.jsx
└── index.css