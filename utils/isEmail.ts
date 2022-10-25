export function isEmail(email: string, allowedServices: Array<string>): boolean { // check if email and service ex: hotmail
  if (!email.includes('@') || !email.includes('.') || !allowedServices.includes(email.split('@')[1].split('.')[0])) {
    return false;
  }

  return true;
}
