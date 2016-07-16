export const baseUrl = getBaseUrl();

function getBaseUrl() {
  if(window.location.hostname === 'localhost') {
    return 'http://lvh.me:3000/api/';
  }
  if(window.location.hostname === 'lvh.me') {
    return 'http://lvh.me:3000/api/';
  }
}
