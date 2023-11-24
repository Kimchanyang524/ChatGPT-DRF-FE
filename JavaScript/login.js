const login = document.querySelector('#login');
const write = document.querySelector('#write');

login.addEventListener('click', (e) => {
    e.preventDefault(); // submit의 기본동작을 막는다.
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const data = {
        username: username,
        password: password
    }
    console.log(data)
    console.log(JSON.stringify(data))

    // fetch를 이용해서 서버에 POST 요청을 보낸다.
    fetch('http://13.209.138.142:8000/accounts/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('success')
            console.log(data)
            sessionStorage.setItem('token', data.access_token)
        })

})