export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcValue = document.querySelector('.btc-value');
      btcValue.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    });
}
