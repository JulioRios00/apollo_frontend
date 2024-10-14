# Product Management Client

## Description
This is a product management Client developed in React with Typescript and NextJS. The application allows you to register, list, and calculate the promotional price of products based on their categories.

##Features
- Register new products with fields: name, description, color, category, and price.
- Automatic calculation of the promotional price based on the product category.
- Listing of registered products.

## Technologies Used
  - ReactJs
  - NextJs
  - Typescript
    
## Getting Started

Install the dependencies:
```
npm install
```

First, run the development server:
```
npm run dev
```
The application will be available at [http://127.0.0.1:8000/](http://localhost:3000)

# Para os avaliadores
1. Quais seriam as suas primeiras melhorias caso possuísse mais tempo de implementação?
 - Aplicação de testes unitários e conteinerização utilizando Docker. Também criaria a possibilidade da adição de novas categorias de produtos, adição de componentes para exibição individual dos produtos, adicionando imagens e mais detalhes sobre o produto.
2. Pensando na sua solução, como seria a manutenção em caso da adição de novas
categorias de produtos? O que precisaria ser alterado?
 - Criação de um campo para inserção de novas categorias no backend. Um novo arquivo exclusivo para as categorias poderia ser uma boa solução, além de adicionar verificações de categorias já existentes e etc.
3. Caso fosse necessário, quais alterações precisariam ser feitas para suportar atualizações na
porcentagem de desconto da categoria de produto, de modo que, sempre que a porcentagem
de desconto fosse alterada, o novo preço fosse refletido em todos os produtos da mesma?
 - Na própria implementação já criei um método para calcular a porcentagem de desconto a partir de um objeto com as categorias de itens. 

