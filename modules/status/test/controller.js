let expect = require('chai').expect;
let Ctrl = require('../controller');

describe('controller', function () {
	describe('GetLists()', function () {
		it('should return exist lists', function (done) {
			Ctrl.GetLists((err, lists) => {
				expect(err).to.be.null;
				expect(lists).to.have.length.above(0);
				done();
			});
		});
	});
});