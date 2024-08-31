import {React,useEffect,useState} from 'react';
import axios from 'axios';
 // Import the Sidebar component

const ProfileEdit = () => {
  const[firstname,setUsername] = useState()
  const[email,setEmail] = useState()
  const [error, setError] = useState(null);
  const[phone,setPhone] = useState()
  const handleUpdateProfile = async (event) => {
    event.preventDefault(); // Prevent the form from submitting
    try {
      const response = await axios.post('http://localhost:5001/api/updateProfile', {
        name: firstname,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error updating profile:', error.response?.data || error.message);
      setError(error.response?.data?.message || error.message);
      setError(error.message);
    }
  };
  
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name)
    if (user) {
     setUsername(user.name);
    }
    if (user) {
     setEmail(user.email);
    }
    if (user) {
     setPhone(user.phone);
    }
   
  }, []);
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
            <div className='w-[50%] xs:w-full  sm:w-full md:w-full'> 
            <div className="flex space-x-4 my-4">
              <div className="  xs:w-full w-full sm:w-full md:w-full">
             
                <label className=" text-[#083A50] text-[14px] inter_ff font-bold">First Name</label>
                <input type="text" value={firstname} onChange={handleInputChange} placeholder="Enter new name" />
             
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </div>
              {/* <div className="w-1/2  md:w-full xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px] inter_ff  font-bold">Surname</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue="Mir"
                />
              </div> */}
            </div>

            <div className='my-4'>
              <label className="text-[#083A50] text-[14px] inter_ff font-bold">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="......."
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
              <div className="w-full   xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px] inter_ff  font-bold">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={email}
                />
              </div>
              {/* <div className="w-1/2  xs:w-full sm:w-full">
                <label className="text-[#083A50] text-[14px]  inter_ff font-bold">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={phone}
                />
              </div> */}
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
        
           

          
           
            <button 
  type="button" 
  className="w-1/5 bg-blue-500 text-white py-2 rounded hover:bg-blue-600" 
  onClick={handleUpdateProfile}>
  Save
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
