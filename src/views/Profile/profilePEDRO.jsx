import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ChakraProvider, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, updateUser, getUser } from "../../Redux/actions";
import { useForm } from "react-hook-form";
import "./Profile.css";
import Select from 'react-select';
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const userProfile = useSelector((state) => state.LocalPersist.userProfile);
  const defaultImageURL = "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png";
  const dispatch = useDispatch()
  const [countryOptions, setCountryOptions] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

   useEffect(() => {
    const loadCountryOptions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/countries');
        const countries = response.data.map(country => ({
          value: country.name,
          label: country.name,
        }));
        setCountryOptions(countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    loadCountryOptions();
  }, []);

  const [initialProfile, setInitialProfile] = useState({
    name: userProfile?.name || "",
    email: userProfile?.email || "",
    birthDate: userProfile?.birthDate || "",
    phone: userProfile?.phone || "",
    country: userProfile?.country || "",
    image: userProfile?.image || "",
  });

  const [editedProfile, setEditedProfile] = useState({
    name: userProfile?.name || "",
    email: userProfile?.email || "",
    birthDate: userProfile?.birthDate || "",
    phone: userProfile?.phone || "",
    country: userProfile?.country || "",
    image: userProfile?.image || "",
  });
  
  const isProfileFetchedRef = useRef(false);
  const [editing, setEditing] = useState(false);
  const email = userProfile?.email || '';
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    console.log(file)
  };

  const handleDeleteImage = () => {
    setSelectedImage(defaultImageURL);
  };



  // useEffect(() => {
  //   if (!editing) {
  //     setInitialProfile(userProfile);
  //     reset(userProfile);
  //   }
  // }, [editing, editedProfile, reset]);

  const handleSaveProfile = (formData) => {
   console.log(formData)
    const data = {
      name: formData.name,
      birthDate: formData.birthDate,
      file: selectedImage,
      phone: formData.phone,
      email: formData.email,
      country: selectedOption,
      // country: formData.country,
    };
  
    console.log(selectedImage);
    console.log(data, 'esto mando al back');
    dispatch(updateUser(data));
    setInitialProfile(data); // Opcionalmente, si quieres actualizar el estado initialProfile con los datos del formulario enviado
    setEditing(false);
    reset();
  };
  
  return (
    <ChakraProvider>
      <div className="profile-container">
          <h1 className="profile-title">My profile</h1>
        <div className="profile-content">
          <form method="POST" className="profile-form" onSubmit={handleSubmit(handleSaveProfile)} enctype="multipart/form-data">
          <div className="perfil-image">
              <img
                src={selectedImage ? URL.createObjectURL(selectedImage) : editedProfile.image || defaultImageURL }
                alt="profile"
                className="profile-image"
              />
              {editing && (
                <div className="image-buttons">
                  <label htmlFor="image" className="upload-button">
                    Upload Image
                    <Input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleProfileImageChange}
                      accept="image/*"
                    />
                  </label>
                  <button className="delete-button" onClick={handleDeleteImage}>
                    Delete Image
                  </button>
                     </div>
                 )}
                </div> 
            <label htmlFor="name" className="profile-label">
              Full name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
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
              name="email"
              className="profile-input"
              isDisabled
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
              name="birthDate"
              className="profile-input"
              isDisabled={!editing}
              defaultValue={editedProfile.birthDate}
              {...register("birthDate", {
                required: {
                  value: true,
                  message: "Date of birth is required",
                },
                validate: (value) => {
                  const fechaNacimiento = new Date(value);
                  const fechaActual = new Date();
                  const edad =
                    fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                  return edad >= 18 || "You must be of legal age";
                },
              })}
            />
            {errors.birthDate && (
          <span  className="error-message">{errors.birthDate.message}</span>
        )}
            <label htmlFor="phone" className="profile-label">
              Phone number
            </label>
            <Input
              type="text"
              id="phone"
              name="phone"
              className="profile-input"
              placeholder="Ej: +549 11 12345678"
              isDisabled={!editing}
              defaultValue={editedProfile.phone}
            {...register("phone", {
              maxLength: 16,
              required: "The field cannot be empty",
              pattern: {
                value:
                  /^\+(?:[0-9]?){1,3}[-. (]*(?:[0-9]{1,})[-. )]*(?:[0-9]{1,})[-. ]*(?:[0-9]{1,})$/,
                message:
                  "Please enter a valid phone number (example: +549 11 12345678)",
              },
            })}
            />
             {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
            {errors.phone?.type === "maxLength" && (
              <p className="error-message"> Ingrese un contacto vÃ¡lido</p>
            )}
            {/* {errors.phone && <span className="error-message">Required field</span>} */}
            <label htmlFor="country" className="profile-label">
              Country
            </label>
           
            <Select
              id="country"
              name="country"
              className="profile-input"
              isDisabled={!editing}
              // defaultValue={editedProfile.country}
               {...register("country", { required: true })}
              value={countryOptions.find(option => option.value === selectedOption)}
              onChange={(option) => setSelectedOption(option.value)}
              options={countryOptions}
            />
            {errors.country && <span className="error-message">Country is required</span>}
            <div className="button-group">
              {!editing && (
                <Button type="button" className="edit-button" onClick={handleEditProfile}>
                  Edit
                </Button>
              )}
              {editing && (
                <div>
                  <Button 
                  type="submit" 
                  className="save-button"
                  onClick={handleSubmit(handleSaveProfile)}
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    className="cancel-button"
                    onClick={handleCancelEdit}
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
};

export default Profile;