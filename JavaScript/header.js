document.addEventListener("DOMContentLoaded", function () {
    const sign = document.querySelector('#sign');
    const token = sessionStorage.getItem('token');

    if (sign && token) {
        sign.innerHTML = `<a class="nav-link" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>`;
    } else if (sign) {
        sign.innerHTML = `<button class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></button>`;
    }
})