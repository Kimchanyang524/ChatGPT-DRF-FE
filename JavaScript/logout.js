function logout() {
    const logoutConfirm = confirm('정말로 로그아웃 하시겠습니까?')
    refresh_token = sessionStorage.getItem('token')
    if (logoutConfirm) {
        const csrfToken = sessionStorage.getItem('csrftoken')
        fetch('http://13.209.138.142:8000/accounts/logout/', {
            method: 'POST',
            headers: {
                "X-CSRFToken": csrfToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'refresh_token': refresh_token
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.token_delete) {
                    alert('로그아웃에 성공하였습니다!')
                    sessionStorage.removeItem('token')
                    window.location.href = "http://43.200.125.52/"
                } else {
                    alert('로그아웃에 실패하였습니다!')
                    window.location.href = "http://43.200.125.52/"
                }
            })
            .catch(error => {
                console.error('로그아웃 중 오류 발생:', error);
            });
    }
}