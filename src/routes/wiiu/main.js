const router = require('express').Router();
const logger = require('../../logger');

router.get('/geisha', (request, response) => {
	response.render('home', {layout: false});
});

router.get('/brick', (request, response) => {
	response.render('brick', {layout: false});
});

router.get('/rick', (request, response) => {
	response.render('rick', {layout: false});
});

router.get('/safe-rick', (request, response) => {
	response.render('safe-rick', {layout: false});
});

module.exports = router;
