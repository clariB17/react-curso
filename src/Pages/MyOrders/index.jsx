import { useContext } from "react"
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import { ShoppingCardContext } from '../../Contex'
import OrdersCard from '../../Components/OrdersCard'


function MyOrders() {
    const context = useContext(ShoppingCardContext)
    console.log(context.order)
    return (
        <Layout>
            <h1 className='m-6'>MyOrders</h1>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders
