function ItemManager($scope) {



    $scope.item = {
        "type": "single"
    };
}

function SingleController($scope){
    $scope.itemType = $scope.item.type;
}
