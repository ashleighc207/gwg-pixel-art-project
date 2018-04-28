/* global $ */
$(document).ready(function() {
let color = $("#colorPicker").val();
let row = $(".row");
let column = $(".column");
let submitBtn = $("#submitBtn");
let pixelCanvas = $("#pixel_canvas");
let mouseDown = false;


function makeGrid(height, width) {
	for(let i = 0; i < height; i++){
		let tableRow = $("<tr class=\"row\"></tr>");
		for(let j = 0; j < width; j++){
			tableRow.append("<td class=\"column\"></td>");
		}
		pixelCanvas.append(tableRow);
	}
}
function removeGrid() {
   $("tr").remove();
}

$(submitBtn).on("click", function(evt) {
	evt.preventDefault();
	removeGrid();
	let inputHeight = $("#inputHeight").val();
	let inputWidth = $("#inputWidth").val();
	makeGrid(inputHeight, inputWidth);
});

$("#colorPicker").on("change", function() {
  color = $("#colorPicker").val();
});

$(pixelCanvas).on("mousedown", function(){
	mouseDown = true;
});

$(pixelCanvas).on("click", "td", function(){
	let background = $(this).css("background-color");
	let isEmpty = !background || background === "rgb(255, 255, 255)" ||
       background === "#ffffff";
    if(isEmpty){
    	$(this).css("background-color", color); 
    } else {
      $(this).removeAttr("style");
    }
});


$(pixelCanvas).on("mouseup", function(){
	mouseDown = false;
});

  $(pixelCanvas).on("mousemove", "td", function(evt){
    evt.preventDefault();
    if(mouseDown){
      $(this).attr("style", `background-color: ${color}`);
    }
  });
});

