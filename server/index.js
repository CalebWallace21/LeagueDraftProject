require('dotenv').config();
const session = require('express-session');
const massive = require('massive');
const express = require('express'),

championC = require('./controllers/champion_controller'),
champRando = require('./controllers/randChamp_controller'),
userC = require('./controllers/user_controller')
app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`DB is up and Server is running on port ${SERVER_PORT}`))
}).catch(err => {
    console.log(err)
});

app.get('/auth/session', userC.getSession);
app.post('/auth/register', userC.register);
app.post('/auth/login', userC.login);
app.delete('/auth/logout', userC.logout);

app.get("/api/random-champ", champRando.getRandomChamp)

app.get("/api/select-champ", championC.getChampions);
app.post("/api/select-champ", championC.selectChampion);
app.put("/api/select-champ/:id", championC.editName);
app.delete("/api/select-champ/:id", championC.deleteChampion);

app.listen(3003, () => console.log('Server is running on port 3003'))
