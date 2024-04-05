document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch username and password from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you would typically send this data to your backend for validation and authentication
    // For this example, let's just log the username and password to console
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Redirect to index.html after login
    window.location.href = 'index.html';
  });
document.getElementById('toggle-password').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var passwordToggle = document.getElementById('toggle-password');
  
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      passwordToggle.textContent = 'Ocultar';
    } else {
      passwordField.type = 'password';
      passwordToggle.textContent = 'Mostrar';
    }
  });

window.addEventListener("scroll", function(){
			var header = document.querySelector("header");
			header.classList.toggle("abajo",window.scrollY>0);
		})



  