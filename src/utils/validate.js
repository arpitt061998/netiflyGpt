export const checkValidata = (email, password, name) => {

    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
    const isNameValid =  /^[a-zA-Z ]{2,30}$/.test(name);
    
    if(!isNameValid) return "Name is not valid";
    if(!isValidEmail) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}