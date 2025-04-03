import React from 'react'
import img from '../assets/pic.jpg'

function ProfilePage() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <div className='flex justify-center px-4 py-8'>
        <div className='bg-black p-8 rounded-lg w-full max-w-2xl text-white'>
          <div className='text-white text-3xl'>Your Profile</div>
          <br />
          <div className='text-gray-500'>Manage your account information and preferences</div>
          <div className='pt-10'>
            <form action="" className='space-y-6'>
              <div>
                <div className='flex gap-10 mb-5 items-center'>
                  <div className='w-20 h-20 bg-[#1F2937] rounded-full flex items-center justify-center text-2xl'>
                    T
                  </div>
                  <div className='flex-1'>
                    <label htmlFor="" className=''> Profile Picture URL</label>
                    <br />
                    <input type="text" placeholder='https://example' className='mb-3 w-full p-2 rounded bg-black border border-gray-700 text-gray-300' />

                    <div className='pt-2 text-gray-600'> Enter a URL of your profile picture</div>
                  </div>
                </div>
                <div className=''>
                  <div>
                    <label htmlFor="" className=''>Name</label>
                    <br />
                    <br />
                    <input type="text" placeholder='Name' className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
                <br />
                <div className=''>
                  <div>
                    <label htmlFor="" className=''>Email</label>
                    <br />
                    <br />
                    <input type="text" placeholder='Email' className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage