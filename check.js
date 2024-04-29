
function myFunction() {
  var checkBox = document.getElementById("myCheck");

  var popup = document.getElementById("myPopup");
  if (checkBox.checked == true){
    popup.classList.toggle("show");


    //setTimeout(function() {
     // popup.classList.toggle("hide");
   // }, 5000); // 5000 milliseconds = 5 seconds

  } else {
    popup.classList.toggle("hide");
   //popup.style.display = "none";
  }


}
