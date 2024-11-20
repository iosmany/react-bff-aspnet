
import React from 'react';
import Link from 'next/link';

const NavLinks = () => {

    return (
        <ul>
            <Link className="px-4 py-2 hover:bg-gray-700 cursor-pointer" href={'/'}>
              Dashboard
            </Link>
            <Link className="px-4 py-2 hover:bg-gray-700 cursor-pointer" href={'/users'}>
              Users
            </Link>
            <Link className="px-4 py-2 hover:bg-gray-700 cursor-pointer" href={'/products'}>
              Profile
            </Link>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Log Out
            </li>
        </ul>
    );
}


export default NavLinks;