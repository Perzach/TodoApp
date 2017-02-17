/**
 * Created by per-oystein on 14.02.2017.
 */

describe('Todo controller', function () {

  var
    controller,
    scope,
    ionicPopupMock,
    ionicListDelegateMock;

  // Loading module of app
  beforeEach(module('starter'));


  // instantiate the controller and mocks for every test
  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();

    // Adding three tasks.
    scope.tasks =
      [
        {title: "First", completed: true},
        {title: "Second", completed: false},
        {title: "Third", completed: false},
      ];

    // mock $ionicPopup
    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['prompt']);

    // mock $ionicListDelegate
    ionicListDelegateMock = jasmine.createSpyObj('$ionicListDelegate spy', ['prompt']);

    // instantiate LoginController with mock data
    controller = $controller('TodoCtrl', {
      '$scope': scope,
      '$ionicPopup': ionicPopupMock,
      '$ionicListDelegate': ionicListDelegateMock }
    );

  }));



    it('should be defined', function () {
        expect(scope).toBeDefined();
    });

    it('should be three entries', function () {
        expect(scope.tasks.length).toBe(3);
//
    });

    it('should be two entries after removal', function() {
        scope.removeTask(0);
        expect(scope.tasks.length).toBe(2);
    });

    it('should remove correct task', function(){
      scope.removeTask(1);
      expect(scope.tasks[1].title).toBe('Third');
    });

    it('should not remove if index is >= tasks.length', function() {
      scope.removeTask(3);
      expect(scope.tasks.length).toBe(3);
    });

});
