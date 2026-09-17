# Requirements — Cineverso

## 1. Visão do Produto

### Nome

Cineverso

### Problema

Pessoas que assistem a muitos filmes e séries podem ter dificuldade para organizar os conteúdos que desejam assistir, lembrar o que já assistiram e acompanhar em qual episódio ou temporada de uma série pararam.

Além disso, a descoberta de novos conteúdos pode exigir pesquisas em diferentes serviços e plataformas.

### Público

Pessoas que assistem regularmente a filmes e séries e desejam organizar seu consumo de conteúdo de forma simples e visual.

### Proposta de solução

O Cineverso é uma plataforma web responsiva que reúne descoberta de filmes e séries e organização pessoal.

O usuário pode pesquisar conteúdos, visualizar suas informações, adicionar títulos à sua lista e definir o status de cada conteúdo como "Quero assistir", "Assistindo" ou "Concluído".

Para séries, o usuário também pode acompanhar seu progresso através do registro dos episódios assistidos.

As informações dos filmes e séries são obtidas através da API do TMDB.

---

## 2. Objetivo do MVP

O objetivo do MVP é oferecer uma plataforma que permita ao usuário descobrir filmes e séries e organizar seu acompanhamento em um único lugar.

O usuário consegue:

- visualizar filmes e séries;
- pesquisar por títulos;
- acessar os detalhes de um filme ou série;
- adicionar conteúdos à sua lista;
- alterar o status de um conteúdo;
- visualizar sua lista pessoal;
- marcar episódios de séries como assistidos;
- acompanhar o progresso de uma série;
- utilizar a plataforma em diferentes tamanhos de tela.

---

## 3. User Stories

### US01 — Descobrir conteúdos

Como usuário, quero visualizar filmes e séries em destaque para encontrar novos conteúdos para assistir.

### US02 — Pesquisar conteúdos

Como usuário, quero pesquisar pelo nome de um filme ou série para encontrar rapidamente um conteúdo específico.

### US03 — Visualizar detalhes

Como usuário, quero visualizar os detalhes de um filme ou série para conhecer melhor o conteúdo antes de decidir assisti-lo.

### US04 — Adicionar à lista

Como usuário, quero adicionar um filme ou série à minha lista para organizar os conteúdos que desejo acompanhar.

### US05 — Organizar por status

Como usuário, quero definir o status de um conteúdo para saber se quero assisti-lo, estou assistindo ou já concluí.

### US06 — Acompanhar episódios

Como usuário, quero marcar os episódios de uma série como assistidos para saber onde parei.

### US07 — Consultar minha lista

Como usuário, quero visualizar todos os conteúdos que salvei para acompanhar minha organização pessoal.

---

## 4. Funcionalidades

### F01 — Descoberta de filmes e séries

**Descrição:**  
A aplicação apresenta filmes e séries obtidos através da API do TMDB para que o usuário possa descobrir novos conteúdos.

**Critérios de aceitação:**

- [ ] A aplicação deve consumir dados da API do TMDB.
- [ ] Os conteúdos devem apresentar pelo menos título, pôster e avaliação.
- [ ] O usuário deve conseguir selecionar um conteúdo.
- [ ] A aplicação deve apresentar um estado de carregamento enquanto os dados são buscados.
- [ ] A aplicação deve apresentar uma mensagem quando não houver conteúdos disponíveis.
- [ ] A aplicação deve apresentar uma mensagem quando ocorrer um erro na consulta.

**Estados:**

- [ ] Inicial
- [ ] Carregando
- [ ] Sucesso
- [ ] Vazio
- [ ] Erro

---

### F02 — Pesquisa de conteúdos

**Descrição:**  
O usuário pode pesquisar filmes e séries através de um campo de busca.

**Critérios de aceitação:**

- [ ] O usuário deve conseguir informar um termo de pesquisa.
- [ ] A aplicação deve realizar a pesquisa utilizando a API do TMDB.
- [ ] Os resultados devem ser apresentados em cards.
- [ ] O usuário deve conseguir acessar os detalhes de um resultado.
- [ ] A aplicação deve informar quando nenhum resultado for encontrado.
- [ ] A aplicação deve apresentar um estado de carregamento durante a pesquisa.

