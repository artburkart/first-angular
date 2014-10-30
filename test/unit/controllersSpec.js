'use strict';

/* jasmine specs for controllers go here */
describe('InvokeChallenge controllers', function () {

  describe('GameCtrl', function () {
    var scope, ctrl;

    beforeEach(function () {
      module('ngDragDrop');
      module('invokeChallenge');
    });
    beforeEach(inject(function ($controller) {
      scope = {};
      ctrl = $controller('GameCtrl', {$scope: scope});
    }));

    it('should create "boxes" model with 9 boxes', inject(function ($controller) {
      expect(scope.boxes.length).toBe(9);
    }));

    it('should not create "boxes" model that contains letters in the same order as "FUNALLDAY"', inject(function ($controller) {
      expect(scope.boxes.join('')).not.toBe('FUNALLDAY');
    }));

    it('should set "secretSentence" to "FUNALLDAY"', inject(function ($controller) {
      expect(scope.secretSentence).toBe('FUNALLDAY');
    }));
  });
});
