let btn = document.querySelector(".reserve");
function Reserve (){
    let date = document.querySelector('.date').value;
    let time = document.querySelector('.time').value;
    let zone = document.querySelector('.zone').value;
    let smoker = document.querySelector('.smoker').value;
    let table = document.querySelector('.table').value;
    let people = document.getElementById('people').value;
    let obj = [date,time,zone,smoker,table,people];
    if(localStorage.getItem("Reservations") != obj) {
        localStorage.setItem("Reservations",obj);
    }
    else{
        alert("The reservation already exists")
    }
}
btn.addEventListener('click',Reserve);