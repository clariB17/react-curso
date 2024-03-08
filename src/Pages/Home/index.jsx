import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCardContext } from "../../Contex"
function Home() {

    const context = useContext(ShoppingCardContext)

    const renderView = () => {
        if (context.searchByTitle?.length > 0) { 
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            } else {
                return (
                    <div> No hay coincidencia :( </div>
                )
            }
        } if (context.searchByCategory?.length > 0) {
            if (context.filteredCategory?.length > 0) {
                return (
                    context.filteredCategory?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            } else {
                return (
                    <div> No hay coincidencia :( </div>
                )
            }
        }
        else {
            return (                
                context.items?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        }
    }
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'> Home </h1>
            </div>
            <input type="text" placeholder="Busca un producto" className='rounded-lg border-double border-4 border-pink-500 ... w-80 p-4 mb-4 focus:outline-none focus:border-sky-500 ' onChange={(event) => context.setSearchByTitle(event.target.value)} />
{/*             <input type="text" placeholder="Busca una categoria" className='rounded-lg border border-black w-80 p-4 mb-4' onChange={(event)=> context.setSearchByCategory(event.target.value)}/>
 */}            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home
