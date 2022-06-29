const reset = document.getElementById("reset_button");
const change = document.getElementById("change_button");

reset.addEventListener("click", resetGrid);
change.addEventListener("click", changeColor);

function resetGrid(){
    for(var i=1; i<10; i++){
        document.getElementById(i).style.backgroundColor = "transparent";
    }
}

function changeColor(){
    var blockId = document.getElementById("block_id");
    var colorId = document.getElementById("color_id");
    if(!blockId.value){
        alert("Enter the Block Id");
    }
    if(!colorId.value){
        alert("Enetr the Color");
    }
    resetGrid();
    var gridId = document.getElementById(blockId.value);
    gridId.style.backgroundColor = colorId.value;

    blockId.value = "";
    colorId.value = "";
}