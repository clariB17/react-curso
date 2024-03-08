import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Contex'
import OrderCard from '../OrderCard'
import { totalPrice} from '../../utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCardContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.closeCheckoutSideMenu()
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XCircleIcon className='h-6 w-6 text-black-500 cursor-pointer' onClick={()=> context.closeCheckoutSideMenu()}/>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => ( 
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />)
                )
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <samp className='font-light'>Total:</samp>
                    <samp className='font-medium text2xl'>${totalPrice(context.cartProducts)}</samp>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full py-3 text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...' onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu

