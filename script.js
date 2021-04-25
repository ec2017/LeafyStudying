
function imageBack() {
  var Image_Id = document.getElementById('img');
  if (Image_Id.src.match("daisy.png")) {
    Image_Id.src = "seed3.png";
  }
  else if (Image_Id.src.match("seed3.png")) {
    Image_Id.src = "rose.png";
  } 
  else if (Image_Id.src.match("rose.png")) {
    Image_Id.src = "seed2.png";
  } 
  else if (Image_Id.src.match("seed2.png")) {
    Image_Id.src = "sunflower.png";
  } 
  else {
    Image_Id.src = "seed.png";
  }
}

function imageChange() {
  var Image_Id = document.getElementById('img');
  if (Image_Id.src.match("seed.png")) {
    Image_Id.src = "sunflower.png";
  }
  else if (Image_Id.src.match("sunflower.png")) {
    Image_Id.src = "seed2.png";
  } 
  else if (Image_Id.src.match("seed2.png")) {
    Image_Id.src = "rose.png";
  } 
  else if (Image_Id.src.match("rose.png")) {
    Image_Id.src = "seed3.png";
  } 
  else {
    Image_Id.src = "daisy.png";
  }
}

