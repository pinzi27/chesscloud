#!/usr/bin/env node

exports.index = function (req, res) {
	res.render('index', { title: 'Express', game: false });
}
