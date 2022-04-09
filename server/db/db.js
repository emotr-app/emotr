const { Pool } = require('pg');

const PG_URI = 'postgres://gebczpbk:ak30fhQP994saKuRWWvus3I1SPlLantB@batyr.db.elephantsql.com/gebczpbk';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};


/* 
Example usage in a controller:

starWarsController.getCharacters = (req, res, next) => {
  // write code here
  const sqlQuery = `SELECT p.name, p.gender, p.species_id, p.birth_year, p.eye_color, p.hair_color, p.homeworld_id, p.skin_color, p.mass, p.height, films.title, species.name AS species, planets.name AS homeworld
  FROM people_in_films FULL OUTER JOIN people p ON p._id = people_in_films.person_id
  FULL OUTER JOIN films ON film_id = films._id
  FULL OUTER JOIN species ON p.species_id = species._id
  FULL OUTER JOIN planets ON p.homeworld_id = planets._id
  `;
  db.query(sqlQuery) // passing instructions to db.query method; returns a promise
    .then((data)=>{ // takes a cb that's executed once promise comes back 
      res.locals.people = data.rows;
      next();
    });
};

*/