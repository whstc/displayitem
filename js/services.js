angular.module('app', ['ngResource']).
    factory('Item', function($resource){
    return $resource('item', {}, {
        query: {method:'GET'}
    });
});