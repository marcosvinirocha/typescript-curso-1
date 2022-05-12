import { NecociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes.view.js';

const controller = new NecociacaoController();

const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error(
    'Não foi pessivel inicializar a aplicação. verifique se o form existe'
  );
}
