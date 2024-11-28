import React, { useState } from "react";
import OrderHistory from "../components/OrderHistory";
import Wishlist from "../components/WishList";

const Profile = () => {
  // State for showing modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // State for form inputs
  const [editFormData, setEditFormData] = useState({
    username: "Sanjeep joshi",
    email: "sanjeep@gmail.com",
    phone: "9876543210",
    address: "lalitpur",
  });

  const [profileImage, setProfileImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
            
      };
      reader.readAsDataURL(file);
    }
  };

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  // Handle input changes for edit profile form
  const handleEditProfileChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Handle input changes for change password form
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Handle form submission for editing profile
  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsEditModalOpen(false);
  };

  // Handle form submission for changing password
  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
    setIsPasswordModalOpen(false);
  };

  return (
    <>
      {/* User Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-3xl border-collapse border mx-40 m-0 px-30 mt-3">
        <div className="flex justify-center mb-6">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full  flex items-center justify-center overflow-hidden relative">
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label
              htmlFor="imageUpload"
              className="absolute inset-0 cursor-point bg-opacity-50 flex items-center justify-center text-white text-sm">
               <div className="w-24 h-24 rounded-full  flex items-center justify-center overflow-hidden relative">
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label
              htmlFor="imageUpload"
              className="absolute inset-0 cursor-pointer  bg-opacity-50 flex items-center justify-center text-white text-sm">
    
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* User Info in Two Columns */}
        <div className="grid mx-auto ml-40 grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-xl mx-auto font-semibold text-gray-800">Name: {editFormData.username}</p>
          
          </div>
          <div>
            <p className="text-xl ml-20 font-semibold text-gray-800">Email: {editFormData.email}</p>
            
          </div>
          <div>
            <p className="text-xl  font-semibold text-gray-800">Address: {editFormData.address}</p>
          </div>
          <div>
            <p className="text-xl ml-20 font-semibold text-gray-800">Phone: {editFormData.phone}</p>
          </div>
        </div>

        {/* Buttons for editing profile and changing password */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit Profile
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
            onClick={() => setIsPasswordModalOpen(true)}
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Order History */}
      <OrderHistory />

      {/* Wishlist */}
      <Wishlist />

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
            <form onSubmit={handleEditProfileSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="username"
                  value={editFormData.username}
                  onChange={handleEditProfileChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditProfileChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={editFormData.phone}
                  onChange={handleEditProfileChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="address"
                  value={editFormData.address}
                  onChange={handleEditProfileChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Address"
                />
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Change Password</h2>
            <form onSubmit={handleChangePasswordSubmit}>
              <div className="space-y-4">
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Current Password"
                />
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="New Password"
                />
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
                >
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
