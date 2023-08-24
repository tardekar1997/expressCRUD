console.log('exprees crud mysql Contacts app starting...');
const app = require('./server');
const dbConnection = require('./dbConn');
const addContactRoute = require('./addContact');
app.use('/addContact', addContactRoute)
