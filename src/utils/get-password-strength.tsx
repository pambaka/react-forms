import getPasswordErrors from './get-password-errors';

function getPasswordStrength(pass: string): string {
  const errors = getPasswordErrors(pass);

  let strength = '';
  switch (errors.length) {
    case 3: {
      strength = 'WEAK';
      break;
    }
    case 2: {
      strength = 'FAIR';
      break;
    }
    case 1: {
      strength = 'GOOD';
      break;
    }
    case 0: {
      strength = 'STRONG';
      break;
    }
    default:
      break;
  }

  return strength;
}
export default getPasswordStrength;
