document.addEventListener("DOMContentLoaded", () => {
   // Contoh 1
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

  // Contoh 2
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

  // Contoh 3
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

  // Contoh 4
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

  // Contoh 5
    const btnLimaStep1 = document.getElementById("btnLima_step-1");
    const showLimaStep1 = document.getElementById("showLima_step-1");
    showLimaStep1.style.display = "none";
    btnLimaStep1.addEventListener("click", () => {
    showLimaStep1.style.display = "block";
    });

    const btnLimaStep2 = document.getElementById("btnLima_step-2");
    const showLimaStep2 = document.getElementById("showLima_step-2");
    showLimaStep2.style.display = "none";
    btnLimaStep2.addEventListener("click", () => {
    showLimaStep2.style.display = "block";
    });

    const btnLimaStep3 = document.getElementById("btnLima_step-3");
    const showLimaStep3 = document.getElementById("showLima_step-3");
    showLimaStep3.style.display = "none";
    btnLimaStep3.addEventListener("click", () => {
    showLimaStep3.style.display = "block";
    });

  // Contoh 6
    const btnEnamStep1 = document.getElementById("btnEnam_step-1");
    const showEnamStep1 = document.getElementById("showEnam_step-1");
    showEnamStep1.style.display = "none";
    btnEnamStep1.addEventListener("click", () => {
    showEnamStep1.style.display = "block";
    });

    const btnEnamStep2 = document.getElementById("btnEnam_step-2");
    const showEnamStep2 = document.getElementById("showEnam_step-2");
    showEnamStep2.style.display = "none";
    btnEnamStep2.addEventListener("click", () => {
    showEnamStep2.style.display = "block";
    });

    const btnEnamStep3 = document.getElementById("btnEnam_step-3");
    const showEnamStep3 = document.getElementById("showEnam_step-3");
    showEnamStep3.style.display = "none";
    btnEnamStep3.addEventListener("click", () => {
    showEnamStep3.style.display = "block";
    });
})

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
    nextSoal[3].addEventListener("click", nextSlide);
    nextSoal[4].addEventListener("click", nextSlide);

    // Soal 1
    const userAnswerSatu = document.querySelectorAll(".user-answer-1");
    const checkSatu = document.getElementById("check-1");
    const messageSatu = document.getElementById("message-1");
    const answerSatu = ["11", "l", "l", "r", "2", "l", "3.14", "11", "2", "l", "3.14", "121", "l", "379.94"];

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

        if (wrong === answerSatu.length) {
            messageSatu.innerHTML = "<b>Semua jawaban salah</b>";
            messageSatu.style.color = "red";
        } else if (wrong > 0) {
            messageSatu.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageSatu.style.color = "red";
        } else {
            messageSatu.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, luas lingkaran tersebut adalah <b>379.94 cm<sup>2</sup></b>";
            messageSatu.style.color = "black";
            nextSoal[0].classList.remove("disabled");
        }
    });

    // Soal 2
    const userAnswerDua = document.querySelectorAll(".user-answer-2");
    const checkDua = document.getElementById("check-2");
    const messageDua = document.getElementById("message-2");
    const answerDua = ["7", "l", "l", "1", "d", "2", "4", "l", "1", "22", "7", "2", "4", "7", "l", "1", "22", "7", "7", "4", "7", "l", "1", "22", "7", "4", "l", "1", "154", "4", "l", "38.5"];

    checkDua.addEventListener("click", () => {
        let wrong = 0;
        answerDua.forEach((item, index) => {
            if (userAnswerDua[index].value.toLowerCase() != item) {
                userAnswerDua[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerDua[index].style.border = "2px solid green";
            }
        });

        if (wrong === answerDua.length) {
            messageDua.innerHTML = "<b>Semua jawaban salah</b>";
            messageDua.style.color = "red";
        } else if (wrong > 0) {
            messageDua.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageDua.style.color = "red";
        } else {
            messageDua.innerHTML = "<b>Jawaban benar semua</b> <br> Jadi, luas lingkaran tersebut adalah <b>38.5 cm<sup>2</sup></b>";
            messageDua.style.color = "black";
            nextSoal[1].classList.remove("disabled");
        }
    });

    // Soal 3
    const userAnswerTiga = document.querySelectorAll(".user-answer-3");
    const checkTiga = document.getElementById("check-3");
    const messageTiga = document.getElementById("message-3");
    const answeTiga = ["20", "l", "l", "1", "d", "2", "4", "l", "1", "3.14", "20", "2", "4", "l", "1", "3.14", "20", "20", "4", "l", "1", "3.14", "400", "4", "l", "1", "1256", "4", "l", "314"];

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

        if (wrong === answeTiga.length) {
            messageTiga.innerHTML = "<b>Semua jawaban salah</b>";
            messageTiga.style.color = "red";
        } else if (wrong > 0) {
            messageTiga.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageTiga.style.color = "red";
        } else {
            messageTiga.innerHTML = "<b>Jawaban benar semua</b> <br> Jadi, luas lingkaran tersebut adalah <b>314 cm<sup>2</sup></b>";
            messageTiga.style.color = "black";
            nextSoal[2].classList.remove("disabled");
        }
    });

    // Soal 4
    const userAnswerEmpat = document.querySelectorAll(".user-answer-4");
    const checkEmpat = document.getElementById("check-4");
    const messageEmpat = document.getElementById("message-4");
    const answeEmpat = ["21", "l", "l", "r", "2", "l", "22", "21", "2", "7", "l", "22", "21", "21", "7", "l", "22", "3", "21", "l", "1386"];

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

        if (wrong === answeEmpat.length) {
            messageEmpat.innerHTML = "<b>Semua jawaban salah</b>";
            messageEmpat.style.color = "red";
        } else if (wrong > 0) {
            messageEmpat.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageEmpat.style.color = "red";
        } else {
            messageEmpat.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, luas lingkaran tersebut adalah <b>1386 cm<sup>2</sup></b>";
            messageEmpat.style.color = "black";
            nextSoal[3].classList.remove("disabled");
        }
    });

    // Soal 5
    const userAnswerLima = document.querySelectorAll(".user-answer-5");
    const checkLima = document.getElementById("check-5");
    const messageLima = document.getElementById("message-5");
    const answeLima = ["5", "l", "l", "r", "2", "l", "3.14", "5", "2", "l", "3.14", "5", "5", "l", "3.14", "25", "l", "78.5"];

    checkLima.addEventListener("click", () => {
        let wrong = 0;
        answeLima.forEach((item, index) => {
            if (userAnswerLima[index].value.toLowerCase() != item) {
                userAnswerLima[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerLima[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeLima.length) {
            messageLima.innerHTML = "<b>Semua jawaban salah</b>";
            messageLima.style.color = "red";
        } else if (wrong > 0) {
            messageLima.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageLima.style.color = "red";
        } else {
            messageLima.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, luas taman yang ditanami rumput gajah adalah <b>78.5 m<sup>2</sup></b>";
            messageLima.style.color = "black";
            nextSoal[4].classList.remove("disabled");
        }
    });

    // Soal 6
    const userAnswerEnam = document.querySelectorAll(".user-answer-6");
    const checkEnam = document.getElementById("check-6");
    const messageEnam = document.getElementById("message-6");
    const answeEnam = ["1256", "3.14", "r", "l", "r", "2", "1256", "3.14", "r", "2", "r", "2", "1256", "3.14", "r", "2", "400", "r", "400", "r", "20"];

    checkEnam.addEventListener("click", () => {
        let wrong = 0;
        answeEnam.forEach((item, index) => {
            if (userAnswerEnam[index].value.toLowerCase() != item) {
                userAnswerEnam[index].style.border = "2px solid red";
                wrong++;
            } else {
                userAnswerEnam[index].style.border = "2px solid green";
            }
        });

        if (wrong === answeEnam.length) {
            messageEnam.innerHTML = "<b>Semua jawaban salah</b>";
            messageEnam.style.color = "red";
        } else if (wrong > 0) {
            messageEnam.innerHTML = "<b>Masih ada jawaban yang salah</b>";
            messageEnam.style.color = "red";
        } else {
            messageEnam.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, panjang jari - jari meja tersebut adalah <b> 20 cm</b> ";
            messageEnam.style.color = "black";
        }
    });
});