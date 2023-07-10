function findSmallerNumber(num1, num2){
    if (num1 < num2){
        return num1;
    }else{
        return num2;
    }
}

var result = findSmallerNumber(10, 5);
console.log(result);
var result = findSmallerNumber(-3, 2);
console.log(result);

//////////////////////////////////////////////////////

function power(base, exponent){
    return Math.pow(base, exponent);
}

var result = power(2, 3);
console.log(result);
var result = power(3, 4);
console.log(result);

//////////////////////////////////////////////////////

const sendSMS = (phoneNumber, message) => {
    console.log(`Отправка SMS на номер ${phoneNumber}: "${message}".`);
    console.log('148');
    console.log('Ха, малоумный, теперь твои деньги пойдут на фонд помощи безногим ветеранам франко-мафиозного сражения. Адьос.');
};

const phoneNumber = "+996558999338";
const message = "Скажи код с обратной стороны карты.";
sendSMS(phoneNumber, message);

//////////////////////////////////////////////////////

const bankAccount = {
    accountNumber: "1234567890",
    balance: 1000,

    sendTransfer: function(accountNumber, amount) {
        if (this.balance >= amount) {
            console.log(`С вашего счета были сняты средства ${amount} и переведены на счет ${accountNumber}.`);
            this.balance -= amount;
            console.log(`Ваш баланс: ${this.balance}.`);
        } else {
            console.log("Недостаточно средств для выполнения перевода.");
        }
    }
};

const recipientAccountNumber = "9876543210";
const transferAmount = 1000;
bankAccount.sendTransfer(recipientAccountNumber, transferAmount);