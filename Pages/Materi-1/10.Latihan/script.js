document.addEventListener("DOMContentLoaded", () => {
    // mengambil element class check di html, untuk mengecek jawaban
    const check = document.querySelector(".check");

    // Mengambil semua hasil inputan jawaban yang ada pada class answer
    let answerUser = document.querySelectorAll(".answer");
    const answer = [
        "sama",
        "jari-jari",
        "diameter",
        "tali busur",
        "busur",
        "apotema",
        "juring",
        "tembereng",
        "titik pusat",
        "8",
    ];
    const message = document.querySelector("#message");

    // proses cek jawaban
    check.addEventListener("click", () => {
        wrong = 0;

        answer.forEach((item, index) => {
            if (answerUser[index].value.toLowerCase() !== item) {
                answerUser[index].style.border = "2px solid red";
                wrong++;
            } else {
                answerUser[index].style.border = "2px solid green";
            }
        });

        // proses setelah cek jawaban, untuk menampilkan pesan
        if (wrong === 10) {
            message.innerHTML = `
        <div class="card">
            <div class="card-body">
                <span class="text-danger">Semua jawaban salah</span>
            </div>
        </div>`;
        }
        else if (wrong > 0) {
            message.innerHTML = `
        <div class="card">
            <div class="card-body">
                <span class="text-danger">Masih ada jawaban yang salah</span>
            </div>
        </div>`;
        } else {
            message.innerHTML = `
        <div class="card">
            <div class="card-body">
                <span class="text-success">Jawaban benar semua</span>
            </div>
        </div>`;
        }
    });
});