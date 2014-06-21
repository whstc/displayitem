var module = angular.module("displayitem.service",[]);

module.service( 'Item', [ '$rootScope', function( $rootScope ) {
    var itemIdex = -1;
    var allItems = [
        {
            type:"fillin",
            content: {
                title: "What [[s1]] Baby [[s2]] ask Mother Bear?"
            }
        },
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

        { type: "multiple", author: "J.R.R Tolkien" }
    ]



    var service = {

        hasResult : true,
        observerCallbacks : [],
        registerObserverCallback : function(callback){
            this.observerCallbacks.push(callback);
        },
        notifyObservers : function(){
            angular.forEach(this.observerCallbacks, function(callback){
                 callback();
            });
        },
        next: function () {
            itemIdex ++;
            if(itemIdex > allItems.length){
                itemIdex = allItems.length;
            }

            this.hasResult = false;
            this.notifyObservers();
            return allItems[itemIdex];
        },
        current : function(){
            return allItems[itemIdex];
        },
        setResult : function(result){
            this.hasResult = true;
            this.notifyObservers();
            allItems[itemIdex].result = result;
            console.log("service::set result");
            console.log(result);
        }
    }
    return service;
}]);