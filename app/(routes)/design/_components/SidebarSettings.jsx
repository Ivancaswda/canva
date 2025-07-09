import React from 'react'

const SidebarSettings = ({selectedOption}) => {

    return (
        <div className='w-[280px] p-5 '>
            <h2 className='font-semibold'>{selectedOption?.name}</h2>
             <p className='text-xs text-gray-600'>{selectedOption?.desc}</p>
                <div className='mt-4'>
                    {selectedOption?.component}
                </div>

        </div>
    )
}
export default SidebarSettings
