function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNum = parseFloat(inputValue);
  return inputValueNum;
}

function getTextFieldValueById(id) {
  const inputValue = document.getElementById(id).innerText;
  const inputValueNum = parseFloat(inputValue);
  return inputValueNum;
}

function transactionUpdate(amount,event) {
const div = document.createElement('div');
div.classList.add('transaction');
div.innerHTML = `
 <p><b> ${amount} has been donated for ${event} </b> </p>
 <p> ${new Date()} </p>
`
document.getElementById('transaction-id').appendChild(div);
}

function openPopUp(){
    popup.classList.add('open-popup');
}
function closePopUp(){
    popup.classList.remove('open-popup');
}
