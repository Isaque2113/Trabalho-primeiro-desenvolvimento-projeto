
 
  document.querySelector('button[type="button"]').addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');
    const emailDigitado = inputs[0].value.trim();
    const senhaDigitada = inputs[1].value;

    const usuarios = JSON.parse(localStorage.getItem('foodly_usuarios') || '[]');

    const usuarioEncontrado = usuarios.find(u =>
      u.email === emailDigitado && u.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
      localStorage.setItem('foodly_logado', JSON.stringify(usuarioEncontrado));
      window.location.href = 'index.html'; // sua página interna
    } else {
      alert('Email ou senha incorretos!');
    }
  });

