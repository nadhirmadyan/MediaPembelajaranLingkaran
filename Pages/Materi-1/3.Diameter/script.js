document.addEventListener("DOMContentLoaded", () => {
    // mengambil element class check di html, untuk mengecek jawaban
    const check = document.querySelector(".check");

    // Mengambil semua hasil inputan jawaban yang ada pada class answer
    let answerUser = document.querySelectorAll(".answer");
    const answer = [
        "dua",
        "xy",
    ];
    const message = document.querySelector("#message");

    // proses cek jawaban
    check.addEventListener("click", () => {
        wrong = 0;

        answer.forEach((item, index) => {
            if (answerUser[index].value.toLowerCase() !== item) {
                answerUser[index].style.border = "3px solid red";
                wrong++;
            } else {
                answerUser[index].style.border = "3px solid green";
            }
        });

        // proses setelah cek jawaban, untuk menampilkan pesan
        if (wrong === 2) {
            message.innerHTML = `
        <div class="card bg-danger">
            <div class="card-body">
                <span class="text-white"><b>Semua jawaban salah</b></span>
            </div>
        </div>`;
        }
        else if (wrong > 0) {
            message.innerHTML = `
        <div class="card bg-danger">
            <div class="card-body">
                <span class="text-white"><b>Masih ada jawaban yang salah</b></span>
            </div>
        </div>`;
        } else {
            message.innerHTML = `
        <div class="card bg-success">
            <div class="card-body">
                <span class="text-white"><b>Jawaban benar semua</b></span>
            </div>
        </div>`;
        }
    });
});