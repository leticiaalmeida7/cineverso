# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Cineverso

## Integrantes

- Letícia Moreira - 569909
- Danielle Freitas - 569396
- Ingrid Ramalho - 569532

## Sobre o projeto

O Cineverso é uma aplicação web desenvolvida em React para facilitar a descoberta e a organização de filmes e séries.

A proposta surgiu a partir de um problema comum para quem acompanha muitos títulos: ter dificuldade para organizar o que deseja assistir, o que já começou, o que terminou e, no caso de séries, lembrar quais episódios já foram assistidos.

O projeto foi desenvolvido como um MVP, com foco em descoberta de conteúdo e organização de uma lista pessoal.

## Problema

Pessoas que acompanham muitos filmes e séries podem ter dificuldade para:

- Encontrar novos títulos para assistir;
- Organizar filmes e séries que desejam assistir;
- Separar títulos que estão assistindo dos que já concluíram;
- Lembrar onde pararam em uma série;
- Acompanhar os episódios já assistidos.

## Solução

O Cineverso reúne essas funcionalidades em uma única aplicação.

O usuário pode explorar filmes e séries, pesquisar títulos, visualizar informações detalhadas, adicionar conteúdos à sua lista pessoal, alterar o status de acompanhamento e registrar os episódios já assistidos.

Os dados dos filmes e séries são obtidos por meio da API do TMDB, enquanto a lista pessoal e o progresso dos episódios são armazenados no navegador utilizando localStorage.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React
- API do TMDB
- localStorage

## API utilizada

O projeto utiliza a API do **The Movie Database (TMDB)** para obter informações sobre filmes e séries.

A API é utilizada para buscar:

- Títulos de filmes e séries;
- Pôsteres;
- Sinopses;
- Avaliações;
- Datas de lançamento;
- Gêneros;
- Temporadas;
- Episódios.

## Funcionalidades

### Página inicial

Apresenta títulos em destaque obtidos pela API do TMDB e permite acessar os detalhes de cada filme ou série.

### Explorar

Permite visualizar o catálogo de títulos e filtrar os resultados entre:

- Todos;
- Filmes;
- Séries.

### Buscar

Permite pesquisar filmes e séries pelo nome utilizando a API do TMDB.

### Detalhes

Apresenta informações detalhadas do título selecionado, como:

- Nome;
- Título original;
- Tipo;
- Ano;
- Avaliação;
- Gêneros;
- Sinopse;
- Duração, no caso de filmes;
- Quantidade de temporadas, no caso de séries.

Também é possível adicionar o título à lista pessoal.

### Minha Lista

Permite organizar os títulos adicionados pelo usuário em três status:

- Quero assistir;
- Assistindo;
- Concluído.

O usuário também pode alterar o status ou remover um título da lista.

### Acompanhamento de episódios

Para séries, o usuário pode selecionar uma temporada e marcar os episódios que já assistiu.

A aplicação calcula o progresso da temporada com base nos episódios marcados.

### Persistência de dados

A lista pessoal, os status e o progresso dos episódios são armazenados utilizando `localStorage`, permitindo que os dados permaneçam disponíveis após fechar ou atualizar a página.

### Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo desktop, tablet e dispositivos móveis.

## React

O projeto utiliza componentes React para dividir a interface e facilitar a organização do código.

Entre os componentes utilizados estão:

- Header
- Footer
- MovieCard
- MovieGrid
- SearchBar
- StatusButton
- Loading
- EmptyState

As páginas principais são:

- Home
- Explorar
- Buscar
- Detalhes
- Minha Lista

O projeto também utiliza React Router para navegação entre páginas e rotas dinâmicas para os detalhes dos títulos.

## Hooks utilizados

O projeto utiliza `useState` para controlar estados da aplicação, como:

- Termo de pesquisa;
- Resultados;
- Carregamento;
- Erros;
- Lista pessoal;
- Status dos títulos;
- Episódios assistidos.

O `useEffect` é utilizado principalmente para realizar chamadas à API do TMDB e carregar dados armazenados no navegador.

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente para auxiliar na compreensão de conceitos, estruturação de componentes, identificação de erros e revisão do código.

As decisões sobre a estrutura da aplicação, funcionalidades e organização do projeto foram realizadas pela equipe.

## Como executar o projeto

### Pré-requisitos

É necessário ter o Node.js instalado.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/leticiaalmeida7/cineverso.git
cd cineverso