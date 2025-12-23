import React from 'react'

const SkillCard = ({skillCategory}) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 dark:border-emerald-800/50'>
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6 text-center bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent'>
            {skillCategory.category}
        </h3>

        <div className="grid grid-cols-3 gap-4">
            {skillCategory.skills.map((skill,index) => (
                <div key={index} className='flex flex-col items-center group'>
                    <div className='w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center p-3 border-2 border-emerald-300 dark:border-emerald-600 shadow-sm group-hover:border-emerald-500 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-2'>
                        {skill.image ? (
                            <img src={skill.image} alt={skill.name} className='w-full h-full object-contain'/>
                           
                        ):(
                            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                {skill.name.charAt(0)}
                            </span>
                        )}
                    </div>
                    <span className="text-xs font-mediun text-emerald-700 dark:text-emerald-300 text-center group-hover:text-emerald-800 dark:group-hover:text-emerald-200 transition-colors">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillCard
