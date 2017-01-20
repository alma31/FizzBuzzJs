var FizzBuzzOf = require('../lib/fizzBuzz').FizzBuzzOf

describe("FizzBuzzOf execution", function () {

	it("should return 1 with parameter 1", function () {
		expect(FizzBuzzOf(1)).toBe(1);
	});

	it("should return 2 with parameter 2", function(){
		expect(FizzBuzzOf(2)).toBe(2);
	})

	it("should return Fizz with parameter 3", function(){
		expect(FizzBuzzOf(3)).toBe("Fizz");
	})
});