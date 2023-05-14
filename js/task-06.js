const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   const inputLength = Number(input.dataset.length);
   const inputValue = event.currentTarget.value.trim().length;
   
   if (inputValue === inputLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
   } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
   } 
}
