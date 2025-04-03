import React from 'react'
import img from '../assets/pic.jpg'

function ProfilePage() {
  return (
    <div className='bg-[#02091c] min-h-screen'>
      <div className='flex justify-center px-4 py-8'>
        <div className='bg-[#020817] p-8 rounded-lg w-full max-w-3xl text-white'>
          <div className='text-white text-3xl'>Your Profile</div>
          <br />
          <div className='text-gray-500'>Manage your account information and preferences</div>
          <div className='pt-10'>
            <form action="" className='space-y-6'>
              <div>
                <div className='flex gap-10 mb-5 items-center'>
                  <div className='w-30 h-30 bg-[#1F2937] rounded-full flex items-center justify-center text-2xl'>
                    T
                  </div>
                  <div className='flex-1'>
                    <label htmlFor="" className=''> Profile Picture URL</label>
                    <br />
                    <br />
                    <input type="text" placeholder='https://example' className='mb-3 w-full p-2 rounded bg-[#020817] border border-gray-700 text-gray-300' />

                    <div className='pt-2 text-gray-600'> Enter a URL of your profile picture</div>
                  </div>
                </div>
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Name</label>
                    <br />
                    <br />
                    <input type="text" placeholder='Name' className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
                <br />
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Email</label>
                    <br />
                    <br />
                    <input type="text" placeholder='Email' className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
                <br />
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Bio</label>
                    <br />
                    <br />
                    <textarea name="" id="" className='w-full border border-gray-700 p-3 mb-5' rows={4} placeholder='Tell about yourself' ></textarea>
                  </div>
                </div>
                <button className='bg-blue-600 p-2 w-40 h-10 rounded text-black mb-5'>
                  Save Changes
                </button>
                <hr className='border-gray-700 mb-5' />
                <div className='text-2xl text-red-900 mb-5'>Danger Zone</div>
                <div className='text-gray-600 mb-5'>Once you delete your account, there is no going back. Please be certain.</div>
                <div className='flex justify-end'>
                <button className='bg-red-800 rounded px-6 py-2'>Delete Account</button>
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