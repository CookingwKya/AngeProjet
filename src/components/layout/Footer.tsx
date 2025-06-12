import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import Container from '@/components/ui/Container'

const footerSections = {
  services: [
    { name: 'Ateliers Cuisine', href: '/ateliers' },
    { name: 'Cuisine à Domicile', href: '/domicile' },
    { name: 'Team Building', href: '/team-building' },
    { name: 'Cartes Cadeaux', href: '/cartes-cadeaux' },
  ],
  company: [
    { name: 'Mon Histoire', href: '/histoire' },
    { name: 'Nos Chefs', href: '/chefs' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Avis Clients', href: '/avis' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Conditions Générales', href: '/cgv' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold text-accent-gold mb-4">
                  Les Ateliers d'Ange
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Découvrez les saveurs authentiques de la cuisine vietnamienne 
                  avec nos ateliers culinaires passionnés.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="text-sm">123 Rue de la Cuisine, 92110 Clichy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span className="text-sm">contact@ange-hong-lan.fr</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-accent-gold mb-4">
                Nos Services
              </h3>
              <ul className="space-y-2">
                {footerSections.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary hover:text-accent-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* À propos */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-accent-gold mb-4">
                À Propos
              </h3>
              <ul className="space-y-2">
                {footerSections.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary hover:text-accent-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal & Réseaux sociaux */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif font-semibold text-accent-gold mb-4">
                  Légal
                </h3>
                <ul className="space-y-2">
                  {footerSections.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-secondary hover:text-accent-gold transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-serif font-semibold text-accent-gold mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="p-2 bg-primary rounded-full text-accent-gold hover:bg-accent-gold hover:text-primary transition-all duration-200"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-accent-gold/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-secondary">
                © 2024 Les Ateliers Culinaires d'Ange Hong Lan. Tous droits réservés.
              </p>
              <p className="text-sm text-secondary">
                Fait avec ❤️ à Paris
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
