import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getAllProduct } from '../../store/productReducer/productReducer';
import { Outlet,Link } from 'react-router-dom';
export default function Products() {
      const [product,setProduct]=useState([]);
     const ditpatch1= useDispatch();
       useEffect(()=>{
       ditpatch1(getAllProduct())
    },[])
     const data= useSelector(state1=>state1);
    const {products}=data.abc;
    const handleClick=(loc)=>{
        //lọc ra những sản phẩm catergory
          // console.log("11111",product);
          setProduct(loc)
    }
  return (
    <div>Products
        {/* {data.map((item)=>(
          
        ))} */}
        Danh mục sản phẩm 
        {products.map((item)=>{
           return  item.map((catergory,index)=>{
              return (
                  <p onClick={()=>handleClick(catergory.product)} key={index}><Link to={"/product"}>{catergory.catergory}</Link>11 </p>
              )
            })
        })}
        {product.map((item)=>{
            return <>
                    <div>
                      <p>tên :{item.name_product}</p>
                      <p>price :{item.price}</p>
                      <p><img src={item.image} alt="" /></p>
                      <Link to={`/product/${item.id}`}>Xem chi tiết sản phẩm </Link>
                  </div>
            </>
        })}
        <Outlet></Outlet>
    </div>
  )
}
