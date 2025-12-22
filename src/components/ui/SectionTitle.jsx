import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            {title}
        </h2>
        {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {subtitle} 
            </p>
        )}
        <div className='w-24 h-1.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6 rounded-full'></div>
    </div>
  )
}

export default SectionTitle
