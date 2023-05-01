const getChapChild = (path) => {
  return this.location.pathname.substring() === path ? "active" : "";
};

document.querySelector("#nav").innerHTML = `
<div>
  <div class="nav_list">
    <a href="index.html" class="nav_link ${getChapChild(
      "/teachers/pages/index.html"
    )}">
      <i class="fa-solid fa-house nav_icon"></i> <span class="nav_name">Beranda</span>
    </a>
    <a href="daftar-nilai.html" class="nav_link ${getChapChild(
      "/teachers/pages/daftar-nilai.html"
    )}">
      <i class="fa-solid fa-list-check nav_icon"></i> <span class="nav_name">Daftar Nilai</span>
    </a>
    <a href="kkm.html" class="nav_link ${getChapChild("/teachers/pages/kkm.html")}">
      <i class="fa-solid fa-circle-check nav_icon"></i> <span class="nav_name">KKM</span>
    </a>
  </div>
</div>
<a href="#" class="nav_link" id="logout"> <i class="fa-solid fa-right-from-bracket nav_icon"></i> <span class="nav_name">SignOut</span> </a>
`;

document.getElementById("logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("pass");
  window.location = "../";
});