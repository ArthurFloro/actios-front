"use client"

import { Instagram } from "lucide-react"
import { Logo } from "../logo"
import {  LinkedinLogoIcon, FacebookLogoIcon,InstagramLogoIcon } from "@phosphor-icons/react";



export function Footer() {
    return (
        <footer className="bottom-0 p-12 bg-white">
            <div>
                <div className="flex items-center justify-center gap-4">
                    <Logo font={3}/>
                    <div className="flex items-center gap-4  flex-col justify-center">
                        <h1>© todos os direitos reservados</h1>

                        <div className="flex items-center gap-2">
                        <InstagramLogoIcon size={30}/>    
                        <FacebookLogoIcon size={30}/>
                        <LinkedinLogoIcon size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )   
}