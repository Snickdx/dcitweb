import {navigate, handleBack} from './lib.js';

window.addEventListener('popstate', e => handleBack(e, '/gallery', '#content'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}

function handleNavigation(event){
  event.preventDefault();
  event.stopPropagation();
  const a = event.target;
  navigate({}, a.href, '#content');
}

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelector('.sidenav');
  const sidenav = M.Sidenav.init(elems);

  const routes = ['/gallery', '/search'];

  let route = window.location.pathname;

  if(!routes.includes(route))
    route = '/gallery'

  navigate({}, route, '#content');

  document
    .querySelector('#mobile-menu')
    .addEventListener('click', e=>{ 
      handleNavigation(e);
      sidenav.close();
     } , false);

  document
    .querySelector('#pc-menu')
    .addEventListener('click', e=>{
      handleNavigation(e);
      sidenav.close();
    }, false);

});



