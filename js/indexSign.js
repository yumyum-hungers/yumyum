var testBox = document.getElementById('testBox');
var signBox = document.getElementById('signBox');
var form = document.getElementById('form');
var form2 = document.getElementById('form2');

window.addEventListener('scroll',scrollingSign);

function scrollingSign(){
  var scrollPosition = window.scrollY;
  if( scrollPosition>50){
    testBox.style.width= '20px';
    testBox.style.opacity='0';
    testBox.style.right= '0px';
    testBox.style.height = '0px';
    signBox.style.opacity='1';
  }else{
    signBox.style.opacity='0';
    testBox.style.opacity='1';
    testBox.style.width= '200px';
    testBox.style.right='50px';
    testBox.style.height = '200px';
  }
}


form.addEventListener('submit',sign);
form2.addEventListener('submit',sign);
function sign(e){
  e.preventDefault();
  for(let i =0;i<companies.length; i++ ){
    for(let j =0 ; j<companies[i].users.length;j++){
      if(companies[i].users[j].name.includes(e.target.name.value)){
        if(companies[i].users[j].password.includes(e.target.password.value)){
          console.log('wooooow signed in');
          localStorage.setItem('user',e.target.name.value);
          window.location.href = 'http://www.github.com/yumyum';
          i= companies.length+1;
          break;
        }
      }
    }
  }
  form.reset();
  form2.reset();
}
