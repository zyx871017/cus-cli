'use strict';

const config = require('../templete.json');

module.exports = () => {
    console.log(config.tpl);
    process.exit();
};