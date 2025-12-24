import { img, li, span } from 'framer-motion/client'
import { Award, Building, Calendar, MapPin } from 'lucide-react'
import React from 'react'

const TimelineItem = ({experience}) => {
  return (
    <div className='relative pl-8 pb-12 last:pb-0 group'>
      {/*Ligne vertical*/}
      <div className='absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 to-green-100 group-last:to-transparent'></div>

      {/*Point sur la timeline*/}
      <div className="absolute left-0 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>

      {/*Carte de contenu*/}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group-hover:border-green-500/30">
        {/*En-tête avec logo*/}

        <div className="flex items-start gap-4 mb-4">
            {/*Espace avatar*/}
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 border boder-green-200 dark:border-green-800">
                {experience.logo ? (
                    <img src={experience.logo} alt={`${experience.company} logo`} className='w-10 h-10 object-contain'/>
                 ) : (
                    <Building className="w-8 h-8 text-green-600 dark:text-green-400"/>
                 )
                }
            </div>
            <div className="flex-1">
                <div className='flex flex-col sm:justify-between sm:items-start gap-2 mb-2'>
                    <div>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors'>
                            {experience.title}
                        </h3>
                        <p className='text-lg text-green-600 dark:text-green-400 font-semibold'>
                            {experience.company}
                        </p>
                    </div>
                    <span className='inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300
                    text-sm px-3 py-1 rounded-full font-medium border border-green-200 dark:border-green-200 dark:border-green-800'>
                        {experience.type}
                    </span>
                </div>

                {/*Métadonnées*/}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className='flex items-center gap-1'>
                        <Calendar className="w-4 h-4"/>
                        {experience.period}
                    </div>
                    <div className='flex items-center gap-1'>
                        <MapPin className = "w-4 h-4"/>
                        {experience.location}
                    </div>
                </div>
            </div>
        </div>
        {/*Description*/}
        <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
            {experience.description}
        </p>

        {/*Réalisations*/}
        <div className="mb-4">
            <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2'>
                <Award className='w-4 h-4 text-green dark:text-green-400'/>
                Principales réalisation
            </h4>
            <ul className='space-y-2'>
                {experience.achievements.map((achievement, index) => (
                    <li key={index} className='flex items-start gap-2 text-gray-600 dark:text-gray-400'>
                        <div className='w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span>{achievement}</span>
                    </li>
                ))}
            </ul>
        </div>
        {/*Technologie */}
        <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
                <span key={index} className='bg-green-50 dark:green-900/20 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-full border
                border-green-200 dark:border-green-800'>
                    {tech}
                </span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
