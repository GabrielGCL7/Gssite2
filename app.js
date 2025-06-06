document.addEventListener('DOMContentLoaded', function () {
  // --- Animação de transição entre as páginas ---
  document.querySelectorAll('.link-transicao').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.href;
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  });

  // --- Validação do formulário ---
  const form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nome = form.nome.value.trim();
      const idade = form.idade.value.trim();
      const endereco = form.endereco.value.trim();
      const telefone = form.telefone.value.trim();
      const locomocao = form.locomocao.value;

      if (nome.length < 3) {
        alert('Por favor, digite um nome válido com pelo menos 3 caracteres.');
        form.nome.focus();
        return;
      }

      const idadeNum = Number(idade);
      if (isNaN(idadeNum) || idadeNum < 0 || idadeNum > 120) {
        alert('Por favor, informe uma idade válida entre 0 e 120 anos.');
        form.idade.focus();
        return;
      }

      if (endereco.length < 5) {
        alert('Por favor, informe um endereço válido.');
        form.endereco.focus();
        return;
      }

      const telefoneRegex = /^\d{10,11}$/;
      if (!telefoneRegex.test(telefone)) {
        alert('Informe um telefone válido contendo 10 ou 11 números, sem espaços ou símbolos.');
        form.telefone.focus();
        return;
      }

      if (locomocao !== 'Sim' && locomocao !== 'Não') {
        alert('Selecione se possui dificuldade de locomoção.');
        form.locomocao.focus();
        return;
      }

      alert('Cadastro realizado com sucesso!');
      // form.submit();
    });
  }
});

  // Pega o botão
  const mybutton = document.getElementById("backToTopBtn");

  // Mostra o botão quando rolar 20px da parte superior
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Quando clicar, sobe para o topo
  function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  }

