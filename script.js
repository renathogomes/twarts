const form = document.querySelector('form');
const email = document.querySelector('#input-email-header');
const senha = document.querySelector('#input-senha');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  }
  if (email.valeu !== 'tryber@teste.com' && senha.value !== '123456') {
    window.alert('Email ou senha inválidos.');
  }
});

const botao = document.getElementById('submit-btn');
botao.addEventListener('click', (e) => {
  e.preventDefault();
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('click', () => {
  if (checkbox.value === 'on') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});
