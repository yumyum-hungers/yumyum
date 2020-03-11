var headerarr = localStorage.getItem('header');
setTimeout(() => {
  switch (headerarr) {
  case 'firstPage':
    window.location.replace('index.html');
    break;
  case 'secondPage':
    window.location.replace('forms.html');
    break;
  case 'thirdPage':
    window.location.replace('AboutUS.html');
    break;
  case 'fourthPage':
    window.location.replace('user.html');
    break;
  default:
    window.location.replace('index.html');
    break;
  }

}, 4000);
