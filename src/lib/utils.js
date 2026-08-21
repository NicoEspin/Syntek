import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getContrastTextColor(hexColor) {
  const hex = hexColor?.replace("#", "");

  if (!hex || (hex.length !== 6 && hex.length !== 3)) {
    return "#0A0A0A";
  }

  const normalizedHex =
    hex.length === 3
      ? hex
          .split("")
          .map((char) => char + char)
          .join("")
      : hex;

  const r = Number.parseInt(normalizedHex.slice(0, 2), 16);
  const g = Number.parseInt(normalizedHex.slice(2, 4), 16);
  const b = Number.parseInt(normalizedHex.slice(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.62 ? "#0A0A0A" : "#EDEDED";
}

export function isDesignCategory(category = "") {
  const normalizedCategory = category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return ["branding", "diseno", "grafico", "redes", "social"].some((keyword) =>
    normalizedCategory.includes(keyword)
  );
}

export function formatBlogDate(dateString, locale) {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Argentina/Cordoba",
  }).format(new Date(dateString));
}