**Estados:**

- [ ] Inicial
- [ ] Digitando
- [ ] Carregando
- [ ] Sucesso
- [ ] Vazio
- [ ] Erro

---

### F03 — Detalhes do conteúdo

**Descrição:**  
A aplicação possui uma página específica para apresentar as informações de um filme ou série selecionado.

**Critérios de aceitação:**

- [ ] A página deve utilizar uma rota dinâmica.
- [ ] O conteúdo deve ser identificado através de seu ID.
- [ ] Deve apresentar pôster.
- [ ] Deve apresentar título.
- [ ] Deve apresentar sinopse.
- [ ] Deve apresentar avaliação.
- [ ] Deve apresentar data de lançamento.
- [ ] Deve apresentar gêneros quando disponíveis.
- [ ] O usuário deve conseguir adicionar o conteúdo à sua lista.

**Estados:**

- [ ] Carregando
- [ ] Sucesso
- [ ] Erro

---

### F04 — Minha Lista

**Descrição:**  
O usuário pode visualizar e organizar os filmes e séries adicionados à sua lista pessoal.

**Critérios de aceitação:**

- [ ] Os conteúdos adicionados devem permanecer salvos no navegador.
- [ ] A lista deve apresentar os conteúdos adicionados.
- [ ] Cada conteúdo deve apresentar seu status.
- [ ] O usuário deve conseguir alterar o status.
- [ ] O usuário deve conseguir remover um conteúdo.
- [ ] A aplicação deve apresentar uma mensagem quando a lista estiver vazia.

**Estados:**

- [ ] Inicial
- [ ] Com conteúdo
- [ ] Vazio

---

### F05 — Status dos conteúdos

**Descrição:**  
O usuário pode organizar seus conteúdos através de três status.

**Status disponíveis:**

- Quero assistir
- Assistindo
- Concluído

**Critérios de aceitação:**

- [ ] Todo conteúdo adicionado deve possuir um status.
- [ ] O status inicial deve ser "Quero assistir".
- [ ] O usuário deve conseguir alterar o status.
- [ ] O status escolhido deve ser armazenado no navegador.
- [ ] O status deve ser apresentado visualmente na lista.

---

### F06 — Acompanhamento de episódios

**Descrição:**  
Para séries, o usuário pode marcar episódios como assistidos e acompanhar seu progresso.

**Critérios de aceitação:**

- [ ] A aplicação deve identificar conteúdos do tipo série.
- [ ] Os episódios disponíveis devem ser apresentados.
- [ ] O usuário deve conseguir marcar um episódio como assistido.
- [ ] O usuário deve conseguir desmarcar um episódio.
- [ ] A aplicação deve apresentar a quantidade de episódios assistidos.
- [ ] O percentual de progresso deve ser atualizado após cada interação.
- [ ] O progresso deve permanecer salvo no navegador.

**Estados:**

- [ ] Carregando
- [ ] Sucesso
- [ ] Vazio
- [ ] Erro

---

### F07 — Responsividade

**Descrição:**  
A aplicação adapta sua interface para diferentes tamanhos de tela.

**Critérios de aceitação:**

- [ ] A aplicação deve funcionar em desktop.
- [ ] A aplicação deve funcionar em tablet.
- [ ] A aplicação deve funcionar em dispositivos móveis.
- [ ] Os cards devem se adaptar ao tamanho disponível.
- [ ] A navegação deve continuar utilizável em telas menores.

---

## 5. Estados da Aplicação

### Inicial

Estado apresentado antes do carregamento de dados ou antes de uma interação do usuário.

### Carregando

Estado apresentado enquanto a aplicação aguarda uma resposta da API.

### Sucesso

Estado apresentado quando os dados são carregados corretamente.

### Vazio

