import http from '@/utils/http'


export function login(userName: string, password: string) {
    http.request({
        method: 'post',
        url: 'authorize/token',
        data: {
            userName: userName,
            password: password
        }
    }).then(res => {
        console.log(res);
    });

    // const opts = {
    //     method: "POST",   //请求方法
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         userName: userName,
    //         password: password
    //     })  //请求体

    // };

    // fetch('https://localhost:5001/api/authorize/token', opts)
    //     .then(function (res: any) {
    //         res.json().then(function (data: any) {
    //             console.log(data);
    //         });
    //     })
    //     .catch(function (err) {
    //         console.log('Fetch Error : %S', err);
    //     })

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://localhost:5001/api/authorize/test', true);

    // //发送合适的请求头信息
    // xhr.setRequestHeader('Content-type', 'application/json');

    // xhr.onload = function () {
    //     // 请求结束后,在此处写处理代码 
    // };
    // xhr.send('{ "userName": "userName", "password": "password" }');
}