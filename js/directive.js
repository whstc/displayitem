
var module = angular.module("displayitem.directive",[]);

/* Fragment End - directive */


module.directive('myKey', function ($parse) {
    return {
        restrict: "A",
        transclude: false,
        compile: function (element, attrs) {

            var modelAccessor = $parse(attrs.ngModel);

//                        var html = "<input type='text' id='" + attrs.id + "' >" +
//                "</input>";
//
//            var newElem = $(html);
//            element.replaceWith(newElem);

            return function (scope, element, attrs, controller) {

                var processChange = function () {
//                    console.log("processChange");
//                     scope.$apply(function (scope) {
//                        // Change bound variable
//                        modelAccessor.assign(scope);
//                    });
                };

                element.virtualKeyboard({
                    onSelect:processChange
                });

                scope.$watch(modelAccessor, function (val) {
                    console.log("asjfaj");
                    modelAccessor=val;
                });

            };

        }
    };
});