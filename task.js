function validateForm () {
    //declare all variables of interest
    var userName = document.getElementById('fullName').value;
    var userEmail = document.getElementById('email').value;
    var pw1 = document.getElementById('pswd').value;
    var pw2 = document.getElementById('cpswd').value;

      //check empty password field  
      if(pw1 == "") {  
        document.getElementById("message").innerHTML = "**Fill the password please!";  
        return false;  
      } 

       //check empty confirm password field  
    if(pw2 == "") {  
        document.getElementById("message2").innerHTML = "**Enter the password please!";  
        return false;  
      }

        //minimum password length validation  
    if(pw1.length < 8) {  
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
        return false;  
      }  
    
      //maximum length of password validation  
      if(pw1.length > 15) {  
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
        return false;  
      } 

      if(pw1 != pw2) {  
        document.getElementById("message2").innerHTML = "**Passwords are not same";  
        return false;  
      } else { 
        Swal.fire({
          title: '<strong>Is Your Signup Info correct?</strong>',
          icon: 'info',
          html:
            '<b>Your Full name:</b> ' + userName + '<br/><br/>' + 
            '<b>Your email address:</b> ' + userEmail + '<br/><br/>' + 
            '<b>Your Password (LMAO!):</b> ' + pw1 ,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }})
      }  
}
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#pswd');

  togglePassword.addEventListener('click', function (e) {
     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
     password.setAttribute('type', type);
     this.classList.toggle('fa-eye-slash');
  });

  const toggleCPassword = document.querySelector('#togglePassword');
  const cpassword = document.querySelector('#cpswd');

  toggleCPassword.addEventListener('click', function (e) {
     const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
     cpassword.setAttribute('type', type);
     this.classList.toggle('fa-eye-slash');
  });
