
describe('Hello World example', function() {

beforeEach(module('myapp'));

var scope,createController;

beforeEach(inject(function ($rootScope, $controller) {
	scope = $rootScope.$new();
		createController = $controller('HelloWorldController', {
			'$scope': scope
	});
}));

it('says hello world!', function () {
	//expect(scope.greeting).toBeUndefined();
	expect(scope.greeting).toEqual('Hello World');
});

});