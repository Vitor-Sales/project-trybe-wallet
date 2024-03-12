// Coloque aqui suas actions

export const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (email: string) => ({
  type: SEND_EMAIL,
  payload: email,
});
