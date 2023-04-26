const form = document.querySelector('form');
const email = document.querySelector('#input-email');
const senha = document.querySelector('#input-senha');

window.onload = () => {
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá Tryber!');
    } else {
      alert('Email ou senha inválidos');
    }
  });
};

/* const verificaCheck = () => {
  const checkbox = document.getElementById('#agreement');
  if (checkbox.parentNode) {
    checkbox.parentNode.removeChild(document.getElementById('#submit-btn'));
  }
};

verificaCheck(); */
