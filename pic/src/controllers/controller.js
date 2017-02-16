var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('ProjectList.json').then(function(res) {
      $scope.projectList = res.data;
  })
}]);
