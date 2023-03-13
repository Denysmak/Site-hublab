let navLinkBotoesDois = document.querySelector('.nav-links-botoes-2');
let navLista = document.querySelector('.nav-lista');
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#ambienteFidigital-img .containerFidigital-img");
let idx = 0;




//variavel que diz se a navlinkbotoes2 está aberta
let listaAberta = false;
let number = 590;
let largura = window.innerWidth;




// setInterval(() => {
//     let largura = window.innerWidth;
//     if(largura < 1550){
     
//         number = 400;
//     }
//     else{
       
//         number = 590;
//     }
// }, 10)
// function carossel(){
//     idx++;
//     if(idx > img.length - 1 ){
//         idx = 0;
//     }
//     imgs.style.transform = `translateX(${-idx * number}px)`
// }

// setInterval(carossel, 2500);
// setInterval(() => {
//     let largura = window.innerWidth;
//     console.log(largura)
// }, 25);

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