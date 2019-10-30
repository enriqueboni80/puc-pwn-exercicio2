var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

let users = { items: [] }
router.post('/', (req, res) => {
    users.items.push(req.body)
    res.send(users.items);
})

router.get('/delete/:email', (req, res) => {
    users.items.forEach((value, index) => {
        if (users.items[index].email == req.params.email) {
            users.items.splice(index, 1)
        }
    })
    res.send(users.items)
})

module.exports = router;