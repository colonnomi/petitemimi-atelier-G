import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Petite Mimi Atelier — Studio créatif & digital",
  description: "Studio créatif et digital indépendant. Contenu, présence digitale et accompagnement business France × Chine.",
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
