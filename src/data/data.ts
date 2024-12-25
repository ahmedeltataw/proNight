import type { LinkType ,infoRentCardType ,footerListType} from "../type/type";

export const linkHeader:LinkType[] = [
    {
        text:"الرئيسية",
        href:'/',
    },
    {
        text:"من نحن",
        href:'Aboutus.html',
    },
    {
        text:"الوحدات",
        href:'Units.html',
    },
    {
        text:"المفضلة",
        href:'Favorites.html',
    },
    {
        text:" تواصل معانا",
        href:'Contactus.html',
    },
    {
        text:"الملف الشخصي",
        href:'Profile.html',
    },
    {
        text:"حجوزاتي",
        href:'Reservations.html',
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

import Mobile from "@assets/Svg/mobile.svg";
import Pen from "@assets/Svg/pen.svg";
import Home from "@assets/Svg/home.svg";
export const infoRentCardData:infoRentCardType[]=[
    {
        title:'1. اختر التاريخ والمواقع',
        src:Pen,
        des:'حدد تاريخ ومكان استئجار وحدتك. ضع في اعتبارك عوامل مثل مسار رحلتك ومواقع وحدتك (على سبيل المثال، جدة أو وسط المدينة) ومدة الاستئجار.',
        aos:{
            effect:"fade-up",
            time:"1000",
            delay:"100"
        }
    },
    {
        title:'2. تاكد من تاريخ الحجز',
        src:Mobile,
        des:'تأكد من توفرالوحدة التي تريدها في التاريخ والمكان الذي اخترته. تأكد من أسعار الإيجار والضرائب والرسوم وأي تكاليف إضافية.',
        aos:{
            effect:"fade-up",
            time:"1100",
            delay:"200"
        }
    },
    {
        title:'3. احجز وحدتك',
        src:Home,
        des:'بمجرد العثور على وحدتك المناسبة، انتقل إلى إجراء الحجز. قم بتوفير المعلومات المطلوبة، بما في ذلك بياناتك وبيانات الحجز ومعلومات الاتصال وتفاصيل الدفع.',
        aos:{
            effect:"fade-up",
            time:"1200",
            delay:"300"
        }
    },
]
import why from "@assets/Svg/why-1.svg";
import why2 from "@assets/Svg/why-2.svg";
import why3 from "@assets/Svg/why-3.svg";

export const cardWhyChooseData:infoRentCardType[]=[
    {
        title:'حجز سهل وسريع',
        src:why,
        aos:{
            effect:"fade-up",
            time:"1000",
            delay:"100"
        }
    },
    {
        title:'العديد من مواقع الاستلام',
        src:why2,
        aos:{
            effect:"fade-up",
            time:"1000",
            delay:"200"
        }
    },
    {
        title:'رضا العملاء',
        src:why3,
        aos:{
            effect:"fade-up",
            time:"1000",
            delay:"300"
        }
    },
]

export const footerListData:footerListType[]=[
    {
        title:"الدعم الفني",
        links:[
            {
                href:"#!",
                text:"حسابي",
            },
            {
                href:"#!",
                text:"سياسة الخصوصية",
            },
            {
                href:"#!",
                text:"شروط الاستخدام",
            },
            {
                href:"#!",
                text:"الاعدادت",
            }
        ],
        aos:{
            effect:"fade-down",
            time:"800",
            delay:"100"
        }
    },
    {
        title:"روابط سريعة",
        links:[
            {
                href:"#!",
                text:"الرئيسة",
            },
            {
                href:"#!",
                text:"من نحن",
            },
            {
                href:"#!",
                text:"تسجيل كمقدم خدمة ",
            },
            {
                href:"#!",
                text:"المفضلة",
            }
        ],
        aos:{
            effect:"fade-down",
            time:"800",
            delay:"200"
        }
    },
    {
        title:"الشركة",
        links:[
            {
                href:"#!",
                text:"من نحن",
            },
            {
                href:"#!",
                text:"المجتمع",
            },
            {
                href:"#!",
                text:" التوظيف ",
            },
            {
                href:"#!",
                text:"فريق العمل",
            }
        ],
        aos:{
            effect:"fade-down",
            time:"800",
            delay:"300"
        }
    },
]

export const footerContactData:footerListType[]=[
    {
        title:'تواصل معنا',
        links:[
            {
                href:"#!",
                text:'+966567239173',
                icon:{
                    name:'phone',
                },
            },
            {
                href:"#!",
                text:'info@pronight.com',
                icon:{
                    name:'email',
                },
            },
        ],
        aos:{
            effect:"fade-down",
            time:"800",
            delay:"400"
        }
    }
]