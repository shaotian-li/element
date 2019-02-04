import JsonP from 'jsonp'
import axios from 'axios'
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status == 'success') {
          resolve(response);
        } else {
          reject(response.messsage);
        }
      })
    })
  }

  static Ajax(options) {
    let baseApi = 'https://www.easy-mock.com/mock/5c3f3742419c5d0de8845d59/backstageapi/'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          }else{
            this.$message.error(res.message)
          }
        }
      })
    })
  }

}
