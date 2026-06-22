import { MapPin, Phone, Mail, Instagram, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer
      id="contato"
      className="texture-paper texture-paper-dark"
      style={{ background: 'hsl(var(--charcoal-deep))' }}
    >
      {/* Map Section */}
      <div className="w-full" style={{ borderBottom: '1px solid hsl(var(--dark-border) / 0.5)' }}>
        <div className="container-wide py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elevated)', height: '280px' }}>
              <iframe
                title="Localização – Clínica Harmony, Registro/SP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650!2d-47.8435!3d-24.487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1b0a0a0a0a0a%3A0x0!2sR.%20Sinfr%C3%B4nio%20Costa%2C%20935%20-%20Centro%2C%20Registro%20-%20SP%2C%2011900-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Location info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'hsl(var(--gold) / 0.15)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'hsl(var(--gold))' }}
                >
                  Localização
                </span>
              </div>

              <h3
                className="font-serif text-2xl font-medium mb-2"
                style={{ color: 'hsl(var(--dark-text))' }}
              >
                Clínica Harmony
              </h3>
              <p
                className="text-lg mb-1"
                style={{ color: 'hsl(var(--dark-muted))' }}
              >
                Rua Sinfrônio Costa, 935, Centro
              </p>
              <p
                className="text-base mb-1"
                style={{ color: 'hsl(var(--dark-muted))' }}
              >
                Registro/SP – CEP 11900-000
              </p>
              <p
                className="text-sm mb-6"
                style={{ color: 'hsl(var(--dark-muted) / 0.7)' }}
              >
                Atendimento presencial e telemedicina para todo o Brasil
              </p>

              <a
                href="https://maps.google.com/?q=Rua+Sinfrônio+Costa,+935,+Centro,+Registro,+SP,+11900-000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: 'hsl(var(--gold))' }}
              >
                Ver no Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3
              className="font-serif text-2xl font-semibold mb-2"
              style={{ color: 'hsl(var(--dark-text))' }}
            >
              Dr. Felipe Mendonça
            </h3>
            <p
              className="text-sm mb-5 tracking-[0.16em]"
              style={{ color: 'hsl(var(--gold) / 0.7)' }}
            >
              ENDOCRINOLOGIA • MEDICINA PREVENTIVA
            </p>
            <p
              className="max-w-md leading-relaxed"
              style={{ color: 'hsl(var(--dark-muted))' }}
            >
              Cuidando da sua saúde de forma integral, com ciência,
              humanização e foco na sua qualidade de vida.
            </p>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://instagram.com/dr_felipemendonca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl transition-colors"
                style={{
                  background: 'hsl(var(--dark-surface))',
                  border: '1px solid hsl(var(--dark-border) / 0.6)',
                  color: 'hsl(var(--dark-text))',
                }}
              >
                <Instagram className="w-5 h-5" style={{ color: 'hsl(var(--gold))' }} />
                <span className="text-sm font-medium">@dr_felipemendonca</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-base mb-5"
              style={{ color: 'hsl(var(--dark-text))' }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm" style={{ color: 'hsl(var(--dark-muted))' }}>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--dark-surface))' }}
                >
                  <MapPin className="w-4 h-4" style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <div>
                  <p className="font-medium" style={{ color: 'hsl(var(--dark-text))' }}>Clínica Harmony</p>
                  <p>Rua Sinfrônio Costa, 935, Centro</p>
                  <p>Registro/SP – 11900-000</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+5513998010394"
                  className="flex items-center gap-3 text-sm transition-colors group"
                  style={{ color: 'hsl(var(--dark-muted))' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--dark-surface))' }}
                  >
                    <Phone className="w-4 h-4" style={{ color: 'hsl(var(--gold))' }} />
                  </div>
                  <span>(13) 99801-0394</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:drfelipesmendonca@gmail.com"
                  className="flex items-center gap-3 text-sm transition-colors"
                  style={{ color: 'hsl(var(--dark-muted))' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--dark-surface))' }}
                  >
                    <Mail className="w-4 h-4" style={{ color: 'hsl(var(--gold))' }} />
                  </div>
                  <span>drfelipesmendonca@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-semibold text-base mb-5"
              style={{ color: 'hsl(var(--dark-text))' }}
            >
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Especialidades', href: '#areas' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Perguntas Frequentes', href: '#faq' },
                { label: 'Política de Privacidade', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: 'hsl(var(--dark-muted))' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid hsl(var(--dark-border) / 0.5)' }}
        >
          <p className="text-sm" style={{ color: 'hsl(var(--dark-muted) / 0.6)' }}>
            © 2025 Dr. Felipe Mendonça. Todos os direitos reservados.
          </p>
          <p
            className="flex items-center gap-1.5 text-sm"
            style={{ color: 'hsl(var(--dark-muted) / 0.6)' }}
          >
            Feito com <Heart className="w-3.5 h-3.5 fill-current" style={{ color: 'hsl(var(--gold))' }} /> para você
          </p>
        </div>
      </div>
    </footer>
  );
}
