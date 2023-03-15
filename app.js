let navLinkBotoesDois = document.querySelector('.nav-links-botoes-2');
let navLista = document.querySelector('.nav-lista');
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#ambienteFidigital-img .containerFidigital-img");
let idx = 0;
let mainScrollDiv = document.querySelector('.main-scroll-div')
let width;
let imageWidth = 650;



console.log(mainScrollDiv)
let i = 1;
setInterval(() => {
if(i < 5){
    i++
    mainScrollDiv.style= `background-image:url("./assets/ambiente${i}.png");`
}
else{
    i = 1;
    mainScrollDiv.style= `background-image:url("./assets/ambiente${i}.png");`
}
}, 2000)


// mainScrollDiv.style= 'background-image:url("./assets/ambiente1.png");'

// function rodar(){
//    let i = 1;
//    while(i < 5){
//     mainScrollDiv.style= `background-image:url("./assets/ambiente${i}.png");`

   
//    }
   
// }

// rodar()



//variavel que diz se a navlinkbotoes2 está aberta
let listaAberta = false;


function scrolll(){
    let left = document.querySelector(".scroll-images");
    left.scrollBy(-630,0);

}
function scrollr(){
    let right = document.querySelector(".scroll-images");
    right.scrollBy(630,0)

}



//função que abre ou fecha a navlinkbotoes2
navLista.addEventListener('click', () => {
    if(listaAberta == false){
        navLinkBotoesDois.style.display = 'flex';
        navLinkBotoesDois.style.flexDirection = 'column';
        navLinkBotoesDois.style.alignItems = 'center';
        navLinkBotoesDois.style.fontSize = '5px';

         
        listaAberta = true;    
}
    else if(listaAberta == true){
        navLinkBotoesDois.style.display = 'none';
        listaAberta = false; 
    }
})