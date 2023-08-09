const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const petnameInput = document.getElementById('petname');
  const breedInput = document.getElementById('breed');

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const petname = petnameInput.value;
  const breed = breedInput.value;

  // You can perform any necessary data validation here

  // Call the createUser function to store user data in MongoDB
  const userCreated = await createUser(username, email, password, petname, breed);

  if (userCreated) {
    // Redirect to dashboard or show success message
    window.location.href = 'dashboard.html';
  } else {
    // Display error message to user if needed
    alert('User creation failed.');
  }
});

async function createUser(username, email, password, petname, breed) {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        petname,
        breed,
      }),
    });

    if (response.ok) {
      return true; // User created successfully
    } else {
      return false; // User creation failed
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return false;
  }
}
