angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Vincent',
        lastText: 'You on your way?',
  }, {
        id: 1,
        name: 'Antony',
        lastText: 'Hey, it\'s me',
        face: ''
  }, {
        id: 2,
        name: 'Gideon',
        lastText: 'Did you get the ice cream?',
        face: ''
  }, {
        id: 3,
        name: 'Micah',
        lastText: 'I should buy a boat',
        face: ''
  }, {
        id: 4,
        name: 'God',
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