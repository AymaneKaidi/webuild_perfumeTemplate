import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className="font-sans text-sm text-cream-muted transition-colors hover:text-cream">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  const shopLinks = [
    { label: t('footer.allFragrances'), href: '/shop' },
    { label: t('footer.forHim'), href: '/shop?filter=men' },
    { label: t('footer.forHer'), href: '/shop?filter=women' },
    { label: t('footer.unisex'), href: '/shop?filter=unisex' },
  ]
  const aboutLinks = [
    { label: t('footer.ourStory'), href: '/about' },
    { label: t('footer.ingredients'), href: '/about#ingredients' },
    { label: t('footer.sustainability'), href: '/about#sustainability' },
  ]
  const contactLinks = [
    { label: t('footer.contactUs'), href: '/contact' },
    { label: t('footer.faq'), href: '/contact#faq' },
    { label: t('footer.stores'), href: '/contact#stores' },
  ]
  const legalLinks = [t('footer.privacy'), t('footer.terms'), t('footer.cookies')]

  return (
    <footer className="border-t border-charcoal-border bg-charcoal-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl italic tracking-widest text-cream transition-colors hover:text-gold" id="footer-wordmark">
              Maison Aurel
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream-muted">{t('footer.tagline')}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold opacity-40" />
              <span className="h-1 w-1 rotate-45 bg-gold opacity-40" />
            </div>
          </div>
          <FooterColumn title={t('footer.shopTitle')} links={shopLinks} />
          <FooterColumn title={t('footer.aboutTitle')} links={aboutLinks} />
          <FooterColumn title={t('footer.contactTitle')} links={contactLinks} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal-border pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream-muted">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <a key={item} href="#" className="font-sans text-xs text-cream-muted transition-colors hover:text-cream">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
