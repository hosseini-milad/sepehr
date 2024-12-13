const menutrans ={
title:{
    english:"Sepehr",
    persian:"سپهر",
    icon:"fa-shield",
    href:"https://deepware.ir"
    
},
menu:[
    {
        english: "OverView",
        persian: "OverView",
        index:0,
        icon:"fa-dashboard",
        href:"#",
        children:[
        {
            english: "Dashboard",
            persian: "داشبورد",
            index:0,
            icon:"fa-dashboard",
            href:"/",
            url:""
        },
        {
            english: "CRM",
            persian: "پیگیری ها",
            index:0,
            icon:"fa-dashboard",
            href:"/crm",
            url:"crm"
        },
        {
            english: "Report",
            persian: "گزارش",
            index:1,
            icon:"fa-pie-chart",
            href:"/report",
            url:"report"
        },
        ]
    },
    {
        english: "Customers",
        persian: "مشتریان",
        index:1,
        icon:"fa-users",
        href:"#",
        children:[
            {
                english: "Users",
                persian: "مدیریت کاربران",
                index:0,
                icon:"fa-user",
                href:"/users",
                url:"users"
            },
            {
                english: "Access",
                persian: "دسترسی ها",
                index:0,
                icon:"fa-key",
                href:"/access",
                url:"access"
            },
            ]
    },
    {
        english: "Models",
        persian: "مدل ها",
        index:2,
        icon:"fa-model",
        href:"#",
        children:[
            {
                english: "Models List",
                persian: "لیست مدل ها",
                index:0,
                icon:"fa-tasks",
                href:"/models",
                url:"models"
            },
            ]
    },
    
    {
        english: "Help",
        persian: "راهنما",
        index:0,
        icon:"fa-help",
        href:"#",
        children:[
        {
            english: "System Help",
            persian: "راهنمای سیستم",
            index:0,
            icon:"fa-life-ring",
            href:"/help/system",
            url:"help"
        },
        {
            english: "Learn More",
            persian: "آشنایی  با مخاطرات",
            index:0,
            icon:"fa-flask",
            href:"/help/more",
            url:"more"
        }
        ]
    },
],
setting:[
    {
        english: "Panel Config",
        persian: "تنظیمات پنل",
        index:0,
        icon:"fa-cog",
        href:"/config/system",
        url:"config"
    },
    {
        english: "License",
        persian: "گواهی ها",
        index:0,
        icon:"fa-certificate",
        href:"/config/license",
        url:"config"
    },
    {
        english: "Devices",
        persian: "دستگاه ها",
        index:0,
        icon:"fa-mobile",
        href:"/config/mobile",
        url:"config"
    }
]
}
export default menutrans