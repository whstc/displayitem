var module = angular.module('displayitem');
module.directive('ngFocus', function($timeout) {
    return {
        link: function ( scope, element, attrs ) {
            scope.$watch( attrs.ngFocus, function ( val ) {
                if ( angular.isDefined( val ) && val ) {
                    $timeout( function () { element[0].focus(); } );
                }
            }, true);

            element.bind('blur', function () {

                if ( angular.isDefined( attrs.ngFocusLost ) ) {
                    scope.$apply( attrs.ngFocusLost );

                }
            });
        }
    };
});

module.directive("tianVirtureKey",function(){
    var directiveDefinitionObject = {
        templateUrl: 'view/virtureKey.html',
        link: function (scope, iElement, iAttrs) {
            var shifton = false;

            leftVal=140+"px";
            topVal=120+"px";
            $('#keyboard').css({left:leftVal,top:topVal}).toggle();

           function onShift(e) {
                var i;
                if(e==1) {
                    for(i=0;i<4;i++) {
                        var rowid = "#row" + i;
                        $(rowid).hide();
                        $(rowid+"_shift").show();
                    }
                }
                else {
                    for(i=0;i<4;i++) {
                        var rowid = "#row" + i;
                        $(rowid).show();
                        $(rowid+"_shift").hide();
                    }
                }
            }

            // function thats called when any of the keys on the keyboard are pressed
            $("#keyboard input").bind("click", function(e) {

                if( $(this).val() == 'Backspace' ) {
                    $('#pwd').replaceSelection("", true);
                }

                else if( $(this).val() == "Shift" ) {
                    if(shifton == false) {
                        onShift(1);
                        shifton = true;
                    }

                    else {
                        onShift(0);
                        shifton = false;
                    }
                }

                else {


                    if(shifton == true) {
                        onShift(0);
                        shifton = false;
                    }
                }
            });

        }

};

return directiveDefinitionObject;
});