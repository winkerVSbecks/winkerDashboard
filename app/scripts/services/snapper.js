'use strict';

angular.module('winkerDashboardApp')
  .factory('Snapper', function () {
    // Service logic
    var snapper = new Snap({
      element: document.getElementById('snap-contenter'),
      hyperextensible: false,
      disable: 'right'
    });
    // Public API  
    return {
      left: function () {
        if( snapper.state().state=="left" ){
          snapper.close();
        } else {
          snapper.open('left');
        }
      },
      right: function () {
        if( snapper.state().state=="right" ){
          snapper.close();
        } else {
          snapper.open('right');
        }
      },
      switch: function () {
        if( snapper.state().state=="left" ){
          snapper.close();
          snapper.open('right');
        } else {
          snapper.close();
          snapper.open('left');
        }
      },
      close: function () {
        snapper.close();
      }
    }
  });