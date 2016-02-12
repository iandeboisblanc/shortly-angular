angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  Links.getAll();
  $scope.data = {};
});
