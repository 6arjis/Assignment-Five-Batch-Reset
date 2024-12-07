
let popup = document.getElementById('popup');

document.getElementById('btn-switch-blog').addEventListener('click',()=>{
  window.location.href="blog.html";
})


//Switch between donation and transaction start 
document.getElementById('switch-history').addEventListener("click",()=>{
    document.getElementById('switch-donation').style.backgroundColor="lightGrey"
    document.getElementById('switch-history').style.backgroundColor="greenYellow";
    document.getElementById('main-id').classList.add("hidden");
    document.getElementById('transaction-id').classList.remove("hidden");
})

document.getElementById('switch-donation').addEventListener("click",()=>{
    document.getElementById('switch-donation').style.backgroundColor="greenYellow"
    document.getElementById('switch-history').style.backgroundColor="lightGrey";
    document.getElementById('main-id').classList.remove("hidden");
    document.getElementById('transaction-id').classList.add("hidden");
})
//Switch between donation and transaction end 

//Donate noakhali start 
document.getElementById("donate-nhk").addEventListener("click", (event) => {
  event.preventDefault();
  const totalBalance = getTextFieldValueById("total-balance");
  const donateAmount = getInputValueById("donate-amount");
  if(donateAmount < 0){
    alert("Please enter a valid amount");
    return;
  }
  const fundBalance = getTextFieldValueById("fund");

  if(totalBalance < donateAmount ){
    alert("Not Enough Money In Your Account");
    return;
  }

  if(isNaN(donateAmount)){
    alert("Please enter valid amount..!");
    return;
  }

  const newBalance = totalBalance - donateAmount; 
  const newFund = fundBalance + donateAmount;

  document.getElementById('total-balance').innerHTML = `
   <button id="total-balance" class="btn"><img src="assets/coin.png" alt="">${newBalance} BDT</button>
  `
  document.getElementById('fund').innerHTML = `
   <button id="fund" class="btn "><img src="assets/coin.png" alt=""> ${newFund} BDT</button>
  `
  document.getElementById('modal-wrapper').classList.remove('hidden');
  document.getElementById('close-modal-button').addEventListener('click',()=>{
    document.getElementById('modal-wrapper').classList.add('hidden');
  })

  document.getElementById('donate-amount').value = '';
  transactionUpdate(donateAmount,"Flood Relief-2024 in Noakhali,Bangladesh");

});
//Donate noakhali end

//Donate feni start
document.getElementById("donate-feni").addEventListener("click", (event) => {
  event.preventDefault();
  const totalBalance = getTextFieldValueById("total-balance");
  const donateAmount = getInputValueById("input-feni");
  const fundBalance = getTextFieldValueById("fund-feni");

  if(donateAmount < 0){
    alert("Please enter a valid amount");
    return;
  }

  if(totalBalance < donateAmount){
    alert("Not Enough Money IN Your Account");
    return;
  }

  if(isNaN(donateAmount)){
    alert("Please enter valid amount..!");
    return;
  }

  const newBalance = totalBalance - donateAmount; 
  const newFund = fundBalance + donateAmount;


  document.getElementById('total-balance').innerHTML = `
   <button id="total-balance" class="btn"><img src="assets/coin.png" alt="">${newBalance} BDT</button>
  `
  document.getElementById('fund-feni').innerHTML = `
   <button id="fund-feni" class="btn"><img src="assets/coin.png" alt=""> ${newFund} BDT</button>
  `
  document.getElementById('modal-wrapper').classList.remove('hidden');
  document.getElementById('close-modal-button').addEventListener('click',()=>{
    document.getElementById('modal-wrapper').classList.add('hidden');
  })
  document.getElementById('input-feni').value = '';
  transactionUpdate(donateAmount,"Flood Relief-2024 in Feni,Bangladesh");

});
//Donate feni end

//Donate for Quota movement start
document.getElementById("donate-quota").addEventListener("click", (event) => {
  event.preventDefault();
  const totalBalance = getTextFieldValueById("total-balance");
  const donateAmount = getInputValueById("input-quota");
  const fundBalance = getTextFieldValueById("fund-quota");

  if(donateAmount < 0){
    alert("Please enter a valid amount");
    return;
  }

  if(totalBalance < donateAmount){
    alert("Not Enough Money IN Your Account");
    return;
  }

  if(isNaN(donateAmount)){
    alert("Please enter valid amount..!");
    return;
  }

  const newBalance = totalBalance - donateAmount; 
  const newFund = fundBalance + donateAmount;

  document.getElementById('total-balance').innerHTML = `
   <button id="total-balance" class="btn"><img src="assets/coin.png" alt="">${newBalance} BDT</button>
  `
  document.getElementById('fund-quota').innerHTML = `
   <button id="fund-quota" class="btn"><img src="assets/coin.png" alt=""> ${newFund} BDT</button>
  `
  document.getElementById('modal-wrapper').classList.remove('hidden');
  document.getElementById('close-modal-button').addEventListener('click',()=>{
    document.getElementById('modal-wrapper').classList.add('hidden');
  })
  document.getElementById('input-quota').value = '';
  transactionUpdate(donateAmount,"Aid For Injured In The Quota Movement-2024 in Bangladesh");

});
