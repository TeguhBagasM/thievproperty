// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";

// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";

// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Rumah modern dengan desain elegan, cocok untuk keluarga besar. Dilengkapi dengan halaman luas dan fasilitas lengkap, terletak di kawasan elit Jakarta.",
    image: House1,
    imageLg: House1Lg,
    city: "Jakarta",
    address: "Jalan Merdeka No. 123, Jakarta",
    bedrooms: "6",
    bathrooms: "3",
    surface: "390 m²",
    year: "2016",
    price: "1500000000",
    agent: {
      image: Agent1,
      name: "Nur Auliya Putri",
      phone: "+6281321821374",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Rumah mewah dengan desain klasik yang memberikan suasana nyaman. Berada di lingkungan tenang dan strategis di Bandung, cocok untuk keluarga.",
    image: House2,
    imageLg: House2Lg,
    city: "Bandung",
    address: "Jalan Pahlawan No. 45, Bandung",
    bedrooms: "6",
    bathrooms: "3",
    surface: "390 m²",
    year: "2016",
    price: "2000000000",
    agent: {
      image: Agent2,
      name: "Bahara Putra",
      phone: "+6281321821374",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Hunian nyaman dengan arsitektur modern dan fasilitas terbaik. Terletak di area strategis Surabaya, memberikan akses mudah ke berbagai pusat kegiatan.",
    image: House3,
    imageLg: House3Lg,
    city: "Surabaya",
    address: "Jalan Diponegoro No. 89, Surabaya",
    bedrooms: "6",
    bathrooms: "3",
    surface: "390 m²",
    year: "2016",
    price: "2500000000",
    agent: {
      image: Agent3,
      name: "Teguh Karya",
      phone: "+6281321821374",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Rumah dengan desain minimalis di kawasan premium Surabaya. Fasilitas lengkap dan keamanan 24 jam, ideal untuk keluarga besar.",
    image: House4,
    imageLg: House4Lg,
    city: "Surabaya",
    address: "Jalan Ahmad Yani No. 56, Surabaya",
    bedrooms: "6",
    bathrooms: "3",
    surface: "390 m²",
    year: "2016",
    price: "2800000000",
    agent: {
      image: Agent4,
      name: "Salma Salsabilla",
      phone: "+6281321821374",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Hunian nyaman di Surabaya dengan pemandangan yang indah dan akses mudah ke berbagai fasilitas umum. Desain kontemporer yang cocok untuk keluarga.",
    image: House5,
    imageLg: House5Lg,
    city: "Surabaya",
    address: "Jalan Gatot Subroto No. 78, Surabaya",
    bedrooms: "5",
    bathrooms: "3",
    surface: "390 m²",
    year: "2015",
    price: "3000000000",
    agent: {
      image: Agent5,
      name: "Rifki Hikmali",
      phone: "+6281321821374",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Rumah luas dengan desain mewah di Bandung. Dilengkapi dengan taman pribadi dan fasilitas lengkap, sangat cocok untuk hunian keluarga besar.",
    image: House6,
    imageLg: House6Lg,
    city: "Bandung",
    address: "Jalan Sudirman No. 101, Bandung",
    bedrooms: "6",
    bathrooms: "3",
    surface: "575 m²",
    year: "2014",
    price: "3500000000",
    agent: {
      image: Agent6,
      name: "Nurulita Septiani",
      phone: "+6281321821374",
    },
  },
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Apartemen modern di pusat Jakarta dengan fasilitas lengkap dan akses mudah ke pusat bisnis. Cocok untuk profesional dan keluarga kecil.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    city: "Jakarta",
    address: "Jalan Thamrin No. 45, Jakarta",
    bedrooms: "2",
    bathrooms: "1",
    surface: "110 m²",
    year: "2012",
    price: "1200000000",
    agent: {
      image: Agent7,
      name: "Valentino Simajuntak",
      phone: "+6281321821374",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Apartemen nyaman di Surabaya dengan desain minimalis dan pemandangan kota. Cocok untuk keluarga yang menginginkan hunian praktis.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    city: "Surabaya",
    address: "Jalan Malioboro No. 10, Surabaya",
    bedrooms: "3",
    bathrooms: "1",
    surface: "95 m²",
    year: "2011",
    price: "1500000000",
    agent: {
      image: Agent8,
      name: "Putri Dwi Rahayu",
      phone: "+6281321821374",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Apartment studio dengan desain minimalis dan modern. Cocok untuk para profesional muda yang membutuhkan akses cepat ke pusat bisnis dan hiburan.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    city: "Jakarta",
    address: "Jl. Gatot Subroto No.55, Jakarta Selatan, Jakarta",
    bedrooms: "1",
    bathrooms: "1",
    surface: "45 m²",
    year: "2021",
    price: "1200000000",
    agent: {
      image: Agent9,
      name: "Ridhwan Zaki",
      phone: "+6281321821374",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description:
      "Rumah modern dengan desain minimalis di lingkungan yang asri. Terdapat taman luas dan dekat dengan fasilitas umum seperti sekolah dan pusat perbelanjaan.",
    image: House7,
    imageLg: House7Lg,
    city: "Jakarta",
    address: "Jl. Kebon Jeruk No.15, Jakarta Barat, Jakarta",
    bedrooms: "4",
    bathrooms: "3",
    surface: "220 m²",
    year: "2017",
    price: "1800000000",
    agent: {
      image: Agent7,
      name: "Valentino Simajuntak",
      phone: "+6281321821374",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description:
      "Rumah bergaya klasik dengan interior mewah. Memiliki kolam renang dan area bersantai yang nyaman, cocok untuk keluarga besar.",
    image: House8,
    imageLg: House8Lg,
    city: "Surabaya",
    address: "Jl. Diponegoro No.20, Surabaya, Jawa Timur",
    bedrooms: "5",
    bathrooms: "4",
    surface: "300 m²",
    year: "2015",
    price: "2500000000",
    agent: {
      image: Agent8,
      name: "Putri Dwi Rahayu",
      phone: "+6281321821374",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description:
      "Rumah nyaman dengan suasana pedesaan di tengah kota. Memiliki halaman luas dan dekat dengan fasilitas olahraga.",
    image: House9,
    imageLg: House9Lg,
    city: "Bandung",
    address: "Jl. Asia Afrika No.45, Bandung, Jawa Barat",
    bedrooms: "3",
    bathrooms: "2",
    surface: "180 m²",
    year: "2016",
    price: "1300000000",
    agent: {
      image: Agent9,
      name: "Ridhwan Zaki",
      phone: "+6281321821374",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description:
      "Rumah minimalis dengan desain modern, terletak di area perumahan elit yang aman dan nyaman.",
    image: House10,
    imageLg: House10Lg,
    city: "Bandung",
    address: "Jl. Sudirman No.12, Bandung, Jawa Barat",
    bedrooms: "4",
    bathrooms: "3",
    surface: "240 m²",
    year: "2018",
    price: "2200000000",
    agent: {
      image: Agent10,
      name: "Dewi Lestari",
      phone: "+6281321821374",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description:
      "Rumah luas dengan arsitektur modern. Dilengkapi dengan fasilitas lengkap seperti kolam renang, taman, dan ruang bermain anak.",
    image: House11,
    imageLg: House11Lg,
    city: "Jakarta",
    address: "Jl. Pahlawan No.23, Jakarta",
    bedrooms: "5",
    bathrooms: "4",
    surface: "350 m²",
    year: "2019",
    price: "3000000000",
    agent: {
      image: Agent11,
      name: "Puan Mahalini",
      phone: "+6281321821374",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description:
      "Rumah dengan desain minimalis dan nuansa alami. Terletak di kawasan perumahan yang asri dan tenang.",
    image: House12,
    imageLg: House12Lg,
    city: "Surabaya",
    address: "Jl. Merdeka No.34, Surabaya",
    bedrooms: "4",
    bathrooms: "3",
    surface: "210 m²",
    year: "2020",
    price: "1700000000",
    agent: {
      image: Agent12,
      name: "Rafli Rizqullah",
      phone: "+6281321821374",
    },
  },

  {
    id: 16,
    type: "Apartment",
    name: "Apartment 4",
    description:
      "Apartemen modern dengan akses mudah ke pusat kota. Fasilitas lengkap seperti kolam renang dan pusat kebugaran, cocok untuk keluarga kecil.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    city: "Jakarta",
    address: "Jl. Thamrin No.15, Jakarta Pusat, Jakarta",
    bedrooms: "2",
    bathrooms: "1",
    surface: "120 m²",
    year: "2015",
    price: "1900000000",
    agent: {
      image: Agent4,
      name: "Salma Salsabilla",
      phone: "+6281321821374",
    },
  },
  {
    id: 17,
    type: "Apartment",
    name: "Apartment 5",
    description:
      "Apartemen dengan desain minimalis di area strategis dekat perkantoran. Fasilitas premium dan keamanan 24 jam.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    city: "Surabaya",
    address: "Jl. Sudirman No.27, Surabaya, Jawa Timur",
    bedrooms: "3",
    bathrooms: "2",
    surface: "150 m²",
    year: "2017",
    price: "2800000000",
    agent: {
      image: Agent5,
      name: "Agung Prasetyo",
      phone: "+6281321821374",
    },
  },
  {
    id: 18,
    type: "Apartment",
    name: "Apartment 6",
    description:
      "Apartemen mewah dengan pemandangan kota dan fasilitas eksklusif seperti lounge, gym, dan spa.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    city: "Bandung",
    address: "Jl. Merdeka No.30, Bandung, Jawa Barat",
    bedrooms: "3",
    bathrooms: "2",
    surface: "160 m²",
    year: "2016",
    price: "2100000000",
    agent: {
      image: Agent6,
      name: "Nurulita Septiani",
      phone: "+6281321821374",
    },
  },
];
