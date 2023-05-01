const getChapClass = (path) => {
    return this.location.pathname.substr(7, 8) === path ? "show" : "";
};

const getCollapsed = (path) => {
    return this.location.pathname.substr(7, 8) !== path ? "collapsed" : "";
};

const getChapChild = (path) => {
    return this.location.pathname.substring(7) === path ? "course-active" : "";
};

console.log(this.location.pathname.substring(7))

document.querySelector(".list-course").innerHTML = `
<div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button ${getCollapsed(
            "Materi-1"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Unsur - Unsur Lingkaran
        </button>
    </h2>

    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ${getChapClass(
        "Materi-1"
        )}" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/1.Pendahuluan/index.html" class="list-course-child isDisabled sub-1-0 ${getChapChild(
                "Materi-1/1.Pendahuluan/index.html"
                )}">Pendahuluan</a>
            </div>
        
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/2.Titik-Pusat/index.html" class="list-course-child isDisabled sub-1-1 ${getChapChild(
                "Materi-1/2.Titik-Pusat/index.html"
                )}">Titik Pusat</a>
            </div>
        
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/3.Diameter/index.html" class="list-course-child isDisabled sub-1-2 ${getChapChild(
                "Materi-1/3.Diameter/index.html"
                )}">Diameter</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/4.Jari-jari/index.html" class="list-course-child isDisabled sub-1-3 ${getChapChild(
                "Materi-1/4.Jari-jari/index.html"
                )}">Jari - Jari</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/5.Busur/index.html" class="list-course-child isDisabled sub-1-4 ${getChapChild(
                "Materi-1/5.Busur/index.html"
                )}">Busur</a>
            </div>
        
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/6.Tali-Busur/index.html" class="list-course-child isDisabled sub-1-5 ${getChapChild(
                "Materi-1/6.Tali-Busur/index.html"
                )}">Tali Busur</a>
            </div>
            
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/7.Apotema/index.html" class="list-course-child isDisabled sub-1-6 ${getChapChild(
                "Materi-1/7.Apotema/index.html"
                )}">Apotema</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/8.Tembereng/index.html" class="list-course-child isDisabled sub-1-7 ${getChapChild(
                "Materi-1/8.Tembereng/index.html"
                )}">Tembereng</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/9.Juring/index.html" class="list-course-child isDisabled sub-1-8 ${getChapChild(
                "Materi-1/9.Juring/index.html"
                )}">Juring</a>
            </div>
            
            <div class="list-course mb-3">
            <a href="/Pages/Materi-1/10.Latihan/index.html" class="list-course-child isDisabled sub-1-9 ${getChapChild(
                "Materi-1/10.Latihan/index.html"
                )}">Latihan 1</a>
            </div>

            <div class="list-course">
            <a href="/Pages/Materi-1/11.Kuis1/index.html" class="list-course-child isDisabled sub-1-10 ${getChapChild(
                "Materi-1/11.Kuis1/index.html"
                )}">Kuis 1</a>
            </div>
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button ${getCollapsed(
            "Materi-2"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Keliling Lingkaran
        </button>
    </h2>

    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ${getChapClass(
        "Materi-2"
        )}" aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">
            <div class="list-course mb-3">
            <a href="/Pages/Materi-2/1.Pendahuluan/index.html" class="list-course-child isDisabled sub-2-0 ${getChapChild(
                "Materi-2/1.Pendahuluan/index.html"
                )}">Pendahuluan</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-2/2.MengukurKeliling/index.html" class="list-course-child isDisabled sub-2-1 ${getChapChild(
                "Materi-2/2.MengukurKeliling/index.html"
                )}">Mengukur Keliling Suatu Lingkaran</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-2/3.MenemukanRumus/index.html" class="list-course-child isDisabled sub-2-2 ${getChapChild(
                "Materi-2/3.MenemukanRumus/index.html"
                )}">Menemukan Rumus Keliling Lingkaran</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-2/4.Latihan/index.html" class="list-course-child isDisabled sub-2-3 ${getChapChild(
                "Materi-2/4.Latihan/index.html"
                )}">Latihan 2</a>
            </div>

            <div class="list-course">
            <a href="/Pages/Materi-2/5.Kuis2/index.html" class="list-course-child isDisabled sub-2-4 ${getChapChild(
                "Materi-2/5.Kuis2/index.html"
                )}">Kuis 2</a>
            </div>
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button ${getCollapsed(
            "Materi-3"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Luas Lingkaran
        </button>
    </h2>
    
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse ${getChapClass(
        "Materi-3"
        )}" aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
            <div class="list-course mb-3">
            <a href="/Pages/Materi-3/1.Pendahuluan/index.html" class="list-course-child isDisabled sub-3-0 ${getChapChild(
                "Materi-3/1.Pendahuluan/index.html"
                )}">Pendahuluan</a>
            </div>
            
            <div class="list-course mb-3">
            <a href="/Pages/Materi-3/2.MenentukanRumusLuas/index.html" class="list-course-child isDisabled sub-3-1 ${getChapChild(
                "Materi-3/2.MenentukanRumusLuas/index.html"
                )}">Menentukan Rumus Luas Lingkaran</a>
            </div>

            <div class="list-course mb-3">
            <a href="/Pages/Materi-3/3.Latihan/index.html" class="list-course-child isDisabled sub-3-2 ${getChapChild(
                "Materi-3/3.Latihan/index.html"
                )}">Latihan 3</a>
            </div>

            <div class="list-course">
            <a href="/Pages/Materi-3/4.Kuis3/index.html" class="list-course-child isDisabled sub-3-3 ${getChapChild(
                "Materi-3/4.Kuis3/index.html"
                )}">Kuis 3</a>
            </div>
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
        <button class="accordion-button ${getCollapsed(
            "Evaluasi"
            )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Evaluasi
        </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse ${getChapClass(
        "Evaluasi"
        )}" aria-labelledby="panelsStayOpen-headingFour">
        <div class="accordion-body">
            <div class="list-course">
            <a href="/pages/Evaluasi/" class="list-course-child isDisabled sub-4-0 ${getChapChild(
                "Evaluasi/"
                )}">Evaluasi</a>
            </div>
        </div>
    </div>
    </div>
</div>
`;