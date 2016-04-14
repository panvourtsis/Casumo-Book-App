/**
 * angularJS application test
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */
describe("Controller: booksController", function() {
    beforeEach(module("booksApp"));

    var ctrl, backend;
    beforeEach(inject(function($controller, $httpBackend) {
        ctrl = $controller('booksController');
        backend = $httpBackend;
    }));

    it("should have reverse false as default value",function() {
        expect(ctrl.reverse).toBeFalsy();
    });

    it("should have predicate as name by default",function() {
        expect(ctrl.predicate).toBe('name');
    });

    it("check the special day that returns correctly on horror genre",function() {
        var genre = 'horror';
        expect(ctrl.checkSpecialDay(genre)).toBe('halloween');
    });

    it("check the special day that returns correctly on finance genre",function() {
        var genre = 'finance';
        expect(ctrl.checkSpecialDay(genre)).toBe('friday');
    });

    it("should get 200 on the get request",function() {
        backend.expectGET('books.json')
            .respond(200);
        backend.flush();
    });

    afterEach(function() {
        backend.verifyNoOutstandingExpectation();
        backend.verifyNoOutstandingRequest();
    });

});
