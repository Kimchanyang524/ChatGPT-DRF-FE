function includeHtml() {
    const includeTarget = document.querySelectorAll(".includeJs");
    includeTarget.forEach(function (el, idx) {
        const targetFile = el.dataset.includeFile;
        if (targetFile) {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200) {
                        el.innerHTML = this.responseText;
                        updateHeader();
                    } else if (this.status === 404) {
                        el.innerHTML = "include not found.";
                    }
                }
            };
            xhttp.open("GET", targetFile, true);
            xhttp.send();
            return;
        }
    });
}
includeHtml();
function updateHeader() {
    const sign = document.querySelector("#sign");
    const register = document.querySelector("#register");
    const access = sessionStorage.getItem("access");

    if (sign) {
        if (access) {
            sign.innerHTML = `<button class="nav-link" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i></button>`;
        } else {
            register.innerHTML = `<a class="nav-link" href="/accounts/register"><i class="fa-solid fa-user-plus"></i></a>`;
            sign.innerHTML = `<a class="nav-link" href="/accounts/login"><i class="fa-solid fa-right-to-bracket"></i></a>`;
        }
    }
}
