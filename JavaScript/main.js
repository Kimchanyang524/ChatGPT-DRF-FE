const quiz = document.querySelector('#quiz')
const count = document.querySelector('.test')

quiz.addEventListener('click', () => {
    const token = sessionStorage.getItem('token');
    if (token) {
        // fetch를 이용해서 서버에 POST 요청을 보낸다.
        fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    } else {
        alert('로그인이 필요합니다.')
        document.location.href = "http://43.200.125.52/accounts/login"
    }
})

personal_quiz = 5
count.innerHTML = "남은횟수 " + personal_quiz + "/5"

