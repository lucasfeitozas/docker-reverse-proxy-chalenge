const express = require('express');
const {
   Repository
} = require('./repository');
const app = express();

app.get('/', async (_, res) => {
   const selectSql = `SELECT * FROM people`;
   const people = await Repository.query(selectSql);

   const title = '<h1>Full Cycle Rocks!</h1>';
   const list = `
    <ul>
      ${people.map(p => `<li>${p.name}</li>`).join('')}
    </ul>
  `;

   res.send(title + list);
});

app.listen(3000, () => {

  var sql = "INSERT INTO people (name) values ('Bruce Wayne'), ('Peter Parker'), ('Clark Kent'), ('Jon Doe'), ('Bill')";
  Repository.query(sql, function (err, result) {
     if (err) throw err;
     console.log("Line inserted");
  });
   console.log('Running on port 3000');
});