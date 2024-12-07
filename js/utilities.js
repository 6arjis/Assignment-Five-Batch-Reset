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
div.classList.add('my-3');
div.innerHTML = `
 <p><b> ${amount}TK has been donated for ${event} </b> </p>
 <p id="transaction-para"> ${new Date()} </p>
`
document.getElementById('transaction-id').appendChild(div);
}


