import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts  } = props
    return (
        <div className='flex justify-between items-center mb-3 border border-black p-3 rounded-lg w-80'> 
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-ligth'>FECHA: 26.02.24</span>
                    <span className='font-ligth'>CANTIDAD: {totalProducts}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronDoubleRightIcon className="bg-da h-6 w-6 text-black-800" />
                </p>
            </div>
        </div>
    )

}

export default OrdersCard