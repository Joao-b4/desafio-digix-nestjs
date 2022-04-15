> # Digix Desafio Técnico

Desafio: https://www.notion.so/Desafio-t-cnico-2f53347cf16a418fb75c67c978ab1a0e
## Seleção de famílias aptas a ganharem uma casa popular

Temos um produto e recebemos o desafio de gerar uma lista de pessoas aptas a ganhar uma casa popular do governo, tendo como única exigência que essa lista esteja ordenada de forma mais justa possível com um somatório de pontos, analisando aspectos das famílias que estão participando. São considerados os seguintes critérios para a construção das pontuações:

- Renda total da família até 900 reais - valendo 5 pontos;
- Renda total da família de 901 à 1500 reais - valendo 3 pontos;
- Famílias com 3 ou mais dependentes  (lembrando que dependentes maiores de 18 anos não contam) - valendo 3 pontos;
- Famílias com 1 ou 2 dependentes  (lembrando que dependentes maiores de 18 anos não contam) - valendo 2 pontos.

O código que faz essa análise hoje é totalmente procedural, repleto de blocos if/else pra analisar e montar as classificações e nos dá muito custo de manutenção, nos motivando a procurar uma nova solução para este problema. Seu desafio é justamente isso, codificar uma forma melhor de chegar no mesmo resultado usando e abusando da orientação à objetos, criando classes e métodos de uma forma que fique tudo mais legível e fácil de manter e estender.

Falando sobre estender, o cliente já deixou um alerta ligado de que irão incluir novos critérios na avaliação das famílias em breve, assim que forem aprovados pelo governador, então temos que ter uma solução preparada para adicioná-los sem muito custo de implementação.

Como iremos focar em avaliar os conceitos usados, também não há necessidade de entregar um código funcionando e muito menos uma interface (tela), seja ela na linha de comando, web ou desktop. O que nos importa mesmo é o código que fará a regra de negócio e como ele estará estruturado.


> ## Usage
#### Installation
```bash
$ npm install
```
#### Run tests
```bash
$ npm run test
```
#### Run development
```bash
$ npm run start:dev
```
#### Run build
```bash
$ npm run build
```
#### Run server
```bash
$ npm run start:prod
```

> ## Principles
* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)

> ## Design Patterns
* Factory
* Dependency Injection
* Generic Repository Pattern
* Data Transfer Object

> ## Methodologies and Designs
* TDD
* Clean Architecture
* Modular Design
* Use Cases

> ## Tests Features
* Testes Unitários
* Testes de Integração (API Rest)
* Mocks

> ## Technologies
* Node.js
* Typescript
* Mongo Database

> ## Libs
* NPM
* Typescript
* Jest
* NestJs
* Eslint
* Mongoose

## Estrutura de arquivos
```shell
  $ tree
  .
  ├── src/
  │   └── configuration/                    # arquivos de configuracao, contem URL do banco de dados
  │   └── core/                             # camada nucleo da aplicacao
  │       └── abstracts/                    # interfaces da camada externa que sao usadas pelos casos de uso 
  │       └── entities/                     # classes usadas pelo nucleo da aplicacao
  │       └── use-cases/                    # services dos casos de uso que utilizam as entitidades
  │   └── frameworks/                       # camada de frameworks externos
  │       └── data-services/                # servicos de acesso a dados
  │           └── mongo/                    # implementacao do generic repository com o mongoDB
  │               └── model/                # modelos que representam schemas do banco de dados
  │       └── http/                         # servicos do servidor web
  │           └── controllers/              # controladores de rotas da API
  │           └── dtos/                     # objetos de transferencia de dados, utilizado para validar request e response
  │           └── factory/                  # classes de factory para conversao de dto em entidades e vice-versa
  │   └── modules/                          # camada de modulos
  ├── README.md                             # este arquivo com a descricao do projeto
  └── test/                                 # pasta com arquivos de teste
```