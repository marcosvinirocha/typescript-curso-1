import { NecociacaoController } from './controllers/negociacao-controller.js';

const controller = new NecociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  controller.adiciona();
});
