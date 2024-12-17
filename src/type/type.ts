export interface LinkType {
    title?: string;
    href: string;
    target?: string;

    id?: string;
    aria?: string;
    icon?: {
        names?: string;
        side: "left" | "right";
        ClassIcon?: string;
    };
    text: string;
    Img?: {
        alt: string,
        side?: "left" | "right",
    },
    ImageSrc?: string | any,
}
export interface infoRentCardType{
    title:string;
    src:string | any;
    des?:string;
    aos?:{
        effect:string |any,
        time:string |any,
        delay:string |any,
    }
}

export interface footerListType{
    title: string,
    links:{
        href: string;
        text: string;
        icon?:{
            name?: string,
        }
    }[],
    aos?:{
        effect:string |any,
        time:string |any,
        delay?:string |any,
    }
}
