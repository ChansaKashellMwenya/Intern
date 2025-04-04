import React from 'react'
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


const api = axios.create({
  // baseURL: 'https://your-api-url.com/api', // Replace with your .NET API URL
});


const fetchProfile = async () => {
  const { data } = await api.get('/profile');
  return data;
};

const updateProfile = async (profileData) => {
  const { data } = await api.put('/profile', profileData);
  return data;
};

const deleteAccount = async () => {
  await api.delete('/profile');
};

function ProfilePage() {

  const queryClient = useQueryClient();


  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });


  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(['profile']);
    },
  });

  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {

      window.location.href = '/';
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const profileData = {
      profilePictureUrl: formData.get('profilePictureUrl'),
      name: formData.get('name'),
      email: formData.get('email'),
      bio: formData.get('bio'),
    };
    updateProfileMutation.mutate(profileData);
  };

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className='bg-[#02091c] min-h-screen'>
      <div className='flex justify-center px-4 py-8'>
        <div className='bg-[#020817] p-8 rounded-lg w-full max-w-3xl text-white'>
          <div className='text-white text-3xl'>Your Profile</div>
          <br />
          <div className='text-gray-500'>Manage your account information and preferences</div>
          <div className='pt-10'>
            <form action="" onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <div className='flex gap-10 mb-5 items-center'>
                 
                    <img src={profile?.profilePictureUrl} className="w-30 h-30 bg-[#1F2937] rounded-full flex items-center justify-center text-2x" />
                 
                  <div className='flex-1'>
                    <label htmlFor="" className=''> Profile Picture URL</label>
                    <br />
                    <br />
                    <input type="text" placeholder={profile?.profilePictureUrl} className='mb-3 w-full p-2 rounded bg-[#020817] border border-gray-700 text-gray-300' />

                    <div className='pt-2 text-gray-600'> Enter a URL of your profile picture</div>
                  </div>
                </div>
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Name</label>
                    <br />
                    <br />
                    <input type="text" placeholder={profile?.name} className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
                <br />
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Email</label>
                    <br />
                    <br />
                    <input type="text" placeholder={profile?.email} className='w-full border border-gray-700 rounded p-3' />
                  </div>
                </div>
                <br />
                <div className=''>
                  <div>
                    <label htmlFor="" className='font-bold'>Bio</label>
                    <br />
                    <br />
                    <textarea name="" id="" className='w-full border border-gray-700 p-3 mb-5' rows={4} defaultValue={profile?.bio} placeholder='tell about yourself'></textarea>
                  </div>
                </div>
                <button className='bg-blue-600 p-2 w-40 h-10 rounded text-black mb-5'  disabled={updateProfileMutation.isPending}>
                {updateProfileMutation.isPending ? 'Saving...' : 'Save Changes'}

                </button>
                <hr className='border-gray-700 mb-5' />
                <div className='text-2xl text-red-900 mb-5'>Danger Zone</div>
                <div className='text-gray-600 mb-5'>Once you delete your account, there is no going back. Please be certain.</div>
                <div className='flex justify-end'>
                  <button className='bg-red-800 rounded px-6 py-2' onClick={() => {
                      if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                        deleteAccountMutation.mutate();
                      }
                    }}
                    disabled={deleteAccountMutation.isPending}>Delete Account</button>
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