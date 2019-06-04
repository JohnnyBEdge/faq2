
let searchBar = document.getElementById("searchBar");
searchBar.addEventListener('keyup', filterQuestions);

function filterQuestions(){
  let filterValue = document.getElementById("searchBar").value.toUpperCase();
  let categories = document.getElementById("categories");
  let questions = categories.querySelectorAll('li.collection-item');

  for(let i=0; i < questions.length;i++){
    let p = questions[i].getElementsByTagName('p')[0];
    if(p.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      questions[i].style.display = "";
    } else{
      questions[i].style.display = "none";
    }
  }
}
