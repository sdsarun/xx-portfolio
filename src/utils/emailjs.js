import emailjs from '@emailjs/browser';

class SendEmail {
  static #SERVICE_ID = "service_ynbewic";
  static #TEMPLATE_ID = "template_nd6s803";
  static #PUBLIC_KEY = "jtoYUIZvKo6chWoU2";

  static async send(fromName, fromEmail, message) {
    const TEMPLATE_PARAMS = {
      from_name: fromName,
      from_email: fromEmail,
      message: message,
    }

    try {
      await emailjs.send(this.#SERVICE_ID, this.#TEMPLATE_ID, TEMPLATE_PARAMS, this.#PUBLIC_KEY);
      console.log("send email successfully.");
    } catch (error) {
      console.log(error);
    }
  }
}

export { SendEmail }