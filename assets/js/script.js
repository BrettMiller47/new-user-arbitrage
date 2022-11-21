function myFunction() {

  let btcAddressEl = document.getElementById("btc");
  let address = btcAddressEl.textContent; 

  navigator.clipboard.writeText(address).then(() => {
    document.getElementById('btcCopied').style.visibility = "visible";
    setTimeout(() => {
      document.getElementById('btcCopied').style.visibility = "hidden";
    }, 4000);
  });
}