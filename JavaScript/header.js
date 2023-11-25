(function loadsign() {
    const sign = document.querySelector('#sign');
    const token = sessionStorage.getItem('token');

    if (sign) {
        if (token) {
            sign.innerHTML = `<button class="nav-link" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></button>`;
        } else {
            sign.innerHTML = `<a class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></a>`;
        }
    } else {
        location.reload();
    }
})()