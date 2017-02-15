describe('Todo List Logic', function() {

    beforeEach(function() {
        browser.get('http://158.37.230.166:8100');
    });


    it('should have a title', function() {
        expect(browser.getTitle()).toEqual("TodoApp");
    });


    it('should contain three elements', function() {

        element.all(by.repeater("task in tasks")).then(function(items) {
            expect(items.length).toBe(3);
        });
    });


    it('should toggle completed when task is clicked', function() {
        // TODO: Implement


        element.all(by.repeater("task in tasks")).then(function(items) {

            expect(element(by.repeater("task in tasks").row(1).column("task")).getText()).toEqual("Second");

        });






    });


    it('should add correct task when creating new task', function() {
        // TODO: Implement
        //element(by.id('newTaskBtn')).click();

        /*
        var popup = element(by.title('New Task'));

        popup.input.sendKeys("New Task");

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'test1.png');
        });
        //popup.confirm();

        //expect()
        */

    });

    it('should edit correct task when editing a task', function() {
        // TODO: Implement
    });

/*


    describe('List logic', function() {
        it('should toggle completed when clicked', function() {
            //console.log();
            element.all(by.tagName('a')).get(1).click();
            expect(browser.getTitle()).toEqual("Chats");
        });

    });

    describe('Stack scenarios', function() {

        var input, push, pop;

        beforeEach(function() {
            element.all(by.tagName('a')).get(3).click();
            input = element(by.id("stackInput"));
            push = element(by.buttonText("Push"));
            pop = element(by.buttonText("Pop"));
        });

        it('should work by adding an item', function() {

            element.all(by.repeater("val in stack")).then(function(items) {
                input.sendKeys("asd");
                push.click();
                expect(element.all(by.repeater("val in stack")).count()).toBe(items.length+1);
                expect(element(by.repeater("val in stack").row(0).column("val")).getText()).toEqual("asd");
            });
        });

        it('should show below item after popping', function() {
            var itms = [];
            element.all(by.repeater("val in stack")).then(function(items) {
                for(var x = 0; x < items.length; x++) {
                    itms[x] = element(by.repeater("val in stack").row(x).column("val")).getText();
                }
                pop.click();
                expect(element(by.repeater("val in stack").row(0).column("val")).getText()).toEqual(itms[1]);
            })
        });

    });
    */

});
