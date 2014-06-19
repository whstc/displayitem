

function ItemManager($scope,Item) {
    var curItem;

    $scope.showerUrl = "begin";
    $scope.showNextItem = function (){

        curItem = Item.next();

        console.log("showNextItem::" + curItem.type);
        $scope.showerUrl = curItem.type;
    }
}

function SingleController($scope,Item){
    $scope.curItem = Item.current();

    $scope.selectOption = function (optionId){
        console.log("selectOption :: " + optionId );
        $scope.selectId = optionId;
        Item.setResult(optionId);
    }

}

function FillinController($scope,Item){
    $scope.result = {};

    var curItem = Item.current();
    var title = curItem.content.title;
    //是数组的形式，其中第一个是普通字符串，第二个是键值
    var titleSplit = title.split(/\[\[(.{2})\]\]/);
    var fillinContent = [];

    for(var i = 0; i < titleSplit.length; i++){
        var subContent = {};
        if(i%2 == 0){
            subContent.type="content";
        }else{
            subContent.type="key";
        }
        subContent.value = titleSplit[i];

        fillinContent.push(subContent);
    }

    $scope.fillinContent = fillinContent;

    $scope.changeResult = function(){
        console.log(this.result);
        Item.setResult(this.result);
    }


}

