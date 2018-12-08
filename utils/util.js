const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const checkTel = (value)=>{
  var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
  if (isMob.test(value) || isPhone.test(value)){
    return true;
  }
  else {
    return false;
  }
}
module.exports = {
  formatTime: formatTime,
  validatePhone: checkTel
}
