//Main app

angular.module('hearmenow', [

    'hearmenow.service',
    'hearmenow.controller',
    'ngRoute',
    'ui.bootstrap',

]).config(['$routeProvider', function($routeProvider){

    $routeProvider.

        when("/home", {

            templateUrl: "views/home-view.html",
            controller: "homeController"

        }).

        when("/bills", {

            templateUrl: "views/bill-view.html",
            controller: "billController"

        }).

        when("/representative", {

            templateUrl: "views/rep-view.html",
            controller: "repController"

        }).

        otherwise({redirectTo: "/home"});

}]);