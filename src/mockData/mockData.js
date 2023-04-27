import skiPic1 from "../assets/images/skiPic1.jpeg";
import skiPic2 from "../assets/images/skiPic2.jpeg";
import skiPic3 from "../assets/images/skiPic3.jpeg";
import skiPic4 from "../assets/images/skiPic4.jpeg";
import skiPic5 from "../assets/images/skiPic5.jpeg";
// import skiPic6 from "../assets/images/skiPic6.jpeg";
import skiPic7 from "../assets/images/skiPic7.jpeg";
import skiPic8 from "../assets/images/skiPic8.jpeg";
import skiPic9 from "../assets/images/skiPic9.jpeg";
import skiPic10 from "../assets/images/skiPic10.jpeg";

// const skiPicArr = [ 
//   { skiPic1 },
//   { skiPic2 },
//   { skiPic3 },
//   { skiPic4 },
//   { skiPic5 },
//   { skiPic6 },
//   { skiPic7 },
//   { skiPic8 },
//   { skiPic9 },
//   { skiPic10 },
// ];

const mockData = [
  {
    id: 1,
    name: "Les Arcs",
    location: "Bourg-Saint-Maurice",
    country: "France",
    website: "https://en.lesarcs.com/",
    cost: "££££",
    highestPoint: "3250m",
    transferTime: ["2h30", "3h15"],
    audience: ["Locals", "Family", "Party", "Experts"],
    snowpark: true,
    skiArea: "425km",
    images: [skiPic1, skiPic2, skiPic3]
  },
  {
    id: 2,
    name: "Whistler Blackcomb",
    location: "British Columbia",
    country: "Canada",
    website: "https://www.whistlerblackcomb.com/",
    cost: "£££££",
    highestPoint: "2436m",
    transferTime: ["2h30", "3h30"],
    audience: ["Locals", "Family", "Party", "Experts"],
    snowpark: true,
    skiArea: "200km",
    images: [skiPic5, skiPic4, skiPic9]
  },
  {
    id: 3,
    name: "Meribel",
    location: "The 3 Valleys",
    country: "France",
    website: "https://www.meribel.net/en/",
    cost: "£££",
    highestPoint: "3456m",
    transferTime: ["1h45"],
    audience: ["Party", "Experts"],
    snowpark: true,
    skiArea: "250km",
    images: [skiPic7, skiPic8, skiPic9]
  },
  {
    id: 4,
    name: "Niseko",
    location: "Hokkaido",
    country: "Japan",
    website: "https://www.niseko.ne.jp/en/",
    cost: "£££££",
    highestPoint: "4321m",
    transferTime: ["3h45", "12h12"],
    audience: ["Locals", "Experts"],
    snowpark: false,
    skiArea: "6543km",
    images: [skiPic1, skiPic10, skiPic2]
  },
  
  {
    id: 5,
    name: "Les Tignes",
    location: "Mountains",
    country: "France",
    website: "https://www.niseko.ne.jp/en/",
    cost: "£££",
    highestPoint: "234m",
    transferTime: ["2h12", "3h15"],
    audience: ["Locals", "Party", "Experts"],
    snowpark: false,
    skiArea: "999km",
    images: [skiPic3, skiPic4, skiPic8],

  },
  {
    id: 6,
    name: "St Anton",
    location: "Just off M4",
    country: "Austria",
    website: "https://en.lesarcs.com/",
    cost: "£££",
    highestPoint: "2765m",
    transferTime: ["1h14", "2h15"],
    audience: ["Party"],
    snowpark: true,
    skiArea: "1234km",
    images: [skiPic7, skiPic4, skiPic9],

  },
  {
    id: 7,
    name: "Val di Fassa",
    location: "Sellaronda",
    country: "Italy",
    website: "www.google.com",
    cost: "££££",
    highestPoint: "8762m",
    transferTime: ["1h00", "4h30"],
    audience: ["Locals"],
    snowpark: false,
    skiArea: "1000km",
    images: [skiPic1, skiPic10, skiPic7],
  },
  {
    id: 8,
    name: "Les Deux Alps",
    location: "Next to the one alp",
    country: "France",
    website: "https://www.niseko.ne.jp/en/",
    cost: "££££",
    highestPoint: "8112m",
    transferTime: ["1h00", "4h30"],
    audience: ["Locals"],
    snowpark: false,
    skiArea: "1540km",
    images: [skiPic1, skiPic9, skiPic3],
  },
  {
    id: 9,
    name: "Soll",
    location: "Soll",
    country: "Austria",
    website: "https://www.niseko.ne.jp/en/",
    cost: "££££",
    highestPoint: "2341m",
    transferTime: ["2h11", "5h15"],
    audience: ["Party", "Experts"],
    snowpark: false,
    skiArea: "9439km",
    images: [skiPic4, skiPic10, skiPic8]
  },

];

export default mockData;
