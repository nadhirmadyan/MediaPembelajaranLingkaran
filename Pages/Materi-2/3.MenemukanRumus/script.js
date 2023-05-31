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


document.addEventListener("DOMContentLoaded", () => {
    let content1 = document.querySelector("#content-1");
    let nextSoal = document.querySelectorAll(".nextSoal");
    let tabContent = document.querySelectorAll(".tab-content");

    let currentTab = 1;

    content1.style.display = "block";

    function nextSlide() {
        tabContent[currentTab - 1].style.display = "none";
        currentTab++;
        let tab = document.querySelector("#content-" + currentTab);
        tab.style.display = "block";
    }

    nextSoal[0].addEventListener("click", nextSlide);
    nextSoal[1].addEventListener("click", nextSlide);
    nextSoal[2].addEventListener("click", nextSlide);

    // Soal 1
    const userAnswerSatu = document.querySelectorAll(".user-answer-1");
    const checkSatu = document.getElementById("check-1");
    const messageSatu = document.getElementById("message-1");
    const answerSatu = ["17", "k", "k", "2", "r", "k", "2", "3.14", "17", "k", "6.28", "17", "k", "106.76"];

    checkSatu.addEventListener("click", () => {
        let wrong = 0;
        answerSatu.forEach((item, index) => {
            if (userAnswerSatu[index].value.toLowerCase() != item) {
                userAnswerSatu[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerSatu[index].style.border = "2px solid green";
            }
        });

        if (wrong === 14) {
            messageSatu.innerHTML = "<b>Semua jawaban salah</b>";
            messageSatu.style.color = "red";
        } else if (wrong > 0) {
            messageSatu.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageSatu.style.color = "red";
        } else {
            messageSatu.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, keliling lingkaran tersebut adalah <b>106.76 cm.</b>";
            messageSatu.style.color = "black";
            nextSoal[0].classList.remove("disabled");
        }
    });

    // Soal 2
    const userAnswerDua = document.querySelectorAll(".user-answer-2");
    const checkDua = document.getElementById("check-2");
    const messageDua = document.getElementById("message-2");
    const answeDua = ["7", "k" , "k" , "d" , "k", "22", "7", "7", "k" , "22", "1", "k" , "22"];

    checkDua.addEventListener("click", () => {
        let wrong = 0;
        answeDua.forEach((item, index) => {
            if (userAnswerDua[index].value.toLowerCase() != item) {
                userAnswerDua[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerDua[index].style.border = "2px solid green";
            }
        });

        if (wrong === 13) {
            messageDua.innerHTML = "<b>Semua jawaban salah</b>";
            messageDua.style.color = "red";
        } else if (wrong > 0) {
            messageDua.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageDua.style.color = "red";
        } else {
            messageDua.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, keliling lingkaran tersebut adalah <b>22 cm.</b>";
            messageDua.style.color = "black";
            nextSoal[1].classList.remove("disabled");
        }
    });

    // Soal 3
    const userAnswerTiga = document.querySelectorAll(".user-answer-3");
    const checkTiga = document.getElementById("check-3");
    const messageTiga = document.getElementById("message-3");
    const answeTiga = ["314", "d", "k", "d", "314", "3.14", "d", "d", "314", "3.14", "d", "100"];

    checkTiga.addEventListener("click", () => {
        let wrong = 0;
        answeTiga.forEach((item, index) => {
            if (userAnswerTiga[index].value.toLowerCase() != item) {
                userAnswerTiga[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerTiga[index].style.border = "2px solid green";
            }
        });

        if (wrong === 12) {
            messageTiga.innerHTML = "<b>Semua jawaban salah</b>";
            messageTiga.style.color = "red";
        } else if (wrong > 0) {
            messageTiga.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageTiga.style.color = "red";
        } else {
            messageTiga.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, diameter lingkaran tersebut adalah <b>100 cm.</b>";
            messageTiga.style.color = "black";
            nextSoal[2].classList.remove("disabled");
        }
    });

    // Soal 4
    const userAnswerEmpat = document.querySelectorAll(".user-answer-4");
    const checkEmpat = document.getElementById("check-4");
    const messageEmpat = document.getElementById("message-4");
    const answeEmpat = ["220", "r", "k", "2", "r", "220", "2", "3.14", "r", "220", "6.28", "r", "r", "220", "6.28", "r", "35.03"];

    checkEmpat.addEventListener("click", () => {
        let wrong = 0;
        answeEmpat.forEach((item, index) => {
            if (userAnswerEmpat[index].value.toLowerCase() != item) {
                userAnswerEmpat[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerEmpat[index].style.border = "2px solid green";
            }
        });

        if (wrong === 17) {
            messageEmpat.innerHTML = "<b>Semua jawaban salah</b>";
            messageEmpat.style.color = "red";
        } else if (wrong > 0) {
            messageEmpat.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageEmpat.style.color = "red";
        } else {
            messageEmpat.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, jari - jari lingkaran tersebut adalah <b>35.03 cm.</b>";
            messageEmpat.style.color = "black";
        }
    });
});