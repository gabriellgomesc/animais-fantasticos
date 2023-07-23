export default function initFetchBitcoin() {
  const btcPreco = document.querySelector(".btc-preco");
  const btcText = document.querySelectorAll(".btc-text");
  const urlBtc = "https://blockchain.info/ticker";

  async function fetchBitcoin() {
    try {
      const bitcoin = await fetch(urlBtc);
      const btcJson = await bitcoin.json();
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    } catch (erro) {
      btcPreco.innerText = "Conecte-se à internet";
      console.log(Error(erro));
      btcText.forEach(function (elemento) {
        elemento.parentNode.removeChild(elemento);
      });
    }
  }

  fetchBitcoin();
}
