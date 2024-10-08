let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const values = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
]

const cash = document.getElementById('cash');
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

const reset = () => {
  cash.value = '';
  changeDue.innerHTML = ``;
}

const giveChange = () => {
  if (cash.value === '' || parseFloat(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
  } else {
    changeValidation(cash);
  }
}

const changeValidation = (cash) => {
  const valueForMoney = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].reverse();
  const cashInDrawer = cid.slice().map(val => val[1]).reverse();

}
purchaseBtn.addEventListener('click', giveChange);
