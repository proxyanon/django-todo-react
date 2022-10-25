export function isEmail(email: string, allowedServices: Array<string>): boolean {
  if (!email.includes('@') || !email.includes('.') || !allowedServices.includes(email.split('@')[1].split('.')[0])) {
    return false;
  }

  return true;
}
