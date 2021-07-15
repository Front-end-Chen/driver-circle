/* 
    发送请求基本路径，当前在开发环境，给自己的代理服务器发请求，
    若项目上线，配置成真正服务器的地址。 
*/
//配置发送请求基本路径(url)
export const BASE_URL = "http://localhost:3000";
// export const BASE_URL = ""; //等于上面的写法

//配置请求超时时间
export const TIME_OUT = 5000;