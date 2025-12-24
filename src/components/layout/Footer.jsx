import { a, li } from 'framer-motion/client';
import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import React from 'react'

const Footer = () => {
        const currentYear = new Date().getFullYear();
    
        const links = [
            { name: 'Accueil', href: '#home' },
            { name: 'À propos', href: '#about' },
            { name: 'Projets', href: '#projects' },
            { name: 'Expérience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
        ];
    
        const socialLinks = [
            {
                name: 'GitHub',
                icon: Github,
                href: 'https://github.com/maximedoaw',
            },
            {
                name: 'LinkedIn',
                icon: Linkedin,
                href: 'www.linkedin.com/in/maxime-doaw-5849b8293', // Placeholder, à mettre à jour si nécessaire
            },
            {
                name: 'Email',
                icon: Mail,
                href: 'mailto:maximedoaw204@gmail.com', // Placeholder
            },
        ];
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                {/*Brand Section*/}
                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent'>
                        Maxime Doaw
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 max-w-xs'>
                        Développeur Full Stack passionné par la création d'expériences web modernes et performantes.
                    </p>
                </div>

                {/*Quick links*/}
                <div>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                        Liens rapides
                    </h4>
                    <ul className='space-y-2'>
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className='text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400
                                transition-colors'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/*Social links*/}
                <div>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                        Me suivre
                    </h4>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a key={social.name}
                               href= {social.href}
                               target='_blank'
                               rel='noopener noreferrer'
                               className='p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 hover: bg-emerlad-500
                               hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300
                               ' 
                               aria-label= {social.name}>
                                <social.icon className='w-5 h-5'/>
                               </a>
                        ))}
                    </div>
                </div>
            </div>

            {/*Copyright */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className='text-gray-600 dark:text-gray-400 text-sm text-center md:text-left'>
                     © {currentYear} Maxime Doaw. Tous droits réservés.
                </p>
                <p className='text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1'>
                    Fait avec <Heart className='w-4 h-4 text-red-500 fill-current'/> et React
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
