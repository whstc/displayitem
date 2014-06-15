var module = angular.module("displayitem",[]);

module.service( 'Item', [ '$rootScope', function( $rootScope ) {
    var itemIdex = -1;
    var allItems = [
        {
          type: "single",
          content: {
              title : "What did Baby Bear ask Mother Bear?",
              options: {
                a0 : "Will you make my breakfast?",
                b1 : "Who makes honey?",
                c2 : "May I go into the forest?",
                d3 : "Will you take me for a walk?"
            }
          }
        },
        {
            type:"fillin",
            content: {
                title: "What [[s1]] Baby [[s2]] ask Mother Bear?"
            }
        },
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
        },
        setResult : function(result){
            allItems[itemIdex].result = result;
            console.log("setResult: " +  result);
        }
    }
    return service;
}]);