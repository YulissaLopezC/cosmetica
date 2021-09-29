import React from 'react'
import Cabecera from "components/Cabecera";
import Footer from "components/Footer";

const Layout = ({children}) => {
    return (
        <>
        <Cabecera/>
        <main>{children}</main>
        <Footer/>   
        </>
    );
}

export default Layout;
