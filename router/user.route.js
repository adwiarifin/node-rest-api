const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get /user');
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    // req.query  => query params, setelah tanda tanya
    // req.params => untuk path yang dynamic
    // req.body   => request body
    res.send('get /user/:id');
})

router.post('/', (req, res) => {
    res.send('post /user');
});

module.exports = router;