export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,60}$/;

  const isEmailValid = validateEmail(emailRegex, email);
  const isPasswordValid = validatePassword(passwordRegex, password);

  if (!isEmailValid)
    return "❌ Please enter a valid email address or phone number.";

  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters.";

  return null;
};

const validateEmail = (emailRegex, email) => {
  return emailRegex.test(email);
};

const validatePassword = (passwordRegex, password) => {
  return passwordRegex.test(password);
};
