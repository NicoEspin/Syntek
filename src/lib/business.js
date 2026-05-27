// TODO: reemplazar synttek@gmail.com por contacto@synttek.com cuando esté configurado el correo corporativo.
export const BUSINESS_EMAIL = "synttek@gmail.com";
export const BUSINESS_PHONE_DISPLAY = "+54 3541560518";
export const WHATSAPP_PHONE = "5493541560518";
export const INSTAGRAM_URL = "https://www.instagram.com/synttek/";
export const LINKEDIN_URL = "https://www.linkedin.com/company/synttek/";

export const BUSINESS_LOCATION = {
  city: "Córdoba",
  region: "Córdoba",
  countryCode: "AR",
};

export const getWhatsAppUrl = (message = "") => {
  const encodedMessage = encodeURIComponent(message.trim());

  return encodedMessage
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
    : `https://wa.me/${WHATSAPP_PHONE}`;
};
