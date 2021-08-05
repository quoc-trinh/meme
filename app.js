angular.module("myMemeApp", ['ngRoute']).config(config);

function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when("/meme", {
        templateUrl: "meme/meme.html",
        controller: "MemeController",
        controllerAs: "memeCtrl"
    }).
    when("/", {
        templateUrl: "/meme/home/home.html",
        controller: "HomeController",
        controllerAs: "homeCtrl"
    }).otherwise({
        redirectTo: "/"
    });
}