import './navbar.scss'
import {NavLink,  Link } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            
            <ul className='nav_list'>
                
                {/* <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}> */}
                <li className='nav_list_item'>
                    {/* <Link  to='/'>
                        Accueil
                    </Link> */}
                    <NavLink  to='/'
            className={({isActive}) => isActive ? 'nav_list_item_active' : 'nav_list_item'}>
                        Accueil
                    </NavLink>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
