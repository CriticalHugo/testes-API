const express = require("express");
const fetch = require("cross-fetch");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Port: ${port}`));

app.get('/api/joke', (req, res) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((resp) => resp.json())
        .then(function(data) {
            res.send(`Joke: ${data.value}`);
        })
        .catch(function(error) {
            console.log(error);
        })
});