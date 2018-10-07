let util = require("util")
export default function ({ $axios, redirect }) {
  let get = $axios.get
  $axios.get = async function (url, params) {
    return await get.call(this, url, {params})
  }
  $axios.onRequest(config => {
    let commonParams = { state: 1 }
    if (config.method === 'get') {
      config.params = { ...config.params, ...commonParams }
    } else if (config.method === 'post') {
      config.data = { ...config.data, ...commonParams}
    }
    console.log('Making request to ' + config.url)
    return config
  })
  $axios.onResponse(res => {
    // console.log('Get response ' + util.inspect(res.data, {depth: null}))
    return res.data
  })
  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
