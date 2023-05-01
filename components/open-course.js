// Sub 1
const subSatu0 = document.querySelectorAll(".sub-1-0");
const subSatu1 = document.querySelectorAll(".sub-1-1");
const subSatu2 = document.querySelectorAll(".sub-1-2");
const subSatu3 = document.querySelectorAll(".sub-1-3");
const subSatu4 = document.querySelectorAll(".sub-1-4");
const subSatu5 = document.querySelectorAll(".sub-1-5");
const subSatu6 = document.querySelectorAll(".sub-1-6");
const subSatu7 = document.querySelectorAll(".sub-1-7");
const subSatu8 = document.querySelectorAll(".sub-1-8");
const subSatu9 = document.querySelectorAll(".sub-1-9");
const subSatu10 = document.querySelectorAll(".sub-1-10");

// Sub 2
const subDua0 = document.querySelectorAll(".sub-2-0");
const subDua1 = document.querySelectorAll(".sub-2-1");
const subDua2 = document.querySelectorAll(".sub-2-2");
const subDua3 = document.querySelectorAll(".sub-2-3");
const subDua4 = document.querySelectorAll(".sub-2-4");

// Sub 3
const subTiga0 = document.querySelectorAll(".sub-3-0");
const subTiga1 = document.querySelectorAll(".sub-3-1");
const subTiga2 = document.querySelectorAll(".sub-3-2");
const subTiga3 = document.querySelectorAll(".sub-3-3");

// Sub 4
const subEmpat0 = document.querySelectorAll(".sub-4-0");

const getPage = (idElement, localName) => {
  const getLocal = localStorage.getItem(localName);
  if (getLocal != null) {
    for (let i = 0; i < idElement.length; i++) {
      idElement[i].classList.remove("isDisabled");
    }
  }
};

// Sub 1
getPage(subSatu0, "sub-1-0");
getPage(subSatu1, "sub-1-1");
getPage(subSatu2, "sub-1-2");
getPage(subSatu3, "sub-1-3");
getPage(subSatu4, "sub-1-4");
getPage(subSatu5, "sub-1-5");
getPage(subSatu6, "sub-1-6");
getPage(subSatu7, "sub-1-7");
getPage(subSatu8, "sub-1-8");
getPage(subSatu9, "sub-1-9");
getPage(subSatu10, "sub-1-10");

// Sub 2
getPage(subDua0, "sub-2-0");
getPage(subDua1, "sub-2-1");
getPage(subDua2, "sub-2-2");
getPage(subDua3, "sub-2-3");
getPage(subDua4, "sub-2-4");

// Sub 3
getPage(subTiga0, "sub-3-0");
getPage(subTiga1, "sub-3-1");
getPage(subTiga2, "sub-3-2");
getPage(subTiga3, "sub-3-3");

// Sub 4
getPage(subEmpat0, "sub-4-0");