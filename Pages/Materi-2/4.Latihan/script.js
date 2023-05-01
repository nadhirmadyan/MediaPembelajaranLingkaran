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
            messageEmpat.innerHTML = "<b><b>Jawaban benar semua</b><br> Jadi, jari - jari lingkaran tersebut adalah <b>35.03 cm.</b></b>";
            messageEmpat.style.color = "black";
        }
    });
});