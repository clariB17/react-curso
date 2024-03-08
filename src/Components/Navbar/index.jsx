import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ShoppingCardContext } from '../../Contex'

const Navbar = () => {
    const context = useContext(ShoppingCardContext)
    const location = useLocation()

    // Función para actualizar la categoría activa según la ruta actual
    const updateActiveCategory = () => {
        const path = location.pathname.toLowerCase()
        switch (path) {
            case '/clothes':
                context.setSearchByCategory('clothes')
                break
            case '/electronics':
                context.setSearchByCategory('electronics')
                break
            case '/furnitures':
                context.setSearchByCategory('furniture')
                break
            case '/toys':
                context.setSearchByCategory('shoes')
                break
            case '/others':
                // Si la ruta es "/others", no se establece ningún filtro de categoría
                break
            default:
                context.setSearchByCategory('')
                break
        }
    }

    // Llama a la función de actualización al montar el componente
    useEffect(() => {
        updateActiveCategory()
    }, [location.pathname])

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light h-14 bg-gradient-to-r from-purple-500 to-pink-500'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    claraboni@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className="h-6 w-6 text-white-500"/> <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
