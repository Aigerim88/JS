
let n = Number(prompt("Введите высоту ёлки:"));
let elka = "";
let vetka1 = "/";
let vetka2 = "\\";

for(i = 1; i <= n; i++) {
    elka = "";
  for (j = i; j < n; j++) {
    elka += " ";
  }
    elka += "/";
  for(k = 0; k < (i*2)-2; k++) {
    elka += " ";
  }
  console.log(elka + vetka2);
}
