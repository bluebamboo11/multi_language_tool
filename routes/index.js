const express = require('express');
const router = express.Router();
const {Translate} = require('@google-cloud/translate');

// Instantiates a client
const projectId = 'livechat-d7edd';
const translate = new Translate({projectId});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/google-translate', function (req, res, next) {
    console.log(req.body);
    quickstart(req.body.text, function (translation) {
        console.log(translation);
        res.send(translation)
    });
});

async function quickstart(text, callback) {
    Promise.all([translate.translate(text, 'it'), translate.translate(text, 'en'), translate.translate(text, 'es')]).then(values => {

        callback({it: values[0][0], en: values[1][0], es: values[2][0], fr: text});
    });
}

module.exports = router;
