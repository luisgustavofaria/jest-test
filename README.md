## Como Executar o Projeto

1. Clone este repositório para o seu ambiente local.
   https://github.com/MKS-desenvolvimento-de-sistemas/mks-frontend-challenge.git
2. Navegue até a pasta do projeto no terminal.
3. Execute `npm install` para instalar todas as dependências.
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
5. Acesse `http://localhost:3000` no seu navegador para visualizar a aplicação.

# Projeto no GitHub:

https://github.com/luisgustavofaria/mks-frontend-challenge

# Projeto no Vercel:

https://mks-frontend-challenge-8gsc.vercel.app/

# Resumo

Este é um projeto de exemplo que consiste em uma aplicação web para uma loja online. Ele inclui funcionalidades como exibir produtos, adicionar produtos ao carrinho de compras, e visualizar e manipular o carrinho de compras. Ao finalizar a compra sera redirecionado para pagina success onde mostrará seus produtos comprados

## Tecnologias Utilizadas

- React
- Next.js
- Typescript
- Styled-components
- React Query
- Framer Motion
- Axios
- Jest
- Vercel

## Descrição dos Arquivos Principais

- **Header.tsx**: Componente responsável por exibir o cabeçalho da aplicação, incluindo o nome da empresa e o ícone do carrinho de compras.
- **Cart.tsx**: Componente que mostra o carrinho de compras, permitindo ao usuário visualizar os itens no carrinho, aumentar ou diminuir a quantidade de cada item e remover itens do carrinho.
- **Products.tsx**: Componente que exibe os produtos disponíveis para compra, permitindo ao usuário adicionar produtos ao carrinho.
- **useCart.tsx**: Hook personalizado que gerencia o estado do carrinho de compras, incluindo adicionar, remover e atualizar a quantidade de itens no carrinho.
- **\_app.tsx**: Arquivo de configuração do Next.js, onde são fornecidos os provedores de contexto para a aplicação.
