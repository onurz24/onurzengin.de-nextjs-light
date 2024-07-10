// Burger.tsx
'use client'
import { useSelector, useDispatch } from "react-redux";
import "../.././assets/styles/components/Navbar/BurgerMenu.scss";
import { RootState } from "@/store/store";
import { Toggle } from "@/store/BurgerSlice";
import { useEffect } from "react";

export const BurgerMenu = () => {
const IsOpen = useSelector((state: RootState) => state.IsOpen);
const dispatch = useDispatch();

useEffect(() => {
    if (IsOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
        document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
    }

    // Clean up function to reset overflow style when component unmounts
    return () => {
        document.body.style.overflow = "auto";
    };
}, [IsOpen]); // Run effect whenever isOpen changes


return (
    <div
    onClick={() => {dispatch(Toggle());}}
    className={`BurgerMenu ${IsOpen ? "clicked" : ""}`}
    >
        <span></span>
    </div>

);};