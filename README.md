<h1 style="font-size: 14pt;">Integração com API The MovieDB</h1>

<p>
    Está projeto visa se integrar com a api The Movie DB. Que é uma api com informações sobre filmes e séries televisivas.
</p>

<h2 style="font-size: 12pt;">Como rodar a API?</h2>

<p>
    Para rodar a Api de integração é necessário ter o NodeJS latest instalado e o yarn.
    A api utiliza o Sequelize então você tera que gerar o banco de dados. Já deixei um arquivo docker-compose.yml para gerar um ambiente do banco de dados. 

    Para criar o imagem e subir o conteiner siga os seguintes passos:

    1. Instale o Docker e Docker Compose.
    2. docker-compose up -d 
    3. cd integration-themoviedb-api
    4. Se não estiver instalado instale o NodeJS e Yarn.
    5. yarn install
    6. yarn upgrade
    7. npx sequelize-cli db:migrate
    8. yarn start


    Pronto agora é para a api estar rodando e para ver se está tudo ok faça um request do tipo 
    get com Insomnia ou Postman e requesite na url http://localhost:3333/dicover-movies com um
    body do tipo json com o seguinte:
</p>
    <pre>
        {
          "language": "pt-br"
        }
    </pre>
<p>
    Deverá ser carregado uma lista de filmes lançados na linguagem Brasileira.
    Foi deixado na raiz do repositório um arquivo de importação do Insomnia, para facilitar os testes.
</p>

