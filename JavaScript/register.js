//토큰을 기준으로 로그인 사용자인지 체크
(function () {

    const token = sessionStorage.getItem('token');
    if (token) {
        alert('이미 로그인한 사용자입니다.')
        window.location.href = "http://43.200.125.52/404"
    }
})()

const login = document.querySelector('#login');

login.addEventListener('click', (e) => {
    e.preventDefault();

    // 아이디와 비밀번호를 받아 json으로 변경한다.
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const data = {
        username: username,
        password: password,
    }

    // fetch를 이용해서 서버에 POST 요청을 보낸다.
    fetch('http://13.209.138.142:8000/accounts/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            window.location.href = "http://43.200.125.52/"
        })
        .catch(error => {
            console.error('회원가입 중 오류 발생:', error);
        });
})