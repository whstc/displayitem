
function ItemManager($scope,Item) {
    var curItem;

    $scope.showerUrl = "begin";
    $scope.showNextItem = function (){
        console.log("showNextItem");
        curItem = Item.next();

        if(curItem.type == "single"){
            console.log("showNextItem::single");
            $scope.showerUrl = curItem.type;
        }
    }
}

function SingleController($scope,Item){
    $scope.curItem = Item.current();

    $scope.selectOption = function (row){
        console.log("selectOption :: " + row );
        $scope.selectRow = row;
    }

}
