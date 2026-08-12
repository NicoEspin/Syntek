import { notFound } from "next/navigation";

export const metadata = {
  title: "404 — Página no encontrada",
  robots: { index: false, follow: true },
};

export default function CatchAll() {
  notFound();
}
