'use client'
import "../.././assets/styles/components/Navbar/Sidebar.scss";
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

export const Sidebar = () => {

    const IsOpen = useSelector((state : RootState) => state.IsOpen);
    return(
        <div className={`Sidebar ${IsOpen ? "Show_Sidebar" : ""}`}>
        </div>
    )
}