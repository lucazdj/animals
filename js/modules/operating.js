export default class Operating {
  constructor(funcionamento, classOpened) {
    this.funcionamento = document.querySelector(funcionamento);
    this.classOpened = classOpened;
  }

  dadosFunc() {
    this.diasSemana = this.funcionamento.dataset.week.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.hour.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 4;
  }

  isOpened() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  activeOpened() {
    if (this.isOpened()) {
      this.funcionamento.classList.add(this.classOpened);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFunc();
      this.dadosAgora();
      this.activeOpened();
    }
  }
}
