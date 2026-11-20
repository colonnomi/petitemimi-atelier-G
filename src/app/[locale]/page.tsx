import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, messages, type Locale } from "@/content/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) return {};
  const titles: Record<Locale, string> = {
    fr: "Studio créatif & digital indépendant",
    en: "Independent creative & digital studio",
    zh: "独立创意与数字工作室",
  };
  return { title: `Petite Mimi Atelier — ${titles[rawLocale as Locale]}` };
}

export default async function StudioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const t = messages[locale];
  const nav = t.nav as string[];
  const services = t.services as { num: string; title: string; subtitle: string; body: string; tags: string[] }[];
  const projects = t.projects as { title: string; type: string; image: string }[];
  const languages: { id: Locale; label: string }[] = [
    { id: "fr", label: "FR" }, { id: "en", label: "EN" }, { id: "zh", label: "中文" },
  ];

  return (
    <main id="top" lang={locale}>
      <header className="relative z-20 border-b border-ink/10 bg-ivory">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">
          <Link href={`/${locale}`} aria-label="Petite Mimi Atelier home" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-olive/40 font-serif text-lg text-olive">m.</span>
            <span className="text-[.68rem] font-medium uppercase leading-[1.25] tracking-[.17em]">Petite Mimi<br/>Atelier</span>
          </Link>
          <nav className="desktop-nav flex items-center gap-9" aria-label="Main navigation">
            {nav.map((item, index) => <a key={item} className="eyebrow text-ink/70 transition hover:text-olive" href={["#expertises", "#projets", "#studio"][index]}>{item}</a>)}
            <div className="flex gap-2 border-l border-ink/15 pl-7 text-[.65rem] tracking-wider">
              {languages.map((language) => <Link key={language.id} href={`/${language.id}`} lang={language.id} aria-current={locale === language.id ? "page" : undefined} className={`transition hover:text-olive ${locale === language.id ? "font-semibold text-olive" : "text-ink/50"}`}>{language.label}</Link>)}
            </div>
            <a href="#contact" className="eyebrow rounded-full bg-ink px-5 py-3 text-ivory transition hover:bg-olive">{t.contact as string}</a>
          </nav>
          <details className="menu-toggle relative md:hidden">
            <summary className="eyebrow cursor-pointer list-none rounded-full border border-ink/20 px-4 py-2">Menu</summary>
            <div className="menu-panel absolute right-0 top-full flex w-screen flex-col gap-5 bg-ivory">
              {nav.map((item, index) => <a key={item} className="eyebrow" href={["#expertises", "#projets", "#studio"][index]}>{item}</a>)}
              <a href="#contact" className="eyebrow">{t.contact as string}</a>
              <div className="flex gap-4 pt-2 text-xs">{languages.map((language) => <Link key={language.id} href={`/${language.id}`} lang={language.id}>{language.label}</Link>)}</div>
            </div>
          </details>
        </div>
      </header>

      <section className="grain relative min-h-[690px] overflow-hidden bg-ink text-ivory md:min-h-[790px]">
        <div className="hero-image absolute inset-0 opacity-75" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[690px] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-28 md:min-h-[790px] md:px-12 md:pb-24 lg:px-16">
          <p className="eyebrow mb-7 text-sage">{t.kicker as string}</p>
          <h1 className="display max-w-5xl whitespace-pre-line text-5xl leading-[.99] md:text-7xl lg:text-[6.4rem]">{t.heroTitle as string}</h1>
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-ivory/80 md:text-base">{t.heroBody as string}</p>
            <a href="#expertises" className="eyebrow inline-flex w-fit items-center gap-4 border-b border-champagne pb-3 text-ivory">{t.explore as string}<span className="text-champagne">↘</span></a>
          </div>
        </div>
        <div className="absolute right-6 top-8 hidden text-right text-[.58rem] uppercase leading-5 tracking-[.2em] text-ivory/60 md:block">France<br/>× China<br/>Worldwide</div>
      </section>

      <section id="expertises" className="mx-auto max-w-[1440px] scroll-mt-8 px-6 py-24 md:px-12 md:py-36 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <div><p className="eyebrow mb-6 text-olive">{t.selected as string}</p><h2 className="display max-w-md text-4xl leading-[1.05] md:text-5xl">{locale === "zh" ? "创意与数字能力，汇聚于一处。" : locale === "en" ? "A considered mix of creative and digital." : "Le regard juste,\nles bons outils."}</h2></div>
          <p className="max-w-xl self-end text-base leading-8 text-ink/65">{t.intro as string}</p>
        </div>
        <div className="mt-16 border-t border-ink/20">
          {services.map((service) => <article key={service.num} className="grid gap-5 border-b border-ink/20 py-8 md:grid-cols-[.2fr_1fr_1.15fr] md:gap-10 md:py-10">
            <span className="eyebrow text-champagne">{service.num}</span>
            <div><h3 className="display text-2xl md:text-[1.8rem]">{service.title}</h3><p className="mt-2 text-sm text-olive">{service.subtitle}</p></div>
            <div><p className="max-w-lg text-sm leading-7 text-ink/65">{service.body}</p><div className="mt-5 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-ink/15 px-3 py-1.5 text-[.6rem] uppercase tracking-wider text-ink/60">{tag}</span>)}</div></div>
          </article>)}
        </div>
      </section>

      <section id="projets" className="scroll-mt-8 bg-[#e8e6dd] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end">
            <div><p className="eyebrow mb-5 text-olive">{t.workLabel as string}</p><h2 className="display whitespace-pre-line text-4xl leading-[1.04] md:text-6xl">{t.workTitle as string}</h2></div>
            <p className="max-w-sm text-sm leading-7 text-ink/60">{t.workIntro as string}</p>
          </div>
          <div className="grid gap-7 md:grid-cols-3 md:gap-5">
            {projects.map((project) => <article key={project.title}>
              <div className={`project-photo-${project.image} relative aspect-[.83] overflow-hidden bg-olive bg-cover bg-center`}>
                <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-2 text-[.56rem] uppercase tracking-[.13em] text-ink">{t.concept as string}</span>
              </div>
              <div className="flex items-start justify-between gap-3 pt-4"><div><h3 className="display text-xl">{project.title}</h3><p className="mt-1 text-xs text-ink/55">{project.type}</p></div><span className="text-sm text-olive">↗</span></div>
            </article>)}
          </div>
          <p className="mt-8 text-[.62rem] leading-5 text-ink/45">{locale === "zh" ? "概念展示作品，非真实客户项目。图片仅作视觉演示。" : locale === "en" ? "Concept work only. No real client projects are represented. Images are for visual demonstration." : "Projets conceptuels uniquement. Aucun client réel n’est représenté. Visuels à titre de démonstration."}</p>
        </div>
      </section>

      <section id="studio" className="scroll-mt-8 bg-ink px-6 py-24 text-ivory md:px-12 md:py-36 lg:px-16">
        <div className="mx-auto grid max-w-[1312px] gap-12 md:grid-cols-[1fr_1fr] md:gap-24">
          <div><p className="eyebrow mb-6 text-sage">{t.aboutLabel as string}</p><h2 className="display whitespace-pre-line text-4xl leading-[1.06] md:text-6xl">{t.aboutTitle as string}</h2></div>
          <div className="self-end"><p className="text-sm leading-8 text-ivory/65 md:text-base">{t.aboutBody as string}</p><ul className="mt-8 border-t border-ivory/20">{(t.values as string[]).map((value, index) => <li key={value} className="flex gap-5 border-b border-ivory/20 py-4 text-sm"><span className="text-champagne">0{index + 1}</span>{value}</li>)}</ul></div>
        </div>
        <div className="mx-auto mt-20 max-w-[1312px] border-t border-ivory/20 pt-6"><p className="eyebrow text-ivory/45">Petite Mimi Atelier <span className="px-2 text-champagne">·</span> {locale === "zh" ? "法国 · 中国" : "France · Chine"}</p></div>
      </section>

      <section id="contact" className="scroll-mt-8 px-6 py-24 md:px-12 md:py-36 lg:px-16">
        <div className="mx-auto grid max-w-[1312px] gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div><p className="eyebrow mb-6 text-olive">{t.contactLabel as string}</p><h2 className="display whitespace-pre-line text-5xl leading-[1.02] md:text-7xl">{t.contactTitle as string}</h2></div>
          <div className="md:pl-10"><p className="mb-7 max-w-sm text-sm leading-7 text-ink/60">{t.contactBody as string}</p><a href="mailto:bonjour@petitemimiatelier.com" className="inline-flex items-center gap-4 border-b border-champagne pb-3 text-sm">{t.email as string}<span className="text-olive">↗</span></a></div>
        </div>
      </section>

      <footer className="border-t border-ink/15 px-6 py-6 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-4 text-[.62rem] uppercase tracking-[.12em] text-ink/50 sm:flex-row sm:items-center"><span>© {new Date().getFullYear()} Petite Mimi Atelier</span><span>{t.footer as string}</span><a href="#top">{t.top as string}</a></div>
      </footer>
    </main>
  );
}
