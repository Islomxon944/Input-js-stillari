const elSelect = document.querySelector('.select');
const elInput = document.querySelector('.input');

elSelect.addEventListener('change', function (){
    if (elSelect.value === 'Boshqa'){
        elInput.disabled = false;
    }
    else{
        elInput.value = '';

        elInput.disabled = true;
    }
})