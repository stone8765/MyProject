import http from '@/utils/http'


export function login(userName: string, password: string) {
    return http.request({
        method: 'post',
        url: 'authorize/token',
        data: {
            userName: userName,
            password: password
        }
    }).then(res => {
        localStorage.setItem('my-project:token', JSON.stringify(res.data));
    });
}

export function getToken(): string | null {
    return localStorage.getItem('my-project:token');
}