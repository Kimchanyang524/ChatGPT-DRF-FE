let js = document.querySelector('header.includeJs');

(function () {
    const sign = document.querySelector('#sign');
    const token = sessionStorage.getItem('token');
    if (token) {
        sign.innerHTML = `<a class="nav-link" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></a>`;
    } else {
        sign.innerHTML = `<button class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></button>`;
    }
})();