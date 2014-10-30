'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('InvokeChallenge App', function () {

  describe('Game view', function () {
    var ptor, mockedModule, module, boxesList, firstBox;

    beforeEach(function () {
      browser.get('');
    });

    it('should create 9 boxes on the screen in randomized (but not the same as original) order', function () {
      boxesList = element.all(by.repeater('box in boxes'));
      expect(boxesList.count()).toBe(9);
      expect(boxesList.getText().then(function (arr) { return arr.join(''); })).not.toMatch('BIGREDDOG');
    });

    it('should switch boxes when one is dragged over the other', function () {
      firstBox = element.all(by.css('[data-id="0"]')).get(0);

      // TODO(arthurb): If I had spent more time on it, I probably could have figured out a better way
      // to test the drag and drop functionality, but I'm not totally familiar with the API
      // For now I check that dragging over something moves the location of both items.
      firstBox.getLocation().then(function (origLoc) {
        browser.actions().dragAndDrop(firstBox, {x: 0, y: 200}).perform();
        element.all(by.css('[data-id="0"]')).get(0).getLocation().then(function (newLoc) {
          expect(origLoc.x).toBe(newLoc.x);
          expect(origLoc.y).not.toBe(newLoc.y);
        });
      });

      element.all(by.css('[data-id="3"]')).get(0).getLocation().then(function (origLoc) {
        browser.actions().dragAndDrop(firstBox, {x: 0, y: -200}).perform();
        element.all(by.css('[data-id="3"]')).get(0).getLocation().then(function (newLoc) {
          expect(origLoc.x).toBe(newLoc.x);
          expect(origLoc.y).not.toBe(newLoc.y);
        });
      });
    });

    it('should replace a box to where it started if dragged in an invalid direction', function () {
      firstBox = element.all(by.css('[data-id="0"]')).get(0);
      firstBox.getLocation().then(function (origLoc) {
        browser.actions().dragAndDrop(firstBox, {x: -50, y: 0}).perform();
        firstBox.getLocation().then(function (newLoc) {
          expect(origLoc.x).toBe(newLoc.x);
          expect(origLoc.y).toBe(newLoc.y);
        });
      });
    });
  });
});
