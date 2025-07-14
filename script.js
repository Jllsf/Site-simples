  
  //Mudança de cor dos botões
  const botoes = document.querySelectorAll('.botao');

  // Aplica os eventos para cada botão
  botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
      botao.style.backgroundColor = 'brown'; 
      botao.style.color = '#fff';
    });

    botao.addEventListener('mouseout', () => {
      botao.style.backgroundColor = '';
      botao.style.color = '';
    });
  });

  //Abertura suave dos detalhes
 document.addEventListener("DOMContentLoaded", () => {
  const detalhes = document.querySelectorAll(".detalhe");

  detalhes.forEach(detail => {
    const summary = detail.querySelector("summary");
    const content = detail.querySelector(".detalhe-aberto");

    summary.addEventListener("click", e => {
      e.preventDefault();

      if (detail.hasAttribute("open")) {
        content.style.maxHeight = content.scrollHeight + "px"; 

        requestAnimationFrame(() => {
          content.style.maxHeight = "0";
          content.style.opacity = "0";
        });
        setTimeout(() => {
          detail.removeAttribute("open");
        }, 500);
      } else {
        detail.setAttribute("open", "");
        content.style.maxHeight = "0";
        content.style.opacity = "0";
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = "1";
        });
      }
    });
  });
});

//Validação dos dados inceridos no formulário
const form = document.getElementById('formulario');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const erros = document.querySelectorAll('.error');
      erros.forEach(e => e.remove());
      let valido = true;
      const nome = form.nome.value.trim();
      if (nome === '') {
        mostrarErro(form.nome, 'Por favor, preencha o nome.');
        valido = false;
      }
      const email = form.email.value.trim();
      if (email === '') {
        mostrarErro(form.email, 'Por favor, preencha o email.');
        valido = false;
      } else if (!validarEmail(email)) {
        mostrarErro(form.email, 'Por favor, digite um email válido.');
        valido = false;
      }
      const mensagem = form.mensagem.value.trim();
      if (mensagem === '') {
        mostrarErro(form.mensagem, 'Por favor, escreva uma mensagem.');
        valido = false;
      }
      if (valido) {
        alert('Formulário enviado com sucesso!');
        form.reset();
      }
    });
    function mostrarErro(elemento, mensagem) {
      const erro = document.createElement('div');
      erro.classList.add('error');
      erro.textContent = mensagem;
      elemento.insertAdjacentElement('afterend', erro);
    }
    function validarEmail(email) {
      //Validar email
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }