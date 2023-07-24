import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, updateUser } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector((state) => state.LocalPersist.userInfo);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
  console.log(user);
  
  const [initialProfile, setInitialProfile] = useState({
    // image: userInfo.image,
    name: userInfo.name,
    email: userInfo.email,
    birthDate: userInfo.birthDate,
    phone: userInfo.phone,
    country: userInfo.country,
  });

  const [editedProfile, setEditedProfile] = useState({
    // image: userInfo.image,
    name: userInfo.name,
    email: userInfo.email,
    birthDate: userInfo.birthDate,
    phone: userInfo.phone,
    country: userInfo.country,
  });

  const userProfile = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const isProfileFetchedRef = useRef(false);
  const [editing, setEditing] = useState(false);
  const email = user.email;

  useEffect(() => {
    if (!isProfileFetchedRef.current && isAuthenticated) {
      dispatch(getUserId(email));
      isProfileFetchedRef.current = true;
    }
  }, [dispatch, isAuthenticated, email]);

  useEffect(() => {
    if (userProfile) {
      setInitialProfile(userProfile);
      setEditedProfile(userProfile);
    }
  }, [userProfile]);

  useEffect(() => {
    if (editedProfile) {
      // Actualizar los valores registrados con useForm cuando editedProfile cambia
      setValue("name", editedProfile.name || "");
      setValue("email", editedProfile.email || "");
      setValue("birthDate", editedProfile.birthDate || "");
      setValue("phone", editedProfile.phone || "");
      setValue("country", editedProfile.country || "");
    }
  }, [editedProfile, setValue]);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedProfile(initialProfile);
    reset(initialProfile);
  };

  const handleSaveProfile = (data) => {
    const formData = new FormData();
    // formData.append("image", editedProfile.image);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("birthDate", data.birthDate);
    formData.append("phone", data.phone);
    formData.append("country", data.country);

    dispatch(updateUser(formData));
    setEditing(false);
    setInitialProfile(data);
    setEditedProfile(data);
    reset(editedProfile);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setEditedProfile((prevState) => ({ ...prevState, image: reader.result }));
    };

    if (file) {
  reader.readAsDataURL(file);
}
};

return (
<ChakraProvider>
  <div className="profile-container">
    <div className="profile-header">
      {/* <img src={logo} alt="logo" className="logo-profile" /> */}
      <h1 className="profile-title">My profile</h1>
    </div>
    <div className="profile-content">
      {/* <div className="profile-image">
        <img src={editedProfile.image} alt="profile" className="profile-image" />
        {editing && (
          <div className="image-upload">
            <input type="file" accept="image/*" onChange={handleProfileImageChange} />
          </div>
        )}
      </div> */}
      <form className="profile-form" onSubmit={handleSubmit(
        handleSaveProfile
        )}>
        <label htmlFor="name" className="profile-label">
         Full name
        </label>
        <Input
          type="text"
          id="name"
          className="profile-input"
          isDisabled={!editing}
          defaultValue={editedProfile.name}
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error-message">Required field</span>}
        <label htmlFor="email" className="profile-label">
          Email
        </label>
        <Input
          type="email"
          id="email"
          className="profile-input"
          isDisabled={!editing}
          defaultValue={editedProfile.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-message">Required field</span>}
        <label htmlFor="birthDate" className="profile-label">
          Birthdate
        </label>
        <Input
          type="date"
          id="birthDate"
          className="profile-input"
          isDisabled={!editing}
          defaultValue={editedProfile.birthDate}
          {...register("birthDate", { required: true })}
        />
        {errors.birthDate && <span className="error-message">Required field</span>}
        <label htmlFor="phone" className="profile-label">
          Phone number
        </label>
        <Input
          type="tel"
          id="phone"
          className="profile-input"
          isDisabled={!editing}
          defaultValue={editedProfile.phone}
          {...register("phone", { required: true })}
          placeholder="Ej: +5493815709293"
        />
        {errors.phone && <span className="error-message">Required field</span>}
        <label htmlFor="country" className="profile-label">
          Country
        </label>
        <Input
          type="text"
          id="country"
          className="profile-input"
          isDisabled={!editing}
          defaultValue={editedProfile.country}
          {...register("country", { required: true })}
        />
        {errors.country && <span className="error-message">Required field</span>}
     <div className="button-group">
          {!editing && (
            <Button
              type="button"
              className="edit-button"
              onClick={() => setEditing(true)}
            >
              Edit
            </Button>
          )} 
           {editing && ( 
            <div>
              <Button type="submit" className="save-button">
                Save
              </Button>
              <Button
                type="button"
                className="cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </Button>
            </div>
           )}
        </div>
      </form>
    </div>
  </div>
</ChakraProvider>
);
}

export default Profile;