Estado apresentado quando não existem conteúdos para exibir ou quando uma pesquisa não encontra resultados.

### Erro

Estado apresentado quando ocorre uma falha na comunicação com a API ou em uma operação necessária para a aplicação.

---

## 6. Regras do Produto

### R01 — Adição à lista

O usuário pode adicionar um filme ou série à sua lista pessoal.

### R02 — Conteúdo duplicado

Um mesmo conteúdo não pode ser adicionado mais de uma vez à lista.

### R03 — Status inicial

Todo novo conteúdo adicionado recebe inicialmente o status "Quero assistir".

### R04 — Alteração de status

O usuário pode alterar o status entre:

- Quero assistir
- Assistindo
- Concluído

### R05 — Remoção

O usuário pode remover um conteúdo da sua lista.

### R06 — Persistência

A lista pessoal e o progresso dos episódios permanecem disponíveis após a atualização da página.

Para o MVP, essas informações são armazenadas no `localStorage` do navegador.

### R07 — Progresso de séries

O progresso é calculado com base na quantidade de episódios marcados como assistidos em relação à quantidade total de episódios disponíveis na temporada selecionada.

### R08 — Dados dos conteúdos

As informações apresentadas sobre filmes e séries são obtidas através da API do TMDB.

### R09 — Identificação dos conteúdos

Cada conteúdo possui uma página de detalhes acessível através de seu identificador.

### R10 — Responsividade

As principais funcionalidades da aplicação estão disponíveis independentemente do tamanho da tela.

---

## 7. Fora do Escopo

As seguintes funcionalidades não fazem parte do MVP:

- [ ] Cadastro e login de usuários.
- [ ] Sistema de amizades.
- [ ] Seguidores.
- [ ] Chat entre usuários.
- [ ] Comentários públicos.
- [ ] Comunidade de usuários.
- [ ] Recomendações personalizadas por inteligência artificial.
- [ ] Sistema de assinatura ou pagamentos.
- [ ] Reprodução de filmes e séries.
- [ ] Integração para assistir diretamente em serviços de streaming.
- [ ] Backend próprio.
- [ ] Banco de dados.
- [ ] Sincronização da lista entre diferentes dispositivos.
- [ ] Sistema completo de gamificação.
- [ ] Notificações.

---

## 8. API

### TMDB API

O Cineverso utiliza a API do The Movie Database (TMDB) para obter informações sobre filmes e séries.

A API é utilizada para obter informações como:

- títulos;
- pôsteres;
- sinopses;
- avaliações;
- datas de lançamento;
- gêneros;
- temporadas;
- episódios.

A aplicação React realiza requisições à API utilizando os recursos disponíveis para o projeto.

---

## 9. Persistência

O `localStorage` é utilizado para manter os dados pessoais do usuário no navegador.

São armazenados:

- conteúdos adicionados à lista;
- status dos conteúdos;
- episódios assistidos.

A persistência permite que essas informações continuem disponíveis após a atualização da página.

---

## 10. Critérios Gerais de Aceitação

O MVP é considerado funcional quando:

- [ ] A aplicação executa corretamente em React.
- [ ] O usuário consegue navegar entre as páginas.
- [ ] A aplicação possui múltiplas rotas.
- [ ] Existe pelo menos uma rota dinâmica.
- [ ] A aplicação consome a API do TMDB.
- [ ] O usuário consegue pesquisar filmes e séries.
- [ ] O usuário consegue visualizar os detalhes de um conteúdo.
- [ ] O usuário consegue adicionar conteúdos à sua lista.
- [ ] O usuário consegue alterar o status dos conteúdos.
- [ ] O usuário consegue remover conteúdos da lista.
- [ ] O usuário consegue acompanhar episódios de séries.
- [ ] Os dados da lista permanecem após atualizar a página.
- [ ] A interface funciona em desktop, tablet e dispositivos móveis.
- [ ] A aplicação utiliza componentes reutilizáveis.
- [ ] A aplicação utiliza estados de carregamento, sucesso, vazio e erro quando necessários.