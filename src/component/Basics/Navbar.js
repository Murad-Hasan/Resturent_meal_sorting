import React from 'react';
import Menu from "./MenuApi";

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((menu,index) => {
                          return  <div key={index} className="btn-group__item" onClick={() => filterItem(menu)}>{menu}</div>
                        })
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;
