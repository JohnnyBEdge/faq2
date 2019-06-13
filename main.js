let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', filterQs);

function filterQs(){
  let filterValue = searchBar.value.toUpperCase();

  let a = document.querySelectorAll("div.child > a");

  for(i=0;i<a.length;i++){
    if(a[i].innerHTML.toUpperCase().indexOf(filterValue)> -1){
      a[i].style.display = 'block';
    } else {
      a[i].style.display = 'none';
    }
  }
}

  let sections = document.getElementsByTagName('section');

  for(j=0;j<sections.length;j++){
    sections[j].addEventListener('click', openClose);
    function openClose(){
      this.classList.toggle('close');
    }
  }

  
  
  






// let category =document.getElementsByClassName("category");

// for(x=0;x<category.length;x++){
//   category[x].addEventListener("click",function() {
//     this.classList.toggle('open')
//   let sibs = this.nextElementSibling;
  
//   })
// }
// //search function
// let filter = document.getElementById("searchBar");

// filter.addEventListener('keyup', filterQs);

// function filterQs(){
//   let filterValue = document.getElementById("searchBar").value.toUpperCase();

//   let a = document.querySelectorAll('div.question > a');
//   let category = document.getElementsByClassName("category");

//   for(i=0;i<a.length;i++){
//     if(a[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
//       a[i].style.display = 'block';
//       a[i].style.backgroundColor= "rgb(169, 236, 138)";
//     } else {
//         a[i].style.display = "none";
//       }
//     }
//   }
 
