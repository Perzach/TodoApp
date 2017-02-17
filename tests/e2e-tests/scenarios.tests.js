describe('Todo List Logic', function() {

    beforeEach(function() {
        browser.get('http://158.37.228.135:8100');
    });


    it('should have a title', function() {
        expect(browser.getTitle()).toEqual("TodoApp");
    });


    it('should contain three elements', function() {

        element.all(by.repeater("task in tasks")).then(function(items) {
            expect(items.length).toBe(3);
        });
    });


    it('should add task when creating new task', function() {
      //Click button for adding task
      element(by.id('newTaskBtn')).click();

      // New task name
      var input = element(by.tagName('input'));
      input.sendKeys("New Task");

      // Confirm new task
      var button = element(by.className('button ng-binding button-positive'));
      button.click();

      // Check that number of tasks is now 4.
      element.all(by.repeater("task in tasks")).then(function(items) {
        expect(items.length).toBe(4);
      });

    });


    it('should toggle completed when task is clicked', function() {
      // TODO: Implement

      var secondTask = element.all(by.tagName('ion-item')).get(1).click();


      browser.takeScreenshot().then(function (png) {
        //writeScreenShot(png, 'test1.png');
      });

      var itms = [];

      element.all(by.repeater("task in tasks")).then(function(items) {
        for(var x = 0; x < items.length; x++) {
          itms[x] = element(by.repeater("task in tasks").row(x).column("task")).getText();
        }

        expect(element(by.repeater("task in tasks").row(1).column("task")).getText()).toEqual(itms[1].getText());

        //expect(itms[1].completed).toEqual(true);
      })


      //expect(secondTask.classNames().get(0)).toEqual("item-icon-right item item-complex item-right-editable complete");
      //expect(secondTask.classNames).toEqual("");


      /*
       element.all(by.repeater("task in tasks")).then(function(items) {

       expect(element(by.repeater("task in tasks").row(1).column("task")).getText()).toEqual("Second");

       });
       */

    });

    it('should not add task when cancelling new task creation', function() {
      //Click button for adding task
      element(by.id('newTaskBtn')).click();

      // New task name
      var input = element(by.tagName('input'));
      input.sendKeys("New Task");

      // Confirm new task
      var button = element(by.className('button ng-binding button-default'));
      button.click();

      // Check that number of tasks is now 4.
      element.all(by.repeater("task in tasks")).then(function(items) {
        expect(items.length).toBe(3);
      });

    });


    it('should edit correct task when editing a task', function() {
        // TODO: Implement
      // Check that name of second task is Second.
      var task = element(by.repeater("task in tasks").row(1).column("task"));

      expect(task.getText()).toEqual("Second");


      /*
      var secondListItem = element.all(by.tagName('ion-item')).get(1).click();
      var location = secondListItem.getLocation();
      var newLocation = {
        x: location.x - 20000,
        y: location.y
      }


      browser.driver.actions()
        .dragAndDrop(secondListItem, newLocation)
        .perform();

*/

      /*
      var location = task.getLocation();
      var startLocation = {
        x: location.x + 300,
        y: location.y
      }
      var newLocation = {
        x: startLocation.x - 100,
        y: startLocation.y
      }

      browser.driver.touchActions()
        .tapAndHold(startLocation)
        .move(newLocation)
        .perform();

        */


      /*
      // Edit task name
      var input = element(by.tagName('input'));
      input.sendKeys(" Task");

      // Confirm new task
      var button = element(by.className('button ng-binding button-positive'));
      button.click();

*/


    });


});
