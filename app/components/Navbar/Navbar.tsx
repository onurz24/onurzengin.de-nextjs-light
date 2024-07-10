import "../.././assets/styles/components/Navbar/Navbar.scss";
import Image from 'next/image';
import OZ_Logo from "../.././assets/Images/Logos/OZ_Logo.webp"
import { BurgerMenu } from './BurgerMenu';
import { Sidebar } from './Sidebar';
import Link from "next/link";

interface NavbarProps{

}

export const Navbar = ({}:NavbarProps) => {

    return(
        <nav>
            <BurgerMenu/>
            <Sidebar/>

            <Link href={"#Start"} className="Nav_Logo_Container">
                <Image draggable={false} src={OZ_Logo} className='Nav_Logo_Image' alt='onurzengin.de'/>
                {/* Logo, SVG, or Brand Name : onurzengin.de */}
            </Link>

            <div className="Nav_Links_Container">

                <div className="Nav_Links_Content"> {/* Hide On Mobile */}
                    <Link href='#Start' className="Nav_Link">
                        Start
                    </Link>
                    <Link href='#ÜberMich' className="Nav_Link">
                        Über Mich
                    </Link>
                    <Link href='#Dienstleistungen' className="Nav_Link">
                        Dienstleistungen
                    </Link>
                    <Link href='#Kontakt' className="Nav_Link">
                        Kontakt
                    </Link>
                </div>

            </div>
        </nav>
    )
}