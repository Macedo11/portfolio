var hidden = document.querySelector('#hidden');
var btn = document.querySelector('#btn_projetos');

btn.addEventListener('click', function() {
    if(hidden.style.display === 'block') {
        hidden.style.display = 'none'
    } else {
        hidden.style.display ='block'
        btn.innerHTML = 'Veja menos'
    }
})