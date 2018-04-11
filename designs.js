// Select color input
var color=$("#colorPicker");

// Select size input
var height = $("#inputHeight");
var width = $("#inputWidth");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(makeGrid);

function makeGrid() {
var grid="";

//creat grid html
for(var r=0;r<height;r++){
 grid += "<tr>"
  for(var c=0;c<width;c++){
  grid +="<th></th>";
  }
  grid += "</tr>";
}
//append grid html to table element
$(grid).appendTo("#pixelCanvas");
}
