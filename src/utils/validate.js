export const checkValidata = (email,password) => {

    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
    
    if(!isValidEmail)return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}