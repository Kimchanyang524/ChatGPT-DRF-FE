let js = document.querySelector('header.includeJs');

(function () {
    const sign = document.querySelector('#sign');
    const token = sessionStorage.getItem('token');
    if (token) {
        sign.innerHTML = `<a class="nav-link" href="/accounts/logout"><i class="fa-solid fa-right-to-bracket"></i></a>`;
    } else {
        sign.innerHTML = `<a class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></a>`;
    }
})();