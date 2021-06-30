
import {
  initialDataConstants,
  categoryConstansts,
  productConstants,
  orderConstants,
} from "./constants";
import axios from "../helpers/axios";

export const getInitialData = () => {
    console.warn('getInitialData started');
  return async (dispatch) => {
    const res = await axios.post(`/initialData`);
    if (res.status === 200) {
      const { categories, products } = res.data;
      console.log('categories',categories)
      console.log('products',products)
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
    //   dispatch({
    //     type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
    //     payload: { orders },
    //   });
    }
    console.log(res);
  };
};