import React from 'react';

const ProfileEditContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="mobina"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Surname</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Mir"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter value"
          />
        </div>

        <div>
          <label className="block font-medium">Specialization</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            defaultValue="Medical"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter value"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="+98 9120000000"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium">Country</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block font-medium">City</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>Software</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileEditContent;
