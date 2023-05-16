const keliling = document.querySelectorAll(".keliling");
const perbandingan = document.querySelectorAll(".perbandingan");
const cekAnswer = document.getElementById("check-answer");
const message = document.getElementById('message');
const diameter = [2, 3, 4, 5];

const nextMateri3 = document.getElementById('next-materi-3');
nextMateri3.style.display = 'none';

cekAnswer.addEventListener("click", () => {
    wrong1 = 0;
    wrong2 = 0;
    diameter.forEach((value, index) => {
        const hitungKeliling = 3.14 * value;

        const hasil = keliling[index].value / value;

        if (keliling[index].value != hitungKeliling.toFixed(2)) {
            keliling[index].style.border = "2px solid red";
            wrong1++;
        } else {
            keliling[index].style.border = "2px solid green";
        }

        if (perbandingan[index].value != hasil.toFixed(2)) {
            perbandingan[index].style.border = "2px solid red";
            wrong2++;
        } else {
            perbandingan[index].style.border = "2px solid green";
        }
    });

    console.log(wrong1);

    if (wrong1 === 4 && wrong2 === 4) {
        message.innerHTML = `
        <div class="card bg-danger">
            <div class="card-body">
                <span class="text-white fw-bold fs-5">Semua jawaban salah</span>
            </div>
        </div>`;
    }
    else if (wrong1 > 0 || wrong2 > 0) {
        message.innerHTML = `
        <div class="card">
            <div class="card-body bg-danger">
                <span class="text-white fw-bold fs-5">Masih ada jawaban yang salah</span>
            </div>
        </div>`;
    } else {
        message.innerHTML = `
        <div class="card">
            <div class="card-body bg-success">
                <span class="text-white fw-bold fs-5">Jawaban benar semua</span>
            </div>
        </div>`;
    }
});

const checkAnswer2 = document.getElementById('check-answer-2');
const answerUser = document.querySelectorAll('.answer');
const answer2 = ["3.14", "3.14", "sama"];
const message2 = document.getElementById('message-2');

checkAnswer2.addEventListener('click', () => {
    wrong = 0;
    answer2.forEach((value, index) => {
        if (answerUser[index].value.toLowerCase() !== value) {
            answerUser[index].style.border = "2px solid red";
            wrong++;
        } else {
            answerUser[index].style.border = "2px solid green";
        }
    });

    if (wrong === 3) {
        message2.innerHTML = `
        <div class="card">
            <div class="card-body bg-danger">
                <span class="text-white fw-bold fs-5">Semua jawaban salah</span>
            </div>
        </div>`;
    }
    else if (wrong > 0) {
        message2.innerHTML = `
        <div class="card">
            <div class="card-body bg-danger">
                <span class="text-white fw-bold fs-5">Masih ada jawaban yang salah</span>
            </div>
        </div>`;
    } else {
        message2.innerHTML = `
        <div class="card">
            <div class="card-body bg-success">
                <span class="text-white fw-bold fs-5">Jawaban benar semua</span>
            </div>
        </div>`;
        nextMateri3.style.display = 'block';
    }
});


document.addEventListener("DOMContentLoaded", () => {
// Contoh No 1
const btnSatuStep1 = document.getElementById("btnSatu_step-1");
const showSatuStep1 = document.getElementById("showSatu_step-1");
showSatuStep1.style.display = "none";
btnSatuStep1.addEventListener("click", () => {
    showSatuStep1.style.display = "block";
});

const btnSatuStep2 = document.getElementById("btnSatu_step-2");
const showSatuStep2 = document.getElementById("showSatu_step-2");
showSatuStep2.style.display = "none";
btnSatuStep2.addEventListener("click", () => {
    showSatuStep2.style.display = "block";
});

const btnSatuStep3 = document.getElementById("btnSatu_step-3");
const showSatuStep3 = document.getElementById("showSatu_step-3");
showSatuStep3.style.display = "none";
btnSatuStep3.addEventListener("click", () => {
    showSatuStep3.style.display = "block";
});

// Contoh No 2
const btnDuaStep1 = document.getElementById("btnDua_step-1");
const showDuaStep1 = document.getElementById("showDua_step-1");
showDuaStep1.style.display = "none";
btnDuaStep1.addEventListener("click", () => {
    showDuaStep1.style.display = "block";
});

const btnDuaStep2 = document.getElementById("btnDua_step-2");
const showDuaStep2 = document.getElementById("showDua_step-2");
showDuaStep2.style.display = "none";
btnDuaStep2.addEventListener("click", () => {
    showDuaStep2.style.display = "block";
});

const btnDuaStep3 = document.getElementById("btnDua_step-3");
const showDuaStep3 = document.getElementById("showDua_step-3");
showDuaStep3.style.display = "none";
btnDuaStep3.addEventListener("click", () => {
    showDuaStep3.style.display = "block";
});

  // Contoh No 3
const btnTigaStep1 = document.getElementById("btnTiga_step-1");
const showTigaStep1 = document.getElementById("showTiga_step-1");
showTigaStep1.style.display = "none";
btnTigaStep1.addEventListener("click", () => {
    showTigaStep1.style.display = "block";
});

const btnTigaStep2 = document.getElementById("btnTiga_step-2");
const showTigaStep2 = document.getElementById("showTiga_step-2");
showTigaStep2.style.display = "none";
btnTigaStep2.addEventListener("click", () => {
    showTigaStep2.style.display = "block";
});

const btnTigaStep3 = document.getElementById("btnTiga_step-3");
const showTigaStep3 = document.getElementById("showTiga_step-3");
showTigaStep3.style.display = "none";
btnTigaStep3.addEventListener("click", () => {
    showTigaStep3.style.display = "block";
});

  // Contoh No 4
const btnEmpatStep1 = document.getElementById("btnEmpat_step-1");
const showEmpatStep1 = document.getElementById("showEmpat_step-1");
showEmpatStep1.style.display = "none";
btnEmpatStep1.addEventListener("click", () => {
    showEmpatStep1.style.display = "block";
});

const btnEmpatStep2 = document.getElementById("btnEmpat_step-2");
const showEmpatStep2 = document.getElementById("showEmpat_step-2");
showEmpatStep2.style.display = "none";
btnEmpatStep2.addEventListener("click", () => {
    showEmpatStep2.style.display = "block";
});

const btnEmpatStep3 = document.getElementById("btnEmpat_step-3");
const showEmpatStep3 = document.getElementById("showEmpat_step-3");
showEmpatStep3.style.display = "none";
btnEmpatStep3.addEventListener("click", () => {
    showEmpatStep3.style.display = "block";
});
});