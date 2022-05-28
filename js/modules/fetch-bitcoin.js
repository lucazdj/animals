export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcValue = document.querySelector(target);
      btcValue.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    });
}
