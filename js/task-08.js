const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const { elements } = e.currentTarget; 

  
  if (!elements.email.value) {
    alert("Please fill in the Login field");
    return;
  }
  if (!elements.password.value) {
    alert("Please fill in the Password field");
    return;
  }

  
  const formData = {
    email: elements.email.value,
    password: elements.password.value,
  };

  console.log(formData); 

  form.reset(); 
});

