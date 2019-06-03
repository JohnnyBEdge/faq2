//toggles active class
let categories = document.getElementsByClassName("category");

for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } 



