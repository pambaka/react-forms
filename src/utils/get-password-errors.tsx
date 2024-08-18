function getPasswordErrors(pass: string): string[] {
  const errors: string[] = [];
  const upperCaseLetters = /^[\S]{0,}[A-Z]{1}[\S]{0,}$/.exec(pass);
  if (!upperCaseLetters) errors.push('uppercase letter');
  const lowerCaseLetters = /^[\S]{0,}[a-z]{1}[\S]{0,}$/.exec(pass);
  if (!lowerCaseLetters) errors.push('lowercase letter');
  const numbers = /^[\S]{0,}[0-9]{1}[\S]{0,}$/.exec(pass);
  if (!numbers) errors.push('number');
  const specialChars = /^[\S]{0,}[\W]{1}[\S]{0,}$/.exec(pass);
  if (!specialChars) errors.push('special charachter');

  return errors;
}

export default getPasswordErrors;
