'use strict';

const express = require('express');
const { appendLocals } = require('../lib/helpers');

const router = express.Router();

router.get('/', (req, res) => {
    res = appendLocals(req, res);
    res.render('index.pug', {
        title: 'Official CDN of Bootstrap and Font Awesome'
    });
});

module.exports = router;

// vim: ft=javascript sw=4 sts=4 et:
