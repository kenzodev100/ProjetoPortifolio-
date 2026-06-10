const formulario = document.getElementById('formularioContato');
const feedback   = document.getElementById('contato__feedback');

function limparErros() {
  document.querySelectorAll('.campo-erro').forEach(el => el.textContent = '');
  document.querySelectorAll('.campo-entrada').forEach(el => el.classList.remove('campo-entrada--erro', 'campo-entrada--ok'));
  feedback.textContent = '';
  feedback.className = 'contato__feedback';
}

function mostrarErro(campoId, erroId, mensagem) {
  const campo = document.getElementById(campoId);
  const erro  = document.getElementById(erroId);
  campo.classList.add('campo-entrada--erro');
  erro.textContent = mensagem;
}

function marcarOk(campoId) {
  document.getElementById(campoId).classList.add('campo-entrada--ok');
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  limparErros();

  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  let valido = true;

  if (nome.length < 3) {
    mostrarErro('nome', 'erro-nome', 'O nome deve ter pelo menos 3 caracteres.');
    valido = false;
  } else {
    marcarOk('nome');
  }

  if (!validarEmail(email)) {
    mostrarErro('email', 'erro-email', 'Informe um e-mail válido (ex: nome@email.com).');
    valido = false;
  } else {
    marcarOk('email');
  }

  if (mensagem.length < 10) {
    mostrarErro('mensagem', 'erro-mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
    valido = false;
  } else {
    marcarOk('mensagem');
  }

  if (valido) {
    feedback.textContent = '✅ Mensagem enviada com sucesso! Obrigado pelo contato, Kenzo retornará em breve.';
    feedback.classList.add('contato__feedback--sucesso');
    formulario.reset();
    document.querySelectorAll('.campo-entrada').forEach(el => el.classList.remove('campo-entrada--ok'));
  } else {
    feedback.textContent = '⚠️ Corrija os campos destacados antes de enviar.';
    feedback.classList.add('contato__feedback--erro');
  }
});
