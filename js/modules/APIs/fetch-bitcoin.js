export default function initFetchBitcoin() {
  const btcPreco = document.querySelector(".btc-preco");
  const urlBtc = "https://blockchain.info/ticker";

  async function fetchBitcoin() {
    try {
      const bitcoin = await fetch(urlBtc);
      const btcJson = await bitcoin.json();
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin();
}
