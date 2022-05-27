export default function initOperating() {
  const funcionamento = document.querySelector('[data-week]');
  const diasSemana = funcionamento.dataset.week.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.hour.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('opened');
  }
}
