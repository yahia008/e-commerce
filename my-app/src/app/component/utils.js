import axios from "axios"


const apifunc = async() => {
    try{
         const res = await axios.get('https://fakestoreapi.com/products')
           // console.log(res.data)
            return res.data
        }catch(error){
            console.error('Error fetching products:', error);
        }
 
}
 

const addItem = (dispatch, addToCart, newItem) => {
        dispatch(addToCart(newItem))
}

export  {apifunc, addItem}

