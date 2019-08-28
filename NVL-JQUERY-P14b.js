jQuery(document).ready(function () {

    $("td").on("click", selectedItem);

    function selectedItem(event) {
        $("td.selected").attr("class", "")
        $(this).attr("class", "selected");
        
    }
    

    jQuery(document).keydown(function (evt) {
        switch(evt.key){
            case "ArrowDown": moveDown();
            break;
            case "ArrowUp": moveUp();
            break;
            case "ArrowRight": moveRight();
            break;
            case "ArrowLeft": moveLeft();
            break;
        }
     
    })
    function moveDown(){
        var lastEl= $("tr").last().index();
        var elementIndex= $("td.selected").index();
        var actualEl= $("td.selected").parent().index();
        if(actualEl<lastEl){
            $("tr").eq(actualEl+1).children("td").eq(elementIndex).attr("class", "selected");
            $("tr").eq(actualEl).children("td").eq(elementIndex).attr("class", "");
        }
    }
    function moveUp(){
        var elementIndex= $("td.selected").index();
        var actualEl= $("td.selected").parent().index();
        if(actualEl>0){
            $("tr").eq(actualEl-1).children("td").eq(elementIndex).attr("class", "selected");
            $("tr").eq(actualEl).children("td").eq(elementIndex).attr("class", "");

        }
    }
    function moveRight(){
        if($("td.selected").next().next().prevObject.length){
            $("td.selected").attr("class", "").next().attr("class", "selected");
        }
    }
    function moveLeft(){
        if($("td.selected").prev().prev().prevObject.length){
            $("td.selected").attr("class", "").prev().attr("class", "selected");
        }
    }
});