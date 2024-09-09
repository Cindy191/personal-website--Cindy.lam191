var slideIndex = 1;
showPics(slideIndex, num);

function changeIndex(n, num) {
  showPics(slideIndex += n, num);
}

function showPics(n, num) {
    var className = "Project-" + num + "-pic";
  var arr = document.getElementsByClassName(className);
  if(n > arr.length){
    slideIndex = 1
  }
  if(n < 1){
    slideIndex = arr.length
  }
  for(var i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
  }

  arr[slideIndex-1].style.display = "block";
}