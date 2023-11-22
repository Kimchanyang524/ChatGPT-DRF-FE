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

    // fetch를 이용해서 서버에 POST 요청을 보낸다.
    fetch('http://43.202.63.204:8000/accounts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
        })

})


write.addEventListener('click', (e) => {
    e.preventDefault(); // submit의 기본동작을 막는다.
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('input[name="content"]').value;
    const data = {
        title: title,
        content: content,
    }
    console.log(data)
    const token = localStorage.getItem('token')

    // if (token) {
    //     // fetch를 이용해서 서버에 POST 요청을 보낸다.
    //     fetch('http://127.0.0.1:8000/accounts/', {
    //         method: 'POST',
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // } else {
    //     alert('로그인이 필요합니다.')
    // }
})