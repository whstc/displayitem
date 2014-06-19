
var module = angular.module("displayitem.directive",[]);

/* Fragment End - directive */


module.directive('myKey', function ($parse) {
    return {
        restrict: "A",
        transclude: false,
        compile: function (element, attrs) {

            var modelAccessor = $parse(attrs.ngModel);


            return function (scope, element, attrs, controller) {

                var processChange = function (val) {
                    scope.$apply(function (scope) {
                        modelAccessor.assign(scope,val);
                        scope.$eval(attrs.ngChange);
                    });

                };

                element.virtualKeyboard({
                    onSelect:processChange
                });



            };

        }
    };
});