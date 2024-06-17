let icone_1 = document.getElementById('icon_1')
let icone_2 = document.getElementById('icon_2')
let icone_3 = document.getElementById('icon_3')
let icone_4 = document.getElementById('icon_4')
let icone_5 = document.getElementById('icon_5')
let icone_6 = document.getElementById('icon_6')

let resposta_1 = document.getElementById('resposta_1')
let resposta_2 = document.getElementById('resposta_2')
let resposta_3 = document.getElementById('resposta_3')
let resposta_4 = document.getElementById('resposta_4')
let resposta_5 = document.getElementById('resposta_5')
let resposta_6 = document.getElementById('resposta_6')

let caixa_1 = document.getElementById('caixa_1')
let caixa_2 = document.getElementById('caixa_2')
let caixa_3 = document.getElementById('caixa_3')
let caixa_4 = document.getElementById('caixa_4')
let caixa_5 = document.getElementById('caixa_5')
let caixa_6 = document.getElementById('caixa_6')

let x1 = 0
let x2 = 0
let x3 = 0 
let x4 = 0
let x5 = 0
let x6 = 0 

let section = document.getElementById('perguntas')

//Mobile
let largura = 0
let altura = 0

function alertarCelular(){
    largura = window.innerWidth
    altura = window.innerHeight
    
    if(largura < 576){
        alert('Não terminei de desenvolver este site para celulares, então para ter experiência melhor ligue a opção: Para computador. Obrigado!!')
    }
}
//Fim Mobile


function mudarIcon_1() {
    
    if(icone_1.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_1.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_1.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_1.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_1.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 

function mudarIcon_2() {
    
    if(icone_2.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_2.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_2.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_2.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_2.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 

function mudarIcon_3() {
    
    if(icone_3.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_3.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_3.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_3.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_3.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 

function mudarIcon_4() {
    
    if(icone_4.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_4.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_4.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_4.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_4.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 

function mudarIcon_5() {
    
    if(icone_5.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_5.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_5.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_5.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_5.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 

function mudarIcon_6() {
    
    if(icone_6.classList == 'fa-solid fa-plus icon-pergunta'){
        icone_6.classList.remove('fa-solid', 'fa-plus', 'icon-pergunta')
        icone_6.classList.add('fa-regular', 'fa-x', 'icon-pergunta')
    } else {
        icone_6.classList.remove('fa-regular', 'fa-x', 'icon-pergunta')
        icone_6.classList.add('fa-solid', 'fa-plus', 'icon-pergunta')
    }
} 



function respostaAparecer_1(){
    if(altura > 576){
        if(x1 == 0){
            x1 = 1
    
            resposta_1.style.display = 'block'
    
            caixa_1.style.marginBottom = '235px'
    
            section.style.height = '1180px'
            
        } else {
            x1 = 0
    
            resposta_1.style.display = 'none'
            
            caixa_1.style.marginBottom = '0px'
    
            section.style.height = '970px'
    
        }
    } else {
        if(x1 == 0){
            x1 = 1
    
            resposta_1.style.display = 'block'
    
            caixa_1.style.marginBottom = '325px'
    
            section.style.height = '1320px'
            
        } else {
            x1 = 0
    
            resposta_1.style.display = 'none'
            
            caixa_1.style.marginBottom = '0px'
    
            section.style.height = '1020px'
    
        }
    }
    
}

function respostaAparecer_2(){
    
    if(altura > 576){
        if(x2 == 0){
            x2 = 1

            resposta_2.style.display = 'block'

            caixa_2.style.marginBottom = '125px'

            section.style.height = '1060px'
            
        } else {
            x2 = 0

            resposta_2.style.display = 'none'
            
            caixa_2.style.marginBottom = '0px'

            section.style.height = '970px'
        }
    } else {
        if(x2 == 0){
            x2 = 1

            resposta_2.style.display = 'block'

            caixa_2.style.marginBottom = '180px'

            section.style.height = '1170px'
            
        } else {
            x2 = 0

            resposta_2.style.display = 'none'
            
            caixa_2.style.marginBottom = '0px'

            section.style.height = '1020px'
        }
    }
}

function respostaAparecer_3(){
    
    if(altura > 576){
        if(x3 == 0){
            x3 = 1

            resposta_3.style.display = 'block'

            caixa_3.style.marginBottom = '305px'

            section.style.height = '1240px'
            
        } else {
            x3 = 0

            resposta_3.style.display = 'none'
            
            caixa_3.style.marginBottom = '0px'

            section.style.height = '970px'
        }
    } else {
        if(x3 == 0){
            x3 = 1

            resposta_3.style.display = 'block'

            caixa_3.style.marginBottom = '430px'

            section.style.height = '1420px'
            
        } else {
            x3 = 0

            resposta_3.style.display = 'none'
            
            caixa_3.style.marginBottom = '0px'

            section.style.height = '1020px'
        }
    }
}

function respostaAparecer_4(){
    
    if(altura > 576){
        if(x4 == 0){
            x4 = 1

            resposta_4.style.display = 'block'

            caixa_4.style.marginBottom = '165px'

            section.style.height = '1100px'
            
        } else {
            x4 = 0

            resposta_4.style.display = 'none'
            
            caixa_4.style.marginBottom = '0px'

            section.style.height = '970px'
        }
    } else {
        if(x4 == 0){
            x4 = 1

            resposta_4.style.display = 'block'

            caixa_4.style.marginBottom = '210px'

            section.style.height = '1200px'
            
        } else {
            x4 = 0

            resposta_4.style.display = 'none'
            
            caixa_4.style.marginBottom = '0px'

            section.style.height = '1020px'
        }
    }
}

function respostaAparecer_5(){
    
    if(altura > 576){
        if(x5 == 0){
            x5 = 1

            resposta_5.style.display = 'block'

            caixa_5.style.marginBottom = '125px'

            section.style.height = '1070px'
            
        } else {
            x5 = 0

            resposta_5.style.display = 'none'
            
            caixa_5.style.marginBottom = '0px'

            section.style.height = '970px'
        }
    } else {
        if(x5 == 0){
            x5 = 1

            resposta_5.style.display = 'block'

            caixa_5.style.marginBottom = '155px'

            section.style.height = '1170px'
            
        } else {
            x5 = 0

            resposta_5.style.display = 'none'
            
            caixa_5.style.marginBottom = '0px'

            section.style.height = '1020px'
        }
    }
}

function respostaAparecer_6(){
    
    if(altura > 576){
        if(x6 == 0){
            x6 = 1

            resposta_6.style.display = 'block'

            caixa_6.style.marginBottom = '235px'

            section.style.height = '1200px'
            
        } else {
            x6 = 0

            resposta_6.style.display = 'none'
            
            caixa_6.style.marginBottom = '0px'

            section.style.height = '970px'
        }
    } else {
        if(x6 == 0){
            x6 = 1

            resposta_6.style.display = 'block'

            caixa_6.style.marginBottom = '350px'

            section.style.height = '1360px'
            
        } else {
            x6 = 0

            resposta_6.style.display = 'none'
            
            caixa_6.style.marginBottom = '0px'

             section.style.height = '1020px'
        }
    }
}


