import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../../Redux/actions";
import { useState } from "react";

const genreTest = [
  { "name": "Fiction" },
  { "name": "Novel" },
  { "name": "Science Fiction" },
  { "name": "Fantasy" },
  { "name": "Mystery" },
  { "name": "Romance" },
  { "name": "Adventure" },
  { "name": "History" },
  { "name": "Poetry" },
];

const publisherTest = [
  { "name": "Alfaguara Publishing" },
  { "name": "Anagrama Publishing" },
  { "name": "Planeta Publishing" },
  { "name": "Penguin Random House Publishing" },
  { "name": "Gallimard Publishing" },
  { "name": "Macmillan Publishing" },
  { "name": "Pantheon Books Publishing" },
];

const languageTest = [
  { "name": "Español" },
  { "name": "Inglés" },
  { "name": "Francés" },
  { "name": "Alemán" },
  { "name": "Italiano" },
];

const formatTest = [
  { "name": "EPUB" },
  { "name": "PDF" },
  { "name": "MOBI" },
  { "name": "AZW3" },
  { "name": "CBZ" },
];

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
//   gender: yup.string().required('Required'),
//   language: yup.string().required('Required'),
//   publisher: yup.string().required('Required'),
//   format: yup.string().required('Required')
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  
  const handleSaveBook = (formData) => {
    const data = {
      title: formData.title,
      author: formData.author,
      price: formData.price,
      description: formData.description,
      publicationDate: formData.publicationDate,
      image: selectedImage,
      gender: selectedGender,
      language: selectedLanguage,
      publisher: selectedPublisher,
      format: selectedFormat
    };

    console.log(data);
    dispatch(addProduct(data));
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
                  {genreTest.map((genre) => (
                    <MenuItem key={genre.name} value={genre.name}>
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
                  {languageTest.map((language) => (
                    <MenuItem key={language.name} value={language.name}>
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
                  {publisherTest.map((publisher) => (
                    <MenuItem key={publisher.name} value={publisher.name}>
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
                  {formatTest.map((format) => (
                    <MenuItem key={format.name} value={format.name}>
                      {format.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Add image field and any other required fields here */}
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
