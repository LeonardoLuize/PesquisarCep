const express = require('express');
const app = express();

const path = require('path');
const PORT = 3001;

/* var request = require('request'); */
const axios = require('axios');

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json());


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})

app.get('/cepInfo/:cep', async (req, res) => {

    let cep = req.params.cep;

    console.dir(cep);

    try{
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        res.send(data);
    }catch(err){
        res.send("Erro: " + err);
    }

})

