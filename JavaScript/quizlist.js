function loadlist() {
    console.log('실행')
    tokencheck()
    const access = sessionStorage.getItem('access')
    const quiz_list = document.querySelector('#quiz_list')
    fetch('http://13.209.138.142:8000/quiz/list/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            const array = data.serializer
            array.forEach(e => {
                console.log(e)
                let correct
                if (e.correct) {
                    correct = '정답'
                } else {
                    correct = '오답'
                }
                quiz_list.innerHTML += `
                <tr>
                    <td>${e.prompt}</td>
                    <td>${e.response}</td>
                    <td>${correct}</td>
                </tr>
                `
            });
        })
        .catch(error => {
            console.error('퀴즈 로드중 오류 발생:', error);
        });
}
setTimeout(loadlist, 100);