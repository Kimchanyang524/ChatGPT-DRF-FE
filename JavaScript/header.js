(function updateHeader() {
    const sign = document.querySelector('#sign');
    const register = document.querySelector('#register');
    const access = sessionStorage.getItem('access');
    let temp = 0

    if (sign) {
        if (access) {
            sign.innerHTML = `<button class="nav-link" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></button>`;
        } else {
            register.innerHTML = `<a class="nav-link" href="/accounts/register"><i class="fa-solid fa-user-plus"></i></a>`;
            sign.innerHTML = `<a class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></a>`;
        }
    } else {
        temp++
        console.log(temp + '회 실패')
        setTimeout(updateHeader, 100);
    }
})()