//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// set the cookie
function setData() {
  const formKey = document.getElementById('key').value;
  const formValue = document.getElementById('value').value;

  const cookieVal = setCookieValue(formKey, formValue, 1);
  document.cookie = cookieVal;
}

// retrieve the cookie value for a specified key
function getData() {
  const keyValue = document.getElementById('key').value;
  const cookie = document.getElementById('cookiestr');
  cookie.innerHTML = '';

  let allCookies = document.cookie;
  const value = getCookieValue(allCookies, keyValue);

  cookie.innerHTML = `<p>${value}</p>`;
}


// remove the cookie for a specified key
function removeData() {
  const key = document.getElementById('key').value;
  document.getElementById('cookiestr').innerHTML = '';

  const cookie = deleteCookie(key);
  document.cookie = cookie;
}

document.getElementById('set').onclick = setData;
document.getElementById('get').onclick = getData;
document.getElementById('erase').onclick = removeData;




//Helpers to set, read or remove specific cookie key

//prepares a cookie string to be inserted into dockument.cookies
function setCookieValue(key, value, expiryDays=0) {

  if (expiryDays === 0)
  {
    return `${key}=${encodeURIComponent(value)};`;
  }

  // Calculate the expiration date
  const date = new Date();
  date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
  const expires = "expires=" + date.toUTCString();

  return `${key}=${encodeURIComponent(value)}; ${expires};`;
}

//parse the cookie string, cookies, and return the value corresponding to key
function getCookieValue(cookies, key) {

  //escape special characters in a string to make it safe for use in regular expressions.
  //special characters may have a special meaning in regex.
  const keyClean = key.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');

  //extract the value of the key-value pair from cookies string, 
  //keyValueClean representing the key to search for
  const regex = new RegExp(`(?:^|;)\\s?${keyClean}=(.*?)(?:;|$)`, 'i');
  const match = cookies.match(regex);

  //if match, match[1] will contain the value
  //code to reverse encodeURIComponent () of keyValue.
  //if not match value will contain ''
  const value = (match && decodeURIComponent(match[1])) || '';
  return value;
}

//removes a cookie by forcing the expiration time
function deleteCookie(key) {
  return `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}