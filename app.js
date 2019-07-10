document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  
  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('invitedList');
  
  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');
  
  function createLI(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');  
    span.textContent = text;
    li.appendChild(span);
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    return li;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLI(text);
    ul.appendChild(li);
  });
  function isValidInput(input) {
    return /[a-z]/.test(input) &&
           /[A-Z]/.test(input) &&
           /-'/
  }
});  