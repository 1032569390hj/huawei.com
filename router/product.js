const express = require('express');
const conn = require('../dao/conn');
const router = express.Router();

router.route('/getProducts')
    .get((req, res, next) => {
        let sql = 'select * from product';
        conn.query(sql,(err, result) => {
            if (err) console.log(err);
            res.json(result);
        });
    });

module.exports = router;