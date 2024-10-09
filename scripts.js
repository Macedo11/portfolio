
// BOTÃO VEJA MAIS
var hidden = document.querySelector('#hidden');
var btn = document.querySelector('#btn_projetos');

btn.addEventListener('click', function() {

    if(window.getComputedStyle(hidden).display === 'none') {
        hidden.style.display = 'block'
        btn.textContent = 'Veja menos'
    } else {
        hidden.style.display = 'none'
        btn.textContent = 'Veja mais'
    }
})

// EFEITO BLUR

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.scroll')

elements.forEach((element) => myObserver.observe(element))