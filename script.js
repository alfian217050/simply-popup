alert("Selamat datang!");
var lagi = true;

while (lagi) {
  var nama = prompt("Masukkan nama : ");
  if (nama) {
    alert("Halo, " + nama + "!");
  } else if (nama == null) {
    alert("Peringatan: Anda tidak memasukkan nama.");
  } else {
    alert("Anda harus memasukkan nama!");
  }
  lagi = confirm("Ingin mencoba lagi?");
}
alert("Thankyou!");
