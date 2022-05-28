import AnimateNumbers from './animate-numbers.js';

export default function fetchAnimals(url, target) {
  const numbers = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}<span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbers.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers('[data-number]', '.numbers', 'active');
    animateNumbers.init();
  }

  async function buildAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch {
      return false;
    }
    return true;
  }

  return buildAnimals();
}
