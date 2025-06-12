'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Mon Histoire', href: '/histoire' },
  { name: 'Boutique', href: '/boutique' },
  {
    name: 'Plus...',
    href: '#',
    submenu: [
      { name: 'Nos Recettes', href: '/recettes' },
      { name: 'Contact', href: '/contact' },
      { name: 'Galerie', href: '/galerie' },
    ]
  }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className="transition-colors duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(21, 56, 56, 0.95)' : 'rgba(21, 56, 56, 0.8)',
        }}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#c9a96e' }}
              >
                <span
                  className="font-serif font-bold text-xl"
                  style={{ color: '#153838' }}
                >
                  A
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-serif text-lg font-semibold">
                  Ateliers d'Ange
                </div>
                <div
                  className="text-sm"
                  style={{ color: '#c9a96e' }}
                >
                  Cuisine Authentique
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        className="flex items-center space-x-1 text-white hover:opacity-80 transition-opacity duration-200 font-serif text-lg"
                        style={{ color: isDropdownOpen ? '#c9a96e' : 'white' }}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-48 rounded-xl py-2 shadow-lg"
                            style={{ backgroundColor: '#e6daca' }}
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 hover:opacity-80 transition-opacity duration-200"
                                style={{ color: '#153838' }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:opacity-80 transition-opacity duration-200 font-serif text-lg"
                      style={{ color: item.href === '/' ? '#c9a96e' : 'white' }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Shopping Cart */}
              <button
                className="relative p-2 text-white hover:opacity-80 transition-opacity duration-200"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-6 h-6" />
                <span
                  className="absolute -top-1 -right-1 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ backgroundColor: '#c9a96e', color: '#153838' }}
                >
                  3
                </span>
              </button>

              {/* CTA Button */}
              <div className="hidden sm:block">
                <button
                  className="px-4 py-2 rounded-3xl font-semibold text-sm transition-all duration-300"
                  style={{ backgroundColor: '#c9a96e', color: '#153838' }}
                >
                  Réserver
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t"
              style={{
                backgroundColor: '#0f3238',
                borderColor: 'rgba(201, 169, 110, 0.2)',
              }}
            >
              <Container>
                <div className="py-4 space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-white hover:opacity-80 transition-opacity duration-200 font-serif text-lg py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          borderBottom: '1px solid rgba(201, 169, 110, 0.2)',
                          color: item.href === '/' ? '#c9a96e' : 'white',
                        }}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  <div className="pt-4">
                    <button
                      className="w-full px-4 py-3 rounded-3xl font-semibold"
                      style={{ backgroundColor: '#c9a96e', color: '#153838' }}
                    >
                      Réserver un atelier
                    </button>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
