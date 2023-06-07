const pgp = require('pg-promise')({
	noWarnings: true,
});
const db = pgp(process.env.DATABASE_URL);

module.exports = db;
