import { ChevronDown, Github, Linkedin, Mail, Twitch, Twitter } from 'lucide-react';
import React from 'react'

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementId('projets').scrollIntoView({behavior: 'smooth'});
    };

  return (
    <section className='min-h-screen mt-14 lg:mt-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='max-w-4xl mx-auto'>
                {/*Avatar/badge*/}
                <div className='w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 p-1'>
                    <div className='w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center'>
                        <img src="img1.jpg" alt="Avatar" className='w-full h-full rounded-full' />
                    </div>
                </div>
                <h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6'>
                    Je suis{" "}
                    <span className='bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent'>
                        Njayou Fewou Soulemane
                    </span>
                </h1>
                <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
                    Développeur Full Stack passionné par la création d'application web modernes et perfomantes
                </p>
                {/* Bouton CTA */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
                    <button onClick={scrollToProjects}
                      className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-mediun text-lg flex items-center gap-2 shadow-lg'>
                        Voir mes projets
                        <ChevronDown className='w-5 h-5'/>
                      </button>
                      <a href="https://wa.me/688209056" className='border-green-600 text-green-600 hover:text-green-600 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg'>
                        Me contacter
                       </a>
                </div>
                {/* Social links*/}
                <div className='flex justify-center gap-6'>
                    <a href="https://github.com/soulemanefewou"
                       target='_blank'
                       rel='noopener noreferrer'
                       className='text-gray-600 dark:text-gray-400 hover:text-gray-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full'>
                        <Github className='w-6 h-6'/>
                       </a>

                    <a href="https://github.com/soulemanefewou"
                       target='_blank'
                       rel='noopener noreferrer'
                       className='text-gray-600 dark:text-gray-400 hover:text-gray-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full'>
                        <Linkedin className='w-6 h-6'/>
                       </a>

                    <a href="https://github.com/maximedoaw"
                       target='_blank'
                       rel='noopener noreferrer'
                       className='text-gray-600 dark:text-gray-400 hover:text-gray-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full'>
                        <Twitter className='w-6 h-6'/>
                       </a>

                    <a href="mailto:njayoufewousoulemane@gmail.com"
                       target='_blank'
                       rel='noopener noreferrer'
                       className='text-gray-600 dark:text-gray-400 hover:text-gray-600 transition-colors p-3 hover:bg-white dark:hover:bg-gray-800 rounded-full'>
                        <Mail className='w-6 h-6'/>
                       </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
