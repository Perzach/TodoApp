/**
 * Created by per-oystein on 14.02.2017.
 */

describe('Todo controller', function () {

    var scope, tasks;


    /*beforeEach(function() {
     module('starter.services');
     inject(function(_Chats_) {
     Chats = _Chats_;
     });
     });*/

    beforeEach(module('starter.controllers'));
    beforeEach(function () {
        chats = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
        Chats = {
            all: function () {
                return chats;
            }, remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            }
        };
        module(function ($provide) {
            $provide.value('Chats', Chats);
        });
    });


    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        $controller('ChatsCtrl', { $scope: scope });
        // window.dump(Chats.all());
    }));

    it('should be defined', function () {
        expect(scope).toBeDefined();
    });

    it('should be three entries', function () {
        expect(scope.chats.length).toBe(3);
    });

    it('should be tow entries after removal', function() {
        scope.remove({name: 'a'});
        expect(scope.chats.length).toBe(2);
    })
});