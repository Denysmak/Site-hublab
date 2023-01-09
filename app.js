let navLinkBotoesDois = document.querySelector('.nav-links-botoes-2');
let navLista = document.querySelector('.nav-lista');


let listaAberta = false;



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
        // navLinkBotoesDois.style.flexDirection = 'column';
        // navLinkBotoesDois.style.fontSize = '5px';
        listaAberta = false; 
    }
})