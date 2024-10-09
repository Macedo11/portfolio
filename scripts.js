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