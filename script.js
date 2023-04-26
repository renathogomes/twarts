const form = document.querySelector('form');
const email = document.querySelector('#input-email');
const senha = document.querySelector('#input-senha');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  if (email.value && senha.value) {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá Tryber!');
    } else {
      alert('Email ou senha inválidos');
    }
  }
});
