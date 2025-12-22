import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const menuItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#education' },
    { name: 'Projets', href: '#projects' }
  ];

  const scrollToSection = (href) =>{
    const element = document.querySelector(href)
    if(element){
        element.scrollIntoView({ behavior : 'smooth'})
   }
   setIsMenuOpen(false)
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
        <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
            <a href="#home" className='text-2xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent'>
                Portfolio
            </a>

            {/* Menu desktop*/}
            <div className='hidden md:flex items-center gap-6'>
                {menuItems.map((item) => (
                    <button 
                        key={item.name}
                        onClick= {() => scrollToSection(item.href)}
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors font-medium text-sm"
                    >
                        {item.name}

                    </button>
                ))}
            </div>

            {/*bouton menu mobile*/}
            <button className='md:hidden text-gray-600 dark:text-gray-300' onClick = {() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className= "w-6 h-6"/> : <Menu className="w-6 h-6 "/>}
            </button>
        </div>

        {/*Menu mobile*/}
        {isMenuOpen && (
            <div className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
                <div className='flex flex-col py-4'>
                    {menuItems.map((item) => (
                        <button 
                        key={item.name} 
                        onClick={() => scrollToSection(item.href)}
                        className='px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left font-meduim'>
                          {item.name}
                        </button>
                    ))}
                </div>
            </div>
        )}
        </nav>
    </header>
  )
}

export default Header
