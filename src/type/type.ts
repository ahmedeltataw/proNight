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
export interface RosaryType {
    id:string;
    title:string;
}

