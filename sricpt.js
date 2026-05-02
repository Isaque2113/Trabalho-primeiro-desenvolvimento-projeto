
  document.querySelector('button').addEventListener('click', () => {
    // 1. Pegar os valores dos campos
    const inputs = document.querySelectorAll('input');
    const email    = inputs[0].value.trim();
    const telefone = inputs[1].value.trim();
    const cep      = inputs[2].value.trim();
    const numero   = inputs[3].value.trim();
    const senha    = inputs[4].value;

    // 2. Validação básica
    if (!email || !senha) {
      alert('Email e senha são obrigatórios!');
      return;
    }

    // 3. Carregar banco existente (array de usuários)
    const usuarios = JSON.parse(localStorage.getItem('foodly_usuarios') || '[]');

    // 4. Verificar se email já está cadastrado
    if (usuarios.find(u => u.email === email)) {
      alert('Email já cadastrado!');
      return;
    }

    // 5. Criar novo usuário e salvar
    usuarios.push({
      id: Date.now(),
      email,
      telefone,
      cep,
      numero,
      senha,  // ⚠️ em produção real, nunca salve senha em texto puro!
      criadoEm: new Date().toISOString()
    });

    localStorage.setItem('foodly_usuarios', JSON.stringify(usuarios));
    alert('Cadastro realizado com sucesso!');
  });
