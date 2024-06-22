const phoneRegExValidation = /^(?:\+?(\d{1,3}))?[-(.\s]*?(\d{3})[-). \s]*?(\d{3})[-.\s]*?(\d{4})$/;
const emailRegExValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const urlRegExValidation = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

export { phoneRegExValidation, emailRegExValidation, urlRegExValidation };
