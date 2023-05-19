document.querySelector("#nav-bottom").innerHTML = `
<div class="container">
    <a class="navbar-brand" href="/">
        <img src="/Asset/Image/Logo.png" alt="" width="25" height="25" class="d-inline-block align-text-top">
        <span>Lingkaran</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Daftar Materi</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <!-- List course -->
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
                "materi-1"
                )}" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/1.pendahuluan/index.html" class="list-course-child isDisabled sub-1-0 ${getChapChild(
                        "materi-1/1.pendahuluan/index.html"
                        )}">Pendahuluan</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/2.titik-pusat/index.html" class="list-course-child isDisabled sub-1-1 ${getChapChild(
                        "materi-1/2.titik-pusat/index.html"
                        )}">Titik Pusat</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/3.diameter/index.html" class="list-course-child isDisabled sub-1-2 ${getChapChild(
                        "materi-1/3.diameter/index.html"
                        )}">Diameter</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/4.jari-jari/index.html" class="list-course-child isDisabled sub-1-3 ${getChapChild(
                        "materi-1/4.jari-jari/index.html"
                        )}">Jari - Jari</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/5.busur/index.html" class="list-course-child isDisabled sub-1-4 ${getChapChild(
                        "materi-1/5.busur/index.html"
                        )}">Busur</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/6.tali-busur/index.html" class="list-course-child isDisabled sub-1-5 ${getChapChild(
                        "materi-1/6.tali-busur/index.html"
                        )}">Tali Busur</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/7.apotema/index.html" class="list-course-child isDisabled sub-1-6 ${getChapChild(
                        "materi-1/7.apotema/index.html"
                        )}">Apotema</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/8.tembereng/index.html" class="list-course-child isDisabled sub-1-7 ${getChapChild(
                        "materi-1/8.tembereng/index.html"
                        )}">Tembereng</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/9.juring/index.html" class="list-course-child isDisabled sub-1-8 ${getChapChild(
                        "materi-1/9.juring/index.html"
                        )}">Juring</a>
                    </div>

                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-1/10.latihan/index.html" class="list-course-child isDisabled sub-1-9 ${getChapChild(
                        "materi-1/10.latihan/index.html"
                        )}">Latihan 1</a>
                    </div>

                    <div class="list-course-menu">
                        <a href="/pages/materi-1/11.kuis1/index.html" class="list-course-child isDisabled sub-1-10 ${getChapChild(
                        "materi-1/11.kuis1/index.html"
                        )}">Kuis 1</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button ${getCollapsed(
                    "materi-2"
                    )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Keliling Lingkaran
                </button>
            </h2>

            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ${getChapClass(
                "materi-2"
                )}" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-2/1.pendahuluan/index.html" class="list-course-child isDisabled sub-2-0 ${getChapChild(
                        "materi-2/1.pendahuluan/index.html"
                        )}">Pendahuluan</a>
                    </div>

                <div class="list-course-menu mb-3">
                    <a href="/pages/materi-2/2.mengukurkeliling/index.html" class="list-course-child isDisabled sub-2-1 ${getChapChild(
                    "materi-2/2.mengukurkeliling/index.html"
                    )}">Mengukur Keliling Suatu Lingkaran</a>
                </div>

                <div class="list-course-menu mb-3">
                    <a href="/pages/materi-2/3.menemukanrumus/index.html" class="list-course-child isDisabled sub-2-2 ${getChapChild(
                    "materi-2/3.menemukanrumus/index.html"
                    )}">Menemukan Rumus Keliling Lingkaran</a>
                </div>

                <div class="list-course-menu mb-3">
                    <a href="/pages/materi-2/4.latihan/index.html" class="list-course-child isDisabled sub-2-3 ${getChapChild(
                    "materi-2/4.latihan/index.html"
                    )}">Latihan 2</a>
                </div>

                <div class="list-course-menu">
                    <a href="/pages/materi-2/5.kuis2/index.html" class="list-course-child isDisabled sub-2-4 ${getChapChild(
                    "materi-2/5.kuis2/index.html"
                    )}">Kuis 2</a>
                </div>
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button ${getCollapsed(
                    "materi-3"
                    )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Luas Lingkaran
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse ${getChapClass(
                "materi-3"
                )}" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                    <div class="list-course-menu mb-3">
                        <a href="/pages/materi-3/1.pendahuluan/index.html" class="list-course-child isDisabled sub-3-0 ${getChapChild(
                        "materi-3/1.pendahuluan/index.html"
                        )}">Pendahuluan</a>
                    </div>

                <div class="list-course-menu mb-3">
                    <a href="/pages/materi-3/2.menentukanrumusluas/index.html" class="list-course-child isDisabled sub-3-1 ${getChapChild(
                    "materi-3/2.menentukanrumusluas/index.html"
                    )}">Menentukan Rumus Luas Lingkaran</a>
                </div>

                <div class="list-course-menu mb-3">
                    <a href="/pages/materi-3/3.latihan/index.html" class="list-course-child isDisabled sub-3-2 ${getChapChild(
                    "materi-3/3.latihan/index.html"
                    )}">Latihan 3</a>
                </div>

                <div class="list-course-menu">
                    <a href="/pages/materi-3/4.kuis3/index.html" class="list-course-child isDisabled sub-3-3 ${getChapChild(
                    "materi-3/4.kuis3/index.html"
                    )}">Kuis 3</a>
                </div>
            </div>
            </div>
        </div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button ${getCollapsed(
                    "evaluasi"
                    )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Evaluasi
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse ${getChapClass(
                "evaluasi"
                )}" aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                    <div class="list-course-menu">
                        <a href="/pages/evaluasi/index.html" class="list-course-child isDisabled sub-4-0 ${getChapChild(
                        "evaluasi/index.html"
                        )}">Evaluasi</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- End List course -->
    </div>
    </div>
</div>
`;