import moment from 'moment';

const getCookie = (cookiename) => {
  let cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
};

const deleteAllCookies = () => {
  let cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

const validateEmail = (value) => {
  let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

const validateHtmlEditorValue = (value) => {
  let html = value.toString('html');
  html = html.replaceAll('\n', '').replaceAll('&nbsp;', '').replaceAll('<p><br></p>', '').replaceAll('<p></p>', '')
  console.log(html);
  if (html == '') return false
  return true;
}

const getDateString = (timestamp) => {
  return moment(timestamp).format('MMM DD, YYYY');
};

const getChainTitle = (id) => {
  if(id == 0x01)
    return 'Ethereum';
  else if(id == 137)
    return 'Polygon';
  else if(id == 56)
    return 'BSC';
  else if (id == 250)
    return 'Fantom';
  else if (id == 43114)
    return 'AVAX';
  else 
    return 'Unknown';
}

export { getCookie, deleteAllCookies, validateEmail, getDateString, validateHtmlEditorValue, getChainTitle };