angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'socket', function ($scope, Global, socket) {
    $scope.global = Global;

    // Listening to an event
    socket.on('someEvent', function(data) {
      $scope.data = data;
      console.log('received someEvent');
    });

    // Raising an event
    $scope.raise = function(message) {
      socket.emit('otherEvent', message);
    };
}]);
