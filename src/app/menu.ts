export interface IMenu {
    id: number;
    menuName: string;
    linkPage: string;
    user: string;
    admin: string;
    menuDescription: string;
    cellija: string;
    menuMeta: string;
    content_body: string;
    image: string;
}
export interface IContent {
    id: number;
    naslov: string;
    sadrzaj: string;
    link: string;
    slika: string;
    date: string;
    home: string;
    promo: number;
    eventDate: Date;
    description: string;
}