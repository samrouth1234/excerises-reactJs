import ProductCard from './ProductCard'
import React, { useEffect, useState } from "react"
import SkeletonCard from './SkeletonCard';


export default function ProductLst() {

const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
        setTimeout(() => {
            setData(data);
            setLoading(false);
        }, 2000);
    })
  }, []);

  const products = data.filter((value) => value.id <= 19).map((data)=> (
    <ProductCard key={data.id} data={data} />
  ))

  const load = Array.from({length : 9}).map((v, i) => <SkeletonCard />)
  
  return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {loading ? load : products}
        </div>
    </div>
  )
}
