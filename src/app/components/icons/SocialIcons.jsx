import { createLucideIcon } from "lucide-react";

export const InstagramIcon = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "instagram-rect" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "instagram-path" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "instagram-line" }],
]);

export const LinkedinIcon = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "linkedin-path",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "linkedin-rect" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "linkedin-circle" }],
]);
