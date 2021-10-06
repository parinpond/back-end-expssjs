const express = require('express');
const app = express();
app.use(express.json());  
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var list = [
    {
        id: 1,
        cumulative_infection: "2",
        get_well: "200",
        in_hospital:"100",
        died:"2"
    },
];
app.get('/', (req, res) => {
    res.send(list);
});
app.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.send("200");
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`) );