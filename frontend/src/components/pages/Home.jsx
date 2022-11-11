import { useDispatch,useSelector } from 'react-redux'
import { getProducts } from '../../db/productFetchs';

import HeroSectionCarousel from "../layouts/HeroSectionCarousel";
import ProductList from "../layouts/productList";

const Home = () => {

    const dispatch = useDispatch()
    const Products = useSelector((state) => state.Products)

    dispatch(getProducts)

    console.log('Products :>> ', Products);

    return ( 
        <>
        <HeroSectionCarousel/>
        <ProductList/>

        </>
     );
}
 
export default Home;