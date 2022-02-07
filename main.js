let number = parseInt(prompt("Mời nhập số cần đảo ngược"));
let b = 0;


while (number !== 0) {
    b = b * 10 + number % 10;
    number = (number - number % 10) / 10;
}
document.write(b);