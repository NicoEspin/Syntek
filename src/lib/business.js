// TODO: reemplazar synttek@gmail.com por contacto@synttek.com cuando esté configurado el correo corporativo.
export const BUSINESS_EMAIL = "synttek@gmail.com";
export const BUSINESS_PHONE_DISPLAY = "+54 3541560518";
export const WHATSAPP_PHONE = "5493541560518";
export const INSTAGRAM_URL = "https://www.instagram.com/synttek/";
export const LINKEDIN_URL = "https://www.linkedin.com/company/synttek/";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Synttek/data=!4m2!3m1!1s0x2778b26d59a5783b:0x405437f9c6247e6c";
export const SORTLIST_URL = "https://www.sortlist.com/agency/synttek";

export const BUSINESS_LOCATION = {
  city: "Villa Carlos Paz",
  region: "Córdoba",
  countryCode: "AR",
};

export const getWhatsAppUrl = (message = "") => {
  const encodedMessage = encodeURIComponent(message.trim());

  return encodedMessage
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
    : `https://wa.me/${WHATSAPP_PHONE}`;
};
