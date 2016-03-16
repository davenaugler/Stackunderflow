(function () {
    'use strict';

    angular
        .module('app')
        .factory('MainService', MainService);

    function MainService($http) {
        var service = {
            greet: greet
        };

        return service;

        ////////////////
        function greet(name) {
            return "Hello " + name + ". How are you today?"
        }
    }
})();


(function() {
'use strict';

    angular
        .module('Module')
        .controller('CommentController', ControllerController);

    function ControllerController($scope, $http) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();