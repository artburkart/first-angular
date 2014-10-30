'use strict';

/* Controllers */

var invokeChallenge = angular.module('invokeChallenge', ['ngDragDrop']);

invokeChallenge.controller('GameCtrl', function ($scope) {
  $scope.secretSentence = 'BIGREDDOG';
  $scope.boxes = [];

  // Borrowed directly from http://bit.ly/1wH1M9N
  // I made it take a string so the word can be changed more easily
  $scope.shuffleString = function (string) {
    var temp, index;
    var array = string.split('');
    var counter = array.length;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter -= 1;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    // Make sure shuffled string isn't the same as the original,
    // otherwise it defeats the purpose
    if (array.join('') === string) {
      return $scope.shuffleString(string);
    }
    return array.join('');
  }

  $scope.resetBoxes = function (string) {
    $scope.boxes = _.map($scope.shuffleString(string), function (s, i) {
      return {title: s, drag: true, selected: false, id: i};
    });
  };
  $scope.resetBoxes($scope.secretSentence);

  this.dropCallback = function(event, ui, title, $index) {
    if ($scope.boxes.map(function (box) { return box.title; }). join('') === $scope.secretSentence) {
      $scope.boxes.forEach(function (val, key) {
        $scope.boxes[key].drag = false;
      });
    }
  };
});