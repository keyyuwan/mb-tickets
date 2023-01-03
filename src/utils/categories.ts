import festasImg from "../assets/categories/festas.jpg";
import kidsImg from "../assets/categories/kids.jpg";
import teatroImg from "../assets/categories/teatro.jpg";
import congressosImg from "../assets/categories/congressos.jpg";
import showsImg from "../assets/categories/shows.jpg";

interface Category {
  id: string;
  name: string;
  img: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Festas",
    img: festasImg.src,
  },
  {
    id: "2",
    name: "Shows",
    img: showsImg.src,
  },
  {
    id: "3",
    name: "Infantil",
    img: kidsImg.src,
  },
  {
    id: "4",
    name: "Teatros",
    img: teatroImg.src,
  },
  {
    id: "5",
    name: "Congressos",
    img: congressosImg.src,
  },
];
