import type { LinkType } from "../type/type";


export const linkHeader:LinkType[] = [
    {
        text:"الرئيسية",
        href:'/',
    },
    {
        text:"من نحن",
        href:'#!',
    },
    {
        text:"الوحدات",
        href:'#!',
    },
    {
        text:"المفضلة",
        href:'#!',
    },
    {
        text:" تواصل معانا",
        href:'#!',
    },
    // {
    //     text:"",
    //     href:'#!',
    // }
]
import ArFlag from "@assets/flag/flagAr.png";
import EnFlag from "@assets/flag/flagEn.webp";
export const DropDownLangData:LinkType[] = [
    {
        text:"العربية",
        aria:"العربية",
        href:'#!',
        ImageSrc:ArFlag,
        Img:{
            alt:"العربية",}
    },
    {
        text:"English",
        aria:"English",
        href:'#!',
        ImageSrc:EnFlag,
        Img:{
            alt:"English",}

    },
] 
