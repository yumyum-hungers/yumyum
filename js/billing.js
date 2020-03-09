
'use strict';
var registerForm = document.getElementById('/action_page.php');
registerForm.addEventListener('submit', function (event){
  event.preventDefault();
  // });
  function btnn(){
    if (event.target.fname.value)
      window.location.href='user.html';
    document.getElementById('/action_page.php').reset();
  }
  btnn();
});
