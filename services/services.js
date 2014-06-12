var module = angular.module("displayitem",[]);

module.service( 'Item', [ '$rootScope', function( $rootScope ) {
    var itemIdex = -1;
    var allItems = [
        { type: "single", author: "Raymond E. Feist" },
        { type: "multiple", author: "J.R.R Tolkien" }
    ]
    var service = {

        next: function () {
            itemIdex ++;
            if(itemIdex > allItems.length){
                itemIdex = allItems.length;
            }
            return allItems[itemIdex];
        },
        current : function(){
            return allItems[itemIdex];
        }
    }
    return service;
}]);