import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, Input } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addBook, getBookGenre, getBookLanguage, getBookPublisher, getBookFormat } from "../../../../../Redux/actions";
import { useState, useEffect } from "react";

const initialValues = {
  title: '',
  author: '',
  price: '',
  description: '',
  publicationDate: '',
  image: null,
  gender: '',
  language: '',
  publisher: '',
  format: ''
};

const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const bookSchema = yup.object().shape({
  title: yup.string().required('Required'),
  author: yup.string().required('Required'),
  price: yup.number().required('Required'),
  description: yup.string().required('Required'),
  publicationDate: yup.string().required('Required'),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const allGenres = useSelector(state => state.LocalPersist.bookGenres);
  const allFormats = useSelector(state => state.LocalPersist.bookFormat);
  const allLanguages = useSelector(state => state.LocalPersist.bookLanguage);
  const allPublishers = useSelector(state => state.LocalPersist.bookPublisher);
  const defaultImageURL = "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png";
 
  useEffect(() => {
    dispatch(getBookGenre());
    dispatch(getBookLanguage());
    dispatch(getBookPublisher());
    dispatch(getBookFormat());
  }, [dispatch]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  
  const handleDeleteImage = () => {
    setSelectedImage(defaultImageURL);
  };

  const handleSaveBook = (formData) => {
const data = { 
    title: formData.title,
    author: formData.author,
    price: formData.price,
    description: formData.description,
    publicationDate: formData.publicationDate,
    gender: selectedGender ? allGenres.find(genre => genre.name === selectedGender).id : null,
    language: selectedLanguage ? allLanguages.find(lang => lang.name === selectedLanguage).id : null,
    publisher: selectedPublisher ? allPublishers.find(pub => pub.name === selectedPublisher).id : null,
    format: selectedFormat ? allFormats.find(format => format.name === selectedFormat).id : null,
    image: selectedImage,
    }

    console.log(selectedImage);
    console.log(data, 'esto mando al back');
    dispatch(addBook(data));
   };
  
   
  return (
    <Box m='0px'>
      <Header title='New Book' subtitle='Upload a new book!' />
      <Formik
        onSubmit={handleSaveBook}
        initialValues={initialValues}
        validationSchema={bookSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : 'span 4' }
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Book Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name='title'
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Author'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.author}
                name='author'
                error={!!touched.author && !!errors.author}
                helperText={touched.author && errors.author}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label='Price'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name='price'
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Publication Date'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.publicationDate}
                name='publicationDate'
                error={!!touched.publicationDate && !!errors.publicationDate}
                helperText={touched.publicationDate && errors.publicationDate}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Description'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name='description'
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: 'span 4' }}
              />
              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  onBlur={handleBlur}
                  name="gender"
                  error={!!touched.gender && !!errors.gender}
                >
                  {allGenres && allGenres.map((genre) => (
                    <MenuItem key={genre.id} value={genre.name}>
                      {genre.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Language</InputLabel>
                <Select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  onBlur={handleBlur}
                  name="language"
                  error={!!touched.language && !!errors.language}
                >
                  {allLanguages && allLanguages.map((language) => (
                    <MenuItem key={language.id} value={language.name}>
                      {language.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Publisher</InputLabel>
                <Select
                  value={selectedPublisher}
                  onChange={(e) => setSelectedPublisher(e.target.value)}
                  onBlur={handleBlur}
                  name="publisher"
                  error={!!touched.publisher && !!errors.publisher}
                >
                  {allPublishers && allPublishers.map((publisher) => (
                    <MenuItem key={publisher.id} value={publisher.name}>
                      {publisher.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth variant="filled" sx={{ gridColumn: "span 2" }}>
                <InputLabel>Format</InputLabel>
                <Select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  onBlur={handleBlur}
                  name="format"
                  error={!!touched.format && !!errors.format}
                >
                  {allFormats && allFormats.map((format) => (
                    <MenuItem key={format.id} value={format.name}>
                      {format.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                <InputLabel>Upload Image</InputLabel>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleProfileImageChange}
                  inputProps={{
                    accept: "image/*"
                  }}
                />
              </FormControl>

              {/* Código para mostrar la imagen */}
              <Box className="perfil-image">
                <img
                  src={selectedImage}
                  alt="profile"
                  className="profile-image"
                />
                  <Box className="image-buttons">
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
                    <Button className="delete-button" onClick={handleDeleteImage}>
                      Delete Image
                    </Button>
                  </Box>
              </Box>
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained' mb='200px'>
                Create New Book
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
