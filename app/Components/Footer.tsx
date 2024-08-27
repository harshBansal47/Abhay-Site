import { Facebook,Instagram, Linkedin, LucideIcon, Twitter } from "lucide-react"
import React from "react"

export default function Footer(){
    return(
        <footer className="bg-slate-300 text-md text-gray-800 px-10 py-10">
            <div className="container mx-auto flex flex-col items-center text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center text-sm mb-4">
                    <span>&copy; 2024 Shanti Accounting & Taxation. All rights reserved.</span>
                    <div className="h-8 w-[0.5px] mx-3 bg-gray-400"></div>
                    <span>Providing expert accounting and taxation services with integrity.</span>
                    <div className="h-8 w-[0.5px] mx-3 bg-gray-400"></div>
                    <span>Care for all your Financial Needs</span>
                </div>
                <div className="mb-4">
                    <a href="/privacy-policy" className="mx-2 hover:text-gray-500">Privacy Policy</a>
                    <a href="/terms-of-service" className="mx-2 hover:text-gray-500">Terms of Service</a>
                    <a href="/contact" className="mx-2 hover:text-gray-500">Contact Us</a>
                </div>
                <SocialMediaLinks className="" links={socialMediaLinks}/>
            </div>
        </footer>
    )
}




// Social Media Links Component
const socialMediaLinks= [
    {
        url: 'https://www.facebook.com/shantiaccountingtaxation/',
        icon: Facebook,
        label: 'Facebook',
    },
    {
        url: 'https://twitter.com/shantiaccounting',
        icon: Twitter,
        label: 'Twitter',
    },
    {
        url: 'https://www.linkedin.com/company/shantiaccounting',
        icon: Linkedin,
        label: 'LinkedIn',
    },
    {
        url: 'https://www.instagram.com/shantiaccounting',
        icon: Instagram,
        label: 'Instagram',
    },
];

const SocialMediaLinks:React.FC<{links:{url:string,label:string,icon:LucideIcon}[] ,className:string}> = ({links,className}) => {
    return (
        <div className={`flex justify-center space-x-5 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.url}
                    className="p-2 rounded bg-slate-300 group hover:bg-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                >
                    <link.icon className="text-gray-800 group-hover:text-gray-100" />
                </a>
            ))}
        </div>
    )
}