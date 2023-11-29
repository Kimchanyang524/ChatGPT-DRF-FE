//토큰을 기준으로 로그인 사용자인지 체크
(function () {

    const access = sessionStorage.getItem('access');
    if (access) {
        alert('이미 로그인한 사용자입니다.')
        window.location.href = "http://43.200.125.52/404"
    }
})()

const login = document.querySelector('#login');

login.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const data = {
        username: username,
        password: password,
    }

    // fetch를 이용해서 서버에 POST 요청을 보낸다.
    fetch('http://13.209.138.142:8000/accounts/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.access) {
                sessionStorage.setItem('access', data.access)
                sessionStorage.setItem('refresh', data.refresh)
                alert('로그인에 성공하였습니다!')
            } else {
                alert('로그인에 실패하였습니다!')
            }
            window.location.href = "http://43.200.125.52/"
        })
        .catch(error => {
            console.error('로그인 중 오류 발생:', error);
        });
})