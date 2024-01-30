const mysql = require('mysql');

async function query(sql) {
   const conn = mysql.createConnection({
      host: 'db',
      user: 'root',
      password: 'root',
      database: 'nodedb'
   });

   const queryPromise = new Promise((resolve, reject) => {
      conn.query(sql, function (error, results) {
         if (error) reject(error);

         resolve(results)
      })
   })

   const queryResults = await queryPromise;

   conn.end();
   return queryResults;
}

const Repository = {
   query
}

module.exports = {
   Repository
}