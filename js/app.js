/**
 * angularJS application that will display a million books with filters and search functionality
 * @author Panagiotis Vourtsis <vourtsis_pan@hotmail.com>
 */
angular.module('booksApp', [])
    .controller('booksController', ['$scope', '$http', function($scope, $http) {
        $scope.books = [];

        /**
         * Call to the local file called books.json to get all the books listed there. The file is a dimmy list of books.
         */
        $http.get('books.json')
            .then(function(res){
                $scope.books = res.data;
            });

        $scope.predicate = 'name';
        $scope.reverse = false;

        /**
         * Function that will give the order reverse or normal of the field
         * @function
         * @name order
         */
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        /**
         * Function to check whether the genre is on any special day we want e.g: halloween etc
         * @function
         * @name checkSpecialDay
         */
        $scope.checkSpecialDay = function(genre) {
            if (genre === 'horror') {
                return "halloween";
            } else if (genre === 'finance') {
                return "friday";
            }

        };
    }]);
