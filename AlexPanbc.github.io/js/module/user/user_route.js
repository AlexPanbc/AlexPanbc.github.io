angular.module('user.route',['ui.router'])
       .config(function($stateProvider) {
            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: "view/page/user/login.html",
                    controller:"loginctro"
                })


        });
