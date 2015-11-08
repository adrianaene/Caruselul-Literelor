var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {
  
  $scope.diceFaces = [
    ['A', 'A', 'U', 'I', 'H', 'J'],
    ['T', 'R', 'N', 'S', 'M', 'B'],
    ['A', 'A', 'R', 'C', 'D', 'M'],
    ['E', 'E', 'I', 'O', 'D', 'F'],
    ['A', 'E', 'U', 'S', 'F', 'V'],
    ['T', 'L', 'N', 'P', 'G', 'C'],
    ['A', 'I', 'O', 'E', 'X', 'Z'],
    ['N', 'S', 'T', 'R', 'G', 'B'],
    ['I', 'I', 'U', 'E', 'L', 'P']
  ];  
  $scope.indexList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  $scope.generate = function() {    
    for(var i = 0; i < $scope.indexList.length; i++) {
      var index = getRandomInt(0, 5);
      $scope.indexList[i] = index;
      console.log(index);
    }

  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});