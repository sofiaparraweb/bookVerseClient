import axios from "axios";
//import PropTypes from 'prop-types';
//import style from "./TiendaItems.module.css";
import { Link } from "react-router-dom"
//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import { getCarrito, addToCart, setGridView } from "../../../Redux/actions"
import { Image, Input, FormLabel, Textarea, Card, Text, Heading, CardBody, CardFooter, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Box, Divider, Grid } from '@chakra-ui/react'
//import { Toaster, toast } from "react-hot-toast";
//import { useAuth0 } from "@auth0/auth0-react";
import "./TiendaItems.css"; 

const TiendaItems = ({ id, author, title, price, description, publisher, pages, language, category, reviews, stars, publicationDate, image, Reviews }) => {
  
  // const dispatch = useDispatch();
  // const user_id = useSelector(state => state.LocalPersist.userInfo.id);
  // const userName = useSelector(state => state.LocalPersist.userInfo.fullName);
  // const mail = useSelector(state => state.LocalPersist.userInfo.mail);
  // const Cart = useSelector((state) => state.LocalPersist.Carrito.Products);
  // const { isAuthenticated } = useAuth0();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [quantity, setQuantity] = useState(0);

  const firstImage = image[0];
  
  // useEffect(()=>{
  //   dispatch(getCarrito(user_id))
  // },[dispatch])
  
  // const [review, setReview] = useState({  // --------------------------------------------------REVIEWS
  //   user_id:`${user_id}`, /* <----------------------- FALTA ASIGNARLE BIEN EL USERID QUE TIENE EL USUARIO QUE COMENTA */
  //   rating: 0,
  //   content: "",
  //   product_id: `${id}`, 
  // })
  
  // const changeHandler = (event) => {
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   setReview({ ...review, [property]: value});
  // }

  return (
    <div className="Card" >
      <Link to={`/detail/${id}`} style={{textDecoration:"none", fontFamily:"Work Sans, sans-serif", fontWeight:"100", color:"#17424b"}}>
        <div className="BookCard">
          <figure className="figureStore">
            <img src={image[0].url} alt="image"/>
          </figure>
        </div>
        <div className="BookCard-data">
          <div className="BookCard-data-flex">
            <p style={{fontSize:"0.9rem"}}>{title}</p>
          </div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", paddingBottom:"1rem"}}>
            <p style={{extTransform:"capitalize", fontSize:"0.8rem"}}>{category}</p>
            <p style={{fontSize:"0.8rem"}}>${price}</p>
          </div>
        </div>
      </Link>
    </div>
    //  <div>
    //     <Card width='280px' h='360px' margin="20px 0" _hover={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}} >
    //       <CardBody>
    //         <div>
    //           {image && image.length > 0 && (
    //             <Image
    //               src={image[0].url}
    //               alt={`imagen Producto`}
    //               maxWidth='270px'
    //               height='220px'
    //               display='block'
    //               margin='auto'
    //               cursor='pointer'
    //             />
    //           )}

    //         </div>
    //         <Heading size='md' paddingTop='3px' >
    //           <Link to={`/detail/${id}`}>
    //             <Text fontSize='l' textTransform='uppercase' fontWeight='normal'>{title}</Text>
    //           </Link>
    //           <Text fontSize='l' fontWeight='normal'> $ {price}</Text>
    //         </Heading>
    //       </CardBody>
    //       <CardFooter h='20%'> 
    //         {/* {isAuthenticated ? ( */}
    //           <>
    //             <Grid templateColumns="repeat(2, 1fr)" gap={1} margin='2% 2%' >
    //               {/* <Box width='80%'>
    //                 <Heading size='md' textAlign='center'>Quantity</Heading>
    //                 <Text py='1' className={style.ContenedorBotonesCart}>
    //                   <button className={style.ButtonsSumaResta} onClick={handleDelete} value="less" >-</button>
    //                     {quantity}
    //                   <button className={style.ButtonsSumaResta} onClick={handleAdd} value="add" >+</button>
    //                 </Text>
    //               </Box> */}
    //               {/* <Box >
    //                 <Button className={style.BotonAddToCart} onClick={()=>handleAddToCart(user_id, id, quantity)} backgroundColor='#B9362C' _hover={{ color:'#124476'}} color='white' fontWeight='normal' fontSize='20px'>
    //                 Add to Cart
    //                 </Button>
    //               </Box> */}
    //             </Grid>
    //           </>
    //          {/* ) : (
    //            <Button className={style.BotonAddToCart} onClick={() => toast.error('must be loggin to add products')} backgroundColor='#B9362C' _hover={{ color: '#124476' }} color='white' fontWeight='normal' fontSize='25px' marginTop='-5px' width='100%' disabled>
    //              Add to Cart
    //            </Button>
    //         )} */}
    //       </CardFooter>
    //     </Card>
    //   </div>
  );
};

export default TiendaItems;