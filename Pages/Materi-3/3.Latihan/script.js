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
            messageDua.innerHTML = "<b>Jawaban benar semua</b> <br> Jadi, luas lingkaran tersebut adalah <b>38.5 cm</b>";
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
            messageTiga.innerHTML = "<b>Jawaban benar semua</b> <br> Jadi, luas lingkaran tersebut adalah <b>314 cm</b>";
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
            messageEmpat.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, luas lingkaran tersebut adalah <b>1386 cm</b>";
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
            messageLima.innerHTML = "<b>Jawaban benar semua</b><br> Jadi, luas taman yang ditanami rumput gajah adalah <b>78.5 m</b>";
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