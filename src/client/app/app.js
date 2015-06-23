(function () {
    var app = angular.module('coinage', [
      'ngRoute'
    ]);

    app.config(['$routeProvider', routeConfigurator]);

    function routeConfigurator($routeProvider) {
      var routes = getRoutes();
      routes.forEach(function (r) {
        $routeProvider.when(r.url, r.config);
      });
      $routeProvider.otherwise({ redirectTo: '/' });
    }

    function getRoutes() {
      return [
        {
          url: '/',
          config: {
            templateUrl: 'app/machine/machine.html',
            title: 'Coin Machine'
          }
        }
      ];
    }
})();
