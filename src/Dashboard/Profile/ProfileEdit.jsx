import React from 'react';
 // Import the Sidebar component

const ProfileEdit = () => {
  return (
    <div className=" flex">
     
      {/* Main content */}
      <div className="w-full p-8">
        <div className="bg-white p-6 rounded-lg ">
          <div className='flex justify-between'>
          <h2 className="text-[21px]  font-bold  text-[#999999] mb-6">Edit Profile</h2>
          <p  className='text-[#999999] text-[14px] font-bold inter_ff'>last update August 1</p>
          </div>
        
          <form className="space-y-4   w-full">
            <div className='flex xs:flex-col sm:flex-col gap-8'>
            <div className='w-[50%] xs:w-full sm:w-full md:w-full'> 
            <div className="flex space-x-4 my-4">
              <div className="w-1/2  xs:w-full sm:w-full md:w-full">
                <label className=" text-[#083A50] text-[14px] inter_ff font-bold">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue="mobina"
                />
              </div>
              <div className="w-1/2  md:w-full xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px] inter_ff  font-bold">Surname</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue="Mir"
                />
              </div>
            </div>

            <div className='my-4'>
              <label className="text-[#083A50] text-[14px] inter_ff font-bold">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter value"
              />
            </div>

            <div>
              <label className="text-[#083A50] text-[14px] inter_ff font-bold">Specialization</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="Medical"
              />
            </div>
            </div>
           
<div className='w-[50%] xs:w-full sm:w-full'>
<div className="flex space-x-4 my-4">
              <div className="w-1/2   xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px] inter_ff  font-bold">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter value"
                />
              </div>
              <div className="w-1/2  xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px]  inter_ff font-bold">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="+98 9120000000"
                />
              </div>
            </div>

            <div className="flex my-4 space-x-4">
              <div className="w-1/2 xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px] inter_ff  font-bold">Country</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select</option>
                </select>
              </div>
              <div className="w-1/2  xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px]  inter_ff font-bold">City</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Software</option>
                </select>
              </div>
            </div>
</div>
            </div>
        
           

            <button className="w-1/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
