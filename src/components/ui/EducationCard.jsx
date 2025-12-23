import { GraduationCap } from 'lucide-react'
import React from 'react'

const EducationCard = ({education}) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-gray-200 dark:border-gray-700 hover:border-emerald-500/30 group'>
      {/* En-tête avec logo */}
      <div className='flex items-start gap-4 mb-4'>
        <div className='w-16 h-16 bg-gradient-to-br from-emmerald-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
            <GraduationCap className="w-8 h-8 text-white"/>
        </div>

        <div className='flex-1'>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors'>
                {education.degree}
            </h3>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
