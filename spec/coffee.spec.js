let Coffee = require('../coffee.js');

describe('Sending correct message', function(){
    it('message for Drinks', function(done){
        let logic = new Coffee();
        assert.equal(logic.makeCoffee(1), "C:1:0");
        assert.equal(logic.makeCoffee(0), "C::");
        assert.equal(logic.makeCoffee(2), "C:2:0");

        assert.equal(logic.makeTee(1), "T:1:0");
        assert.equal(logic.makeTee(0), "T::");
        assert.equal(logic.makeTee(2), "T:2:0");

        assert.equal(logic.makeChocolate(1), "H:1:0");
        assert.equal(logic.makeChocolate(0), "H::");
        assert.equal(logic.makeChocolate(2), "H:2:0");
    });
});