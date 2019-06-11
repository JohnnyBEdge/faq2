// let acc = document.getElementsByClassName("category");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

let filter = document.getElementById("searchBar");

filter.addEventListener('keyup', filterQs);

function filterQs(){
  let filterValue = document.getElementById("searchBar").value.toUpperCase();

  let a = document.querySelectorAll('div.question > a');
  console.log(a.length)
//  let question = document.getElementsByClassName('question');

 
    for(i=0;i<a.length;i++){
      if(a[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
        a[i].style.display = 'block';
      } else {
        a[i].style.display = "none";
      }
    }
  }
 