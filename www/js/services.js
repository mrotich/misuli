angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'John',
        lastText: 'You on your way?',
        face: ''
  }, {
        id: 1,
        name: 'Emily',
        lastText: 'Hey, it\'s me',
        face: ''
  }, {
        id: 2,
        name: 'James',
        lastText: 'Did you get the ice cream?',
        face: ''
  }, {
        id: 3,
        name: 'Katy',
        lastText: 'I should buy a boat',
        face: ''
  }, {
        id: 4,
        name: 'James',
        lastText: 'Look at my mukluks!',
        face: ''
  }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});