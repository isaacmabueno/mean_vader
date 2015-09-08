var app = angular.module("person", []);

app.controller("HeaderController", ["$scope", function($scope){
  $scope.title = "-JIMBO JONES-",
  $scope.tagLine = "5 attributes of JIMBO!"
}]);

app.controller("MessageController", ["$scope", function($scope){
  $scope.messages =
  [
    {
      Person: "James Haff",
      Birthday: new Date ('1987', '11', '12'),
      TeachingExperience: "Experience Science Teacher looking to transition into becoming an instructor at WDI",
      Interests: "Science, Music, Babes, Javascript related things...",
      NeedsAHaircut: "true",
      FavoriteBand: "Greatful Dead"
    }
  ];
}]);
