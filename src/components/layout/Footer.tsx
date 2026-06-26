import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'All Fragrances', href: '/shop' },
  { label: 'For Him', href: '/shop?filter=men' },
  { label: 'For Her', href: '/shop?filter=women' },
  { label: 'Unisex', href: '/shop?filter=unisex' },
]

const aboutLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'The Ingredients', href: '/about#ingredients' },
  { label: 'Sustainability', href: '/about#sustainability' },
]

const contactLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/contact#faq' },
  { label: 'Stores', href: '/contact#stores' },
]




function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="font-sans text-sm text-cream-muted transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-border bg-charcoal-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-display text-xl italic tracking-widest text-cream hover:text-gold transition-colors"
              id="footer-wordmark"
            >
              Maison Aurel
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream-muted">
              Handcrafted fragrances for the quietly discerning. Each bottle, a story.
            </p>
            {/* Decorative divider */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold opacity-40" />
              <span className="h-1 w-1 rotate-45 bg-gold opacity-40" />
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="About" links={aboutLinks} />
          <FooterColumn title="Contact" links={contactLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal-border pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream-muted">
            © {new Date().getFullYear()} Maison Aurel. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-xs text-cream-muted transition-colors hover:text-cream"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
