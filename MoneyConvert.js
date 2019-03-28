function moneyConvert()
{
    let money = parseInt(document.getElementById('num').value);

    document.getElementById("op1").value === 'USD' ?
        document.getElementById("op2").value === 'VND' ?
            money = money*23000 : ""
        :
        document.getElementById("op2").value === 'USD' ?
            money = money/23000 : "";
    alert(money);
}