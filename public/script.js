import Router from './router.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}

const router = new Router(routeConfig.routes, routeConfig.selector);

function handleNavigation(event){
  event.preventDefault();
  event.stopPropagation();
  router.navigate(event.target.pathname);
}


document.addEventListener('DOMContentLoaded', function() {
  
  const sidenav = M.Sidenav.init(document.querySelector('.sidenav'));
  const modals = M.Modal.init(document.querySelectorAll('.modal'));

  router.entryNavigate();

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



