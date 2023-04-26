const form = document.querySelector('form');
const email = document.querySelector('#input-email-header');
const senha = document.querySelector('#input-senha');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  if (email.value && senha.value) {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  }
});
