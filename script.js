// Seleccionamos el formulario
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que se recargue la página

  // Obtener los valores de los campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validar contraseñas
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Validar si ya existe el usuario
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = existingUsers.find(user => user.email === email);

  if (userExists) {
    alert('El correo ya está registrado');
    return;
  }

  // Guardar el nuevo usuario
  const newUser = { name, email, password };
  existingUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(existingUsers));

  alert('Usuario registrado con éxito');
  registerForm.reset();
});
