export function accessToken() {
    //Extract token from url
    let token = window.location.hash
        .substring(1)
        .split('&')
        .reduce((result, init) => {
            let part = init.split('=');
            result[part[0]] = decodeURIComponent(part[1]);
            return result;
        }, []);
    console.log(token);
    return token;
};