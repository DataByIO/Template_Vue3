<template>
  <header id="mainHeader">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <span style="color: #FF8300; font-weight: bold;">TESTLOGO</span>
        </a>
        <button
            class="navbar-toggler collapsed custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <div class="hamburger-icon"></div>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item" v-for="(menu, i) in menus" :key="i">
              <a class="nav-link" href="#">{{ menu }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

const menus = ['회사소개', '사업소개', '서비스', 'R&D', '고객센터']

onMounted(() => {
  const header = document.getElementById("mainHeader")
  const mainNavbar = document.getElementById("mainNavbar")
  let isMenuOpen = false

  window.addEventListener("scroll", () => {
    if (isMenuOpen) {
      header.style.backgroundColor = "black";
    } else {
      header.style.backgroundColor = window.pageYOffset > 50 ? "black" : "transparent";
    }
  })

  // 메뉴 열리고 닫힐 때 상태 변경
  mainNavbar.addEventListener('shown.bs.collapse', () => {
    isMenuOpen = true
    header.style.backgroundColor = "black"
  })
  mainNavbar.addEventListener('hidden.bs.collapse', () => {
    isMenuOpen = false
    header.style.backgroundColor = window.pageYOffset < 50 ? "transparent" : "black"
  })

  // 바깥 클릭 시 메뉴 닫기 (Collapse 인스턴스 없이 처리)
  document.addEventListener('click', (event) => {
    const navbarCollapse = document.getElementById('mainNavbar');
    const toggleButton = document.querySelector('.navbar-toggler');
    if (
        !navbarCollapse.contains(event.target) &&
        !toggleButton.contains(event.target) &&
        navbarCollapse.classList.contains('show')
    ) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  })
})
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
}
.navbar-brand img {
  height: 40px;
  margin-right: 8px;
}
.navbar-nav .nav-link {
  color: #eee !important;
  font-weight: 500;
  margin: 0 10px;
}
.navbar-nav .nav-link:hover {
  color: #ffd63d !important;
}
.navbar-toggler-icon {
  filter: invert(1);
}
.custom-toggler {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
.hamburger-icon {
  position: relative;
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  margin: auto;
}
.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.hamburger-icon::before {
  top: -8px;
  left: 0px;
}
.hamburger-icon::after {
  top: 8px;
  left: 0px;
}
.custom-toggler:not(.collapsed) .hamburger-icon {
  background-color: transparent;
}
.custom-toggler:not(.collapsed) .hamburger-icon::before {
  transform: rotate(45deg) translate(5px, 5px);
}
.custom-toggler:not(.collapsed) .hamburger-icon::after {
  transform: rotate(-45deg) translate(6px, -6px);
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: transparent;
}
</style>
