// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  makeGrid();
});


function makeGrid() {

  // Select size input
  const rows = $('#inputHeight').val();
  const cols = $('#inputWidth').val();

  //another way to select element in the DOM
  let table = document.getElementById('pixelCanvas');
  
  //restart Canvas to an empty canvas
  table.innerHTML ='';
  
  //grid variable saves new grid html code
  let grid='';
  
  //creat grid's html
  for(let r=0;r<rows;r++){
   grid += '<tr>';
    for(let c=0;c<cols;c++){
    grid +='<td class="cell"></td>';
    }
    grid += '</tr>';
  }
  
  //assign created grid html to innerHtml of table
  table.innerHTML = grid;

  $('.cell').on('click',function(evt){
    $( evt.target ).css( 'background', $('#colorPicker').val() );
  });

  }
