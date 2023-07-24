import { useEffect, useState } from 'react';
import { getAllBooks } from '../../Redux/actions';
import TiendaItemsContenedor from "../../components/Store/TiendaItemsContenedor/TiendaItemsContenedor";
import "./Store.css";
import { useDispatch, useSelector } from 'react-redux';
import Filter from "../../components/Store/Filter/Filter"
import Order from "../../components/Store/Order/Order";
//import Search from "../../components/Store/Search/Search";
import Pagination from "../../components/Store/Pagination/Pagination";

const Store = () => {
  
  const dispatch = useDispatch();
  const ebooks = useSelector(state => state.LocalPersist.books);

  // const ebooks = [
  //   {
  //     "id": 1,
  //     "author": "John Doe",
  //     "title": "The Adventures of Wonderland",
  //     "price": 9.99,
  //     "description": "Follow Alice as she enters a magical world filled with curious creatures and enchanting adventures.",
  //     "publisher": "Adventure Books Ltd.",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Adventure",
  //     "reviews": 23,
  //     "stars": 4.4,
  //     "publicationDate": "2023-07-15",
  //     "image":[
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51QqAHWPH7L._SY346_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 2,
  //     "author": "Jane Smith",
  //     "title": "Mystery at Midnight Manor",
  //     "price": 12.50,
  //     "description": "Unravel the mysteries of Midnight Manor in this gripping thriller filled with unexpected twists.",
  //     "publisher": "Mystery publishers Inc.",
  //     "pages": 450,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Mystery",
  //     "reviews": 35,
  //     "stars": 3.8,
  //     "publicationDate": "2023-06-20",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 3,
  //     "author": "Alex Johnson",
  //     "title": "The Science of Everything",
  //     "price": 14.99,
  //     "description": "Embark on a journey through the wonders of science and unravel the mysteries of the universe.",
  //     "publisher": "Science Books Publishing",
  //     "pages": 550,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science",
  //     "reviews": 12, 
  //     "stars": 4.9,
  //     "publicationDate": "2023-08-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 4,
  //     "author": "Sarah Thompson",
  //     "title": "Romantic Escapes",
  //     "price": 8.99,
  //     "description": "Get lost in these romantic tales that will transport you to dreamy destinations and ignite your heart.",
  //     "publisher": "Love Stories Publishing",
  //     "pages": 280,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 8, 
  //     "stars": 2.3,
  //     "publicationDate": "2023-09-05",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 5,
  //     "author": "Michael Turner",
  //     "title": "Cyberpunk Chronicles",
  //     "price": 11.25,
  //     "description": "Immerse yourself in the futuristic world of cyberpunk where technology meets chaos and adventure.",
  //     "publisher": "Tech Noir Publications",
  //     "pages": 420,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 15, 
  //     "stars": 3.2,
  //     "publicationDate": "2023-05-18",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51pboSz98NL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 6,
  //     "author": "Emily Davis",
  //     "title": "Beyond the Stars",
  //     "price": 10.99,
  //     "description": "Embark on an interstellar journey to explore alien worlds and unravel the secrets of the cosmos.",
  //     "publisher": "Galaxy Explorations",
  //     "pages": 380,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 29, 
  //     "stars": 4.7,
  //     "publicationDate": "2023-07-28",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/41fFwONqqTL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 7,
  //     "author": "David Williams",
  //     "title": "The Lost Treasure",
  //     "price": 9.50,
  //     "description": "Join the treasure hunt to uncover a long-lost treasure buried deep within a mysterious island.",
  //     "publisher": "Treasure Hunters Press",
  //     "pages": 340,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Adventure",
  //     "reviews": 6, 
  //     "stars": 1.8,
  //     "publicationDate": "2023-04-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/41iKT76SP9L._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 8,
  //     "author": "Jessica Anderson",
  //     "title": "Whispers in the Woods",
  //     "price": 7.99,
  //     "description": "Explore the haunted woods where eerie whispers and ghostly apparitions lurk in the darkness.",
  //     "publisher": "Spooky Tales Publishing",
  //     "pages": 300,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Horror",
  //     "reviews": 17, 
  //     "stars": 3.6,
  //     "publicationDate": "2023-08-22",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51n4Qmne+3L._PJprime-reading2,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 9,
  //     "author": "Olivia White",
  //     "title": "The Enchanted Forest",
  //     "price": 10.50,
  //     "description": "Discover the magic within the enchanted forest, where mythical creatures and ancient spells reside.",
  //     "publisher": "Fantasy Realms",
  //     "pages": 410,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Fantasy",
  //     "reviews": 14, 
  //     "stars": 3.1,
  //     "publicationDate": "2023-06-15",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51eIIi71G+L._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 10,
  //     "author": "William Turner",
  //     "title": "The Secret Society",
  //     "price": 11.99,
  //     "description": "Unravel the secrets of a mysterious society that holds the key to ancient knowledge and power.",
  //     "publisher": "Mysterious Manuscripts",
  //     "pages": 400,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Mystery",
  //     "reviews": 33, 
  //     "stars": 4.9,
  //     "publicationDate": "2023-07-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51nStq7g0xL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 11,
  //     "author": "Sophia Lee",
  //     "title": "Love in Paris",
  //     "price": 8.75,
  //     "description": "Experience a romantic journey through the charming streets of Paris and find love in unexpected places.",
  //     "publisher": "Romantic Escapes Publications",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 22, 
  //     "stars": 4.3,
  //     "publicationDate": "2023-05-05",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 12,
  //     "author": "Jason Adams",
  //     "title": "Asteroid Impact",
  //     "price": 9.50,
  //     "description": "Embark on a thrilling adventure to save humanity from an impending asteroid impact.",
  //     "publisher": "Cosmic Catastrophes",
  //     "pages": 340,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 19, 
  //     "stars": 4.0,
  //     "publicationDate": "2023-06-20",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/412CdHg-rrL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 13,
  //     "author": "Ella Brown",
  //     "title": "Haunted Mansion",
  //     "price": 7.99,
  //     "description": "Explore the eerie haunted mansion and uncover its dark secrets and chilling history.",
  //     "publisher": "Spooky Tales Publishing",
  //     "pages": 300,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Horror",
  //     "reviews": 10, 
  //     "stars": 2.8,
  //     "publicationDate": "2023-07-28",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/512LAKbMh0L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 14,
  //     "author": "Liam Jackson",
  //     "title": "Dragon's Lair",
  //     "price": 11.25,
  //     "description": "Embark on an epic quest to rescue the kingdom from the clutches of a fearsome dragon.",
  //     "publisher": "Epic Adventures Publishing",
  //     "pages": 420,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Fantasy",
  //     "reviews": 28, 
  //     "stars": 4.5,
  //     "publicationDate": "2023-04-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51qxcWgpiSL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 15,
  //     "author": "Emma Roberts",
  //     "title": "The Cryptic Codex",
  //     "price": 9.99,
  //     "description": "Decode the cryptic codex and uncover the ancient secrets hidden within its enigmatic pages.",
  //     "publisher": "Mysterious Manuscripts",
  //     "pages": 380,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Mystery",
  //     "reviews": 9, 
  //     "stars": 2.1,
  //     "publicationDate": "2023-08-22",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51Zlu84N15L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 16,
  //     "author": "Lucas Thompson",
  //     "title": "Galactic Explorers",
  //     "price": 10.50,
  //     "description": "Join the intrepid Galactic Explorers on their mission to uncover the mysteries of the cosmos.",
  //     "publisher": "Galaxy Explorations",
  //     "pages": 410,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 20, 
  //     "stars": 3.5,
  //     "publicationDate": "2023-06-15",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51mSWCtzDfL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 17,
  //     "author": "Sophie Turner",
  //     "title": "Love in Venice",
  //     "price": 8.75,
  //     "description": "Experience the magic of Venice as two souls find love amid the stunning canals and historic landmarks.",
  //     "publisher": "Romantic Escapes Publications",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 13, 
  //     "stars": 3.7,
  //     "publicationDate": "2023-07-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51br09C3UXL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 18,
  //     "author": "Michael Adams",
  //     "title": "Time Travelers",
  //     "price": 11.99,
  //     "description": "Embark on a thrilling journey through time with a group of daring time travelers.",
  //     "publisher": "Timeless Adventures",
  //     "pages": 400,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 7, 
  //     "stars": 2.6,
  //     "publicationDate": "2023-05-05",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51Jxc4sb3XL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 19,
  //     "author": "Emily Davis",
  //     "title": "The Haunting of Blackwood Manor",
  //     "price": 7.99,
  //     "description": "Delve into the chilling legend of Blackwood Manor and confront the malevolent spirits that dwell within.",
  //     "publisher": "Spooky Tales Publishing",
  //     "pages": 300,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Horror",
  //     "reviews": 31, 
  //     "stars": 4.6,
  //     "publicationDate": "2023-08-28",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61Yr-QHNU8L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 20,
  //     "author": "Natalie Turner",
  //     "title": "The Dragon's Hoard",
  //     "price": 11.25,
  //     "description": "Venture into the heart of the dragon's lair to claim the legendary treasure hidden within.",
  //     "publisher": "Epic Adventures Publishing",
  //     "pages": 420,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Fantasy",
  //     "reviews": 25, 
  //     "stars": 4.2,
  //     "publicationDate": "2023-09-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/41zbGZ4u2wL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 21,
  //     "author": "Sophia Lee",
  //     "title": "Love in London",
  //     "price": 8.75,
  //     "description": "Explore the romantic city of London and find love in the most unexpected places.",
  //     "publisher": "Romantic Escapes Publications",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 30, 
  //     "stars": 4.8,
  //     "publicationDate": "2023-07-15",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/41dFU9f+JQL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 22,
  //     "author": "Thomas Johnson",
  //     "title": "Time Traveler's Journal",
  //     "price": 11.99,
  //     "description": "Discover the time traveler's journal and follow their incredible adventures throughout history.",
  //     "publisher": "Timeless Adventures",
  //     "pages": 400,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 3, 
  //     "stars": 1.5,
  //     "publicationDate": "2023-06-20",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/419nbvvLEyS._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 23,
  //     "author": "Emma Davis",
  //     "title": "The Ghostly Inn",
  //     "price": 7.99,
  //     "description": "Stay the night at the haunted inn and face the spectral entities that wander its halls.",
  //     "publisher": "Spooky Tales Publishing",
  //     "pages": 300,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Horror",
  //     "reviews": 11, 
  //     "stars": 3.0,
  //     "publicationDate": "2023-08-22",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/512CeT4SUKL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 24,
  //     "author": "Lucas White",
  //     "title": "The Wizard's Apprentice",
  //     "price": 10.50,
  //     "description": "Embark on a magical apprenticeship with the powerful wizard and learn the secrets of arcane arts.",
  //     "publisher": "Fantasy Realms",
  //     "pages": 410,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Fantasy",
  //     "reviews": 26, 
  //     "stars": 4.1,
  //     "publicationDate": "2023-06-15",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51fW+C6511L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 25,
  //     "author": "William Anderson",
  //     "title": "The Enigma Files",
  //     "price": 9.99,
  //     "description": "Crack the enigmatic codes and unravel the secrets hidden within the mysterious Enigma Files.",
  //     "publisher": "Mysterious Manuscripts",
  //     "pages": 380,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Mystery",
  //     "reviews": 16, 
  //     "stars": 3.4,
  //     "publicationDate": "2023-07-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51JOj9t3DqL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 26,
  //     "author": "Emily Turner",
  //     "title": "Love in Rome",
  //     "price": 8.75,
  //     "description": "Experience the romantic allure of Rome as two hearts collide amidst the ancient ruins and grand architecture.",
  //     "publisher": "Romantic Escapes Publications",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 27, 
  //     "stars": 4.3,
  //     "publicationDate": "2023-09-05",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cAoX5708L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 27,
  //     "author": "Michael Adams",
  //     "title": "Time Traveler's Dilemma",
  //     "price": 11.99,
  //     "description": "Witness the time traveler's dilemma as they grapple with the complexities of altering the past.",
  //     "publisher": "Timeless Adventures",
  //     "pages": 400,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Science Fiction",
  //     "reviews": 36, 
  //     "stars": 4.9,
  //     "publicationDate": "2023-07-28",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51va8u2CiwL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 28,
  //     "author": "Emma Roberts",
  //     "title": "The Haunting of Willow House",
  //     "price": 7.99,
  //     "description": "Investigate the haunting of Willow House and confront the malevolent spirits that haunt its halls.",
  //     "publisher": "Spooky Tales Publishing",
  //     "pages": 300,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Horror",
  //     "reviews": 5, 
  //     "stars": 1.2,
  //     "publicationDate": "2023-08-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51FAZTV2LuL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 29,
  //     "author": "Olivia White",
  //     "title": "The Dragon's Prophecy",
  //     "price": 10.50,
  //     "description": "Embark on a quest to fulfill the ancient dragon's prophecy and bring balance to the world.",
  //     "publisher": "Epic Adventures Publishing",
  //     "pages": 410,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Fantasy",
  //     "reviews": 24, 
  //     "stars": 4.4,
  //     "publicationDate": "2023-04-10",
  //     "image": [
  //       {
  //         "url": "https://m.media-amazon.com/images/I/41i4r1VCW3L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   },
  //   {
  //     "id": 30,
  //     "author": "Sophia Lee",
  //     "title": "Love in New York",
  //     "price": 8.75,
  //     "description": "Experience the romance and excitement of New York City as two hearts find each other in the bustling metropolis.",
  //     "publisher": "Romantic Escapes Publications",
  //     "pages": 320,
  //     "format": "PDF",
  //     "language": "English",
  //     "category": "Romance",
  //     "reviews": 13, 
  //     "stars": 4.1,
  //     "publicationDate": "2023-09-20",
  //     "image":[
  //       {
  //         "url": "https://ik.imagekit.io/mvt24ohb0ne/tr:n-img_details/covers-5/9786313000128.jpg",
  //         "title": "image1"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/61RqoZLpaJL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image2"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51cuIOKdL4L._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image3"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51kYdfdd4WL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image4"
  //       },
  //       {
  //         "url": "https://m.media-amazon.com/images/I/51HiS06teZL._PJku-sticker-v7,TopRight,0,-50._SY300__CACHEBUSTER_.jpg",
  //         "title": "image5"
  //       },
  //     ]
  //   }
  // ]
  
  const [currentPage, setCurrentPage] = useState(1); 
  const booksPerPage = 9;
  
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastBook = currentPage * booksPerPage; 
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = ebooks?.length > 0 && ebooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  ); 

  return (
    <div className="ContainerGridFilterColumn">
      <div className="FilterStore">
        <Filter />
      </div>
      <section className="BooksView">
        <div className="OrderStore">   
          <Order setCurrentPage={setCurrentPage}/>
        </div>
        <div>
          <TiendaItemsContenedor ebooks={currentBooks} setCurrentPage={setCurrentPage}/>
        </div>
        <div className="PaginationConteinerTienda">
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={ebooks?.length}
            currentPage={currentPage}
            handlePaginate={handlePaginate}
          />
        </div>
      </section>
    </div>
  );
}

export default Store;