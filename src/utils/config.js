import { FaUser } from "react-icons/fa"


export const outOfArray = [1,2,3,4,5];

export const userObj = {
    username: "",
    password: "",
    email: "",
    profilePicture: "",
    firstName: "",
    lastName: "",
    role: "",
    isSuperUser: false,
    isActive: false
}

export const newUserObj = {
    username: "",
    first_name: "",
    last_name: "",
    password: "123HeLLO456WoRLD",
    email: "",
    phone_number: "",
    tckn: "",
    profile_picture: null,
    role: null,
    is_active: false,
    is_staff: true,
    address: "",
}


export const bookObj = {
    "title": "",
    "isbn": "",
    "category": null,
    "author": [],
    "publisher": null,
    "publication_date": null,
    "pages": null,
    "language": "",
    "cover_image": null,
    "stock": null,
    "status": null,
    "description": "",
}


export const USER_ROLES = [
    ["admin", "Admin"],
    ["staff", "Personel"],
    ["member", "Üye"],
]

export const STATUS_CHOICES = [
    ["available", "Mevcut"],
    ["borrowed", "Ödünç Verildi"],
    ["reserved", "Rezerve Edildi"],
    ["lost", "Kayıp"],
]


export const STATUS = {
    "available": {
        text: "Mevcut",
        color: "green"
    },
    "borrowed": {
        text: "Ödünç Verildi",
        color: "green",
    },
    "reserved": {
        text: "Rezerve Edildi",
        color: "green"
    },
    "lost": {
        text: "Kayıp",
        color: "green"
    },
} 



export const isEmpty = (str) => !str.trim().length;

export const roleConditions = {
    admin: {
        title: "Admin Panel",
        url: "/admin",
    },

    staff: {
        title: "Personel Panel",
        url: "/staff",
    },
}


export const loginBtn = {
    title: "Giriş Yap",
    url: "/login"
}

export const navList = [
    {
        title: "Kütüphane",
        url: "/books"
    },
    {
        title: "Hakkımızda",
        url: "/about-us",
    },
    {
        title: "İletişim",
        url: "/contact",
    },
]


export const adminNav = [
    {
        title: "Kitaplar",
        url: "/admin/books",
    },
    {
        title: "Kategoriler",
        url: "/admin/categories",
    },
    {
        title: "Yazarlar",
        url: "/admin/authors",
    },
    {
        title: "Yayınevleri",
        url: "/admin/publishers",
    },
]



