var tanya = true;
while (tanya === true) {
// menangkap pilihan player
var suwit = prompt("Pilih : gajah, semut, orang");

// menangkap pilihan komputer
// membangkitkan bilangan random
var computer = Math.random();

if(computer < 0.34) {
    computer = "gajah";
} else if(computer >= 0.34 && computer < 0.67) {
    computer = "orang";
} else {
    computer = "semut";
}
console.log(computer);


// menentukan rules
var hasil ='';
if(suwit == computer) {
    hasil ="SERI!";
} else if(suwit == "gajah") {
//    if(computer == 'orang') {
//     hasil = "MENANG!";
//    } else {
//     hasil = 'KALAH!';
//    }
hasil = ( computer == 'orang') ? "MENANG!" : "KALAH!";
} else if(suwit == "orang") {
    hasil = (computer == 'gajah') ? "KALAH!" : "MENANG!"; 
} else if (suwit == 'semut') {
    hasil = (computer == 'orang') ? 'KALAH' : 'MENANG!';
} else {
    hasil = "Memasukkan pilihan yang salah";
}

// tampilkan hasil
alert ('Kamu memilih : ' + suwit +' dan komputer memilih : '+ computer + '\nMaka hasilnya: kamu ' + hasil );

tanya = confirm('Lagi?');
}

alert('Terimakasih sudah bermain!');

