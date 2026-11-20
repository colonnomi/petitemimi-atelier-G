import "../globals.css";

const languageTags: Record<string, string> = { fr: "fr", en: "en", zh: "zh-Hans" };

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  return (
    <html lang={languageTags[locale] ?? "fr"}>
      <body>{children}</body>
    </html>
  );
}
