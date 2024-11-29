export function ValidataName(name) {
  let nameRegex = /^[a-zA-z]{2,20}$/;
  return nameRegex.test(name) || name.length < 2;
}
export function ValidataMail(email) {
  let Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return Regex.test(email) || email.length < 2;
}
export function ValidataPhone(phonenumber) {
  let Regex = /^(002|\+2)?(010|011|012|015)[0-9]{8}$/;
  return Regex.test(phonenumber) || phonenumber.length < 2;
}
export function DiseaseVaidator(Dis) {
  let Regex = /(?=.*[A-Za-z])[A-Za-z0-9]+$/;
  return Regex.test(Dis) || Dis.length < 2;
}
