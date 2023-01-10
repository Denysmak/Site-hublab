let navLinkBotoesDois = document.querySelector('.nav-links-botoes-2');
let navLista = document.querySelector('.nav-lista');

//variavel que diz se a navlinkbotoes2 está aberta
let listaAberta = false;


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