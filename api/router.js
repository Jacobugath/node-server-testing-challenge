const router = require('express').Router();

let players = [
    {
        id: 1,
        name: 'Donovan Mitchell',
        postion: 'Point Guard'
    }
];

router.get('/', (req, res) => {
    res.send(players[0]);
});

router.post('/', (req, res) => {
   players = players + req.body;
   res.send(req.body);
});

router.delete('/', (req, res) => {
    players = players.map(a => a.id != req.body.id)
    res.send(players);
 });

module.exports = router;
