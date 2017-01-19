var component = require('./component');
require('./jquery_scripts');
require('../css/main.sass');


require("../index.jade");


document.body.appendChild(component());
