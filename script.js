const inputNama = document.querySelector("#pNama");
const inputAnime = document.querySelector("#pAnime");
const inputBirthday = document.querySelector("#pBirthday");
const inputDeskripsi = document.querySelector("#pDeskripsi");
const inputGambar = document.querySelector("#pGambar");


const previewNama = document.querySelector("#preview-nama");
const previewAnime = document.querySelector("#preview-anime");
const previewBirthday = document.querySelector("#preview-birthday");
const previewDeskripsi = document.querySelector("#preview-deskripsi");
const previewGambar = document.querySelector("#preview-gambar");

function updatePreview() {
  previewNama.textContent = inputNama.value || "Nama Karakter";
  previewAnime.textContent = inputAnime.value || "Asal Anime";
  previewBirthday.textContent = inputBirthday.value || "Tanggal Lahir Karakter";
  previewDeskripsi.textContent =
  inputDeskripsi.value || "Deskripsi karakter akan muncul di sini.";

  if (inputGambar.value.trim() === "") {
    previewGambar.src =
      "Assets/akiyamaMizuki (2).jpg";
  } else {
    previewGambar.src = inputGambar.value;
  }
};

[inputNama, inputAnime, inputDeskripsi, inputGambar,inputBirthday].forEach((el) => {
  el.addEventListener("input", updatePreview);
});

previewNama.addEventListener("click", function () {
  const url = inputGambar.value.trim();
  if (url) {
    window.open(url, "_blank");
  } else {
    alert("Masukkan URL gambar terlebih dahulu!");
  }
});