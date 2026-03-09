import { CodeBracketIcon, DevicePhoneMobileIcon, EnvelopeIcon, UserCircleIcon } from '@heroicons/react/16/solid'

import React from 'react'

function Footer() {
    return (
        <footer className='w-full bg-[#489fb5] p-3'>
            <div className='max-w-6xl mx-auto grid grid-cols-2'>
                <div>
                    <div className='flex flex-row gap-3 items-center mb-4'>
                        <UserCircleIcon className='w-8 h-8 bg-[#fff] rounded-full hover:bg-[#ff4d6d] duration-300' />
                        <h1 className='text-white'>Made for: Montiel Domínguez Israel de Jesús Onésimo</h1>
                    </div>
                    <div className='flex flex-row gap-3 items-center mb-4'>
                        <EnvelopeIcon className='w-8 h-8 bg-[#fff] rounded-full hover:bg-[#ff4d6d] duration-300' />
                        <h1 className='text-white text-2'>Email: onearsmstrong03@gmail.com</h1>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row justify-end gap-3 items-center mb-4'>
                        <DevicePhoneMobileIcon className='w-8 h-8 bg-[#fff] rounded-full hover:bg-[#ff4d6d] duration-300' />
                        <h1 className='text-white'>Contact: +52 272 281 8537</h1>
                    </div>
                    <div className='flex flex-row justify-end gap-3 items-center mb-4'>
                        <CodeBracketIcon className='w-8 h-8 bg-[#fff] rounded-full hover:bg-[#ff4d6d] duration-300' />
                        <h1 className='text-white'>Github: 03OneArmstrong</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
