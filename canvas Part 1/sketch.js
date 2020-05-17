var database;
var drawing = [];
var path =  [];
var isDrawing = false;

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //  firebase.database.ref()
    canvas.mousePressed(startPath);
    canvas.parent('canvascontainer');
    canvas.mouseReleased(endPath);

   // var savebutton = select('#savebutton');
    var clearbutton = select('#clearbutton',100,100);
  //  savebutton.mousePressed(saveDrawing);
    clearbutton.mousePressed(clearDrawing);
}


function startPath(){
    isDrawing = true;
    path =  [];
      drawing.push(path);
}
function endPath(){
isDrawing = false;
}
    




    function draw(){
        background(0);
    
    if (isDrawing) {
        var point = {
            x:mouseX,
            y:mouseY
    
        }
        path.push(point);
    }
  
    stroke(255);
    strokeWeight(4);
    noFill();
    for (i = 0; i < drawing.length;i++) {
        var currentpath = drawing[i];
          beginShape();
        for (d = 0; d < currentpath.length;d++) {
        vertex(currentpath[d].x,currentpath[d].y)
    }
endShape();

}

    
    }
    
//function saveDrawing(){
    //var ref = database.ref('drawings');
   //// ref.push(drawing);
//}


function clearDrawing(){
    drawing = [];
}