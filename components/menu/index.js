import React from 'react';

const Menu = ({children}) => (
    <div className="pt-2 pl-2 pr-2 pb-0 border" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {children}
    </div>
);

const MenuHeader = ({children}) => (
    <div className="mb-2 p-2 border small text-center">{children}</div>
);

export default Menu;
export { MenuHeader };