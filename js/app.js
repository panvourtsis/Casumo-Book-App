/**
 * angularJS application that will display a million books with filters and search functionality
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */
angular.module('booksApp', [])
    .controller('booksController', ['$http', function($http) {
        var self = this;
        self.books = [];

        /**
         * Call to the local file called books.json to get all the books listed there. The file is a dimmy list of books.
         */
        $http.get('books.json')
            .then(function(res){
                self.books = res.data;
            });

        self.predicate = 'name';
        self.reverse = false;

        /**
         * Function that will give the order reverse or normal of the field
         * @function
         * @name order
         */
        self.order = function(predicate) {
            self.reverse = (self.predicate === predicate) ? !self.reverse : false;
            self.predicate = predicate;
        };

        /**
         * Function to check whether the genre is on any special day we want e.g: halloween etc
         * @function
         * @name checkSpecialDay
         */
        self.checkSpecialDay = function(genre) {
            if (genre === 'horror') {
                return "halloween";
            } else if (genre === 'finance') {
                return "friday";
            }

        };
    }]);
