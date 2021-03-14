$(function() {
  var form = layui.form
  form.verify({
    nickname: function(value) {
      if(value.length > 10) {
        return '昵称长度必须在1-10个字符之间'
      }
    }
  })
})