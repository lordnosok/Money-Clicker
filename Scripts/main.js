var balanceId = document.getElementById("balanceid");
var buttonCoinId = document.getElementById("buttoncoin");
var counter = 0;

buttonCoinId.addEventListener("click", function() {
    counter++;
    balanceId.textContent=counter;
});