/*global window*/

// http://stackoverflow.com/questions/18313576/confirmation-dialog-on-ng-click-angularjs
// http://zachsnow.com/#!/blog/2013/confirming-ng-click/

var confirm = window.confirm;

var mod = angular.module('confirmDialog', [])
  .directive('confirmDialog', [function () {
    return {
      priority: -1,
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function (e) {
          var message = attrs.confirmDialog;
          if (message) {
            if (!confirm(message)) {
              e.stopImmediatePropagation();
              e.preventDefault();
            }
          }
        });
      }
    };
  }]);

module.exports = mod.name;
