$.ajaxPrefilter(function(options) {
  // 发起Ajax请求之前，统一拼接请求的根路径
  options.url = 'http://ajax.frontend.itheima.net' + options.url

  // 统一有权限的接口，设置 headers 请求头
  if(options.url.indexOf('/my/') !== -1) {
  options.headers = {
    Authorization: localStorage.getItem('token') || ''
   }
  }
   options.complete = function(res) {
     if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
       localStorage.removeItem('token')
       location.href = '/login.html'
     }
   }
})