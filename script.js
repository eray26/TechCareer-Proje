// HTML elementlerini seçtiğimiz kısım burası
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

// butonların böümü
form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

// sıfırlama butonuna tıklandığı zaman sıfırlanması için oluşturduğum fonskiyon
function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value); // Formdan ağırlık değerini alır ve sayı tipine çevirir
  const height = parseFloat(form.height.value); // Formdan boy değerini alır ve sayı tipine çevirir

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("lütfen boyunuzu ve kilonuzu giriniz"); // Eğer değerler geçerli değilse bir değer girilmediyse uyarı verir
    return;
  }

  const heightInMeters = height / 100; //  Boyu santimetreden metreye çevirir
  const bmi = weight / Math.pow(heightInMeters, 2); 
  const desc = interpretBMI(bmi); 

  // çıkan sonuca göre  zayıf veya obez olup olmadığımızı söylüyor
  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `Endeksiniz <strong>${desc}</strong>`;
}

// sonuca göre verilecek değer fonksiyonu
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "zayıf";
  } else if (bmi < 25) {
    return "normal";
  } else if (bmi < 30) {
    return "kilolu";
  } else {
    return "obez";
  }
}