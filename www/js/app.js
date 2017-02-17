// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

// This is TodoCtrl controller.
.controller('TodoCtrl', function($scope, $ionicPopup, $ionicListDelegate) {

  // Setting array of tasks in scope.
  $scope.tasks =
      [
        {title: "First", completed: true},
        {title: "Second", completed: false},
        {title: "Third", completed: false},
      ];


      // Function for adding a new task by a popup prompt.
      $scope.newTask = function() {
        $ionicPopup.prompt({
        title: "New Task",
        template: "Enter task:",
        inputPlaceholder: "What do you need to do?",
        okText: 'Create task'

        }).then(function(res) {    // promise

          // Add new task if popup returns a result
          if (res){
            $scope.tasks.push({title: res, completed: false});
          }
        })
      };


      // Function for editing a task by a popup prompt
      $scope.editTask = function(task) {
        $scope.data = { response: task.title };
        $ionicPopup.prompt({
        title: "Edit Task",
        scope: $scope

        }).then(function(res) {    // promise

          if (res !== undefined) {
            // Edits title to response stored in scope.
            task.title = $scope.data.response;
          }
          // Closes the option button slide.
          $ionicListDelegate.closeOptionButtons();

        })
    };


    // Function for removing a specific task.
    $scope.removeTask = function(index) {
      if(index < $scope.tasks.length){
        // Removes tasks from specified index, with delete count: 1
        $scope.tasks.splice(index, 1)

      } else{
        // Do nothing
      }

    };

})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
