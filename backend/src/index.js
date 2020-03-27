const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP :
  * GET: buscar informação do back-end
  * POST: criar uma informação no back-end
  * PUT: alterar informação do back-end
  * DELETE: apagar uma informação do back-end
  */

  /**
   * Tipos de Parâmetros:
   * Query: parâmetros nomeados enviados na rota após ? (filtros, paginação)
   * Route: parâmetros usados para identificar recursos
   * Request Body: corpo da requisição utilizado para criar ou alterar recursos
   */

   /**
    * Banco de Dados:
    * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB
    */


