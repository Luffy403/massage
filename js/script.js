let button = document.getElementById("myButton");
let text = document.getElementById("zhopa");
button.addEventListener('click', suda);
function suda() {
    alert("От души братишка");
    text.innerHTML =  "<div class = 'zagolov'><h1>Когда в массажку?)</h1>  <button id='secondBut'>Погнали!</button>  </div>";
    let secondBut = document.getElementById("secondBut");
    let socialIcon = document.querySelector(".container");
    secondBut.addEventListener('click', function secondFun(){
        socialIcon.innerHTML = "<h2>Запись на массаж:</h2>" 
        + "<a href = 'https://t.me/bekreev_massagennov' target = 'blank'><img src = 'icon/Telegram.svg'></img></a>"
    });
};