import axios from 'axios';

// server's base url
const baseUrl = 'http://127.0.0.1:8000';
const apiPath = '/api/v1';

//register api
export const callRegisterApi = (values) => {

    // error handling if params are undefined
    if(!values.email && !values.password) {
        console.warn('email and password are required')
        return
    }

    let data = new FormData();
    data.append('email',values.email)
    data.append('password',values.password)
    data.append('password_confirmation',values.password)

    return axios({
        method:'POST',
        url:baseUrl+apiPath+'/register',
        data:data
    })
}