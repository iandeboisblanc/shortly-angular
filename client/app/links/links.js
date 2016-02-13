angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.nameContains = function (link) {
    var text = $scope.filterInput.toLowerCase() || '';
    var title = link.title.toLowerCase();
    var url = link.url.toLowerCase();
    console.log(text);
    return (title.indexOf(text) >= 0 || url.indexOf(text) >= 0 || text.length === 0);
  };
  $scope.data = {};
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });
});
