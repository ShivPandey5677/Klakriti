import React, { useContext, useEffect, useState } from 'react'
import { makeRequest } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
const ProductDisplay = () => {
  
  const [bidPrice, setBidPrice] = useState('');
  // Sample product data
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ullamcorper velit, id laoreet  at.',
  //     price: 100,
  //     image_path: 'assets/1.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: 'Sed tincidunt elit ut justo scelerisque, ac rutrum leo aliquam. Aenean vel ultrices leo, a ultrices elit.',
  //     price: 150,
  //     image_path: 'assets/1.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     description: 'Nulla facilisi. Nunc nec magna sit amet odio vehicula gravida. Nullam suscipit ultrices neque vitae fringilla.',
  //     price: 200,
  //     image_path: 'product3.jpg',
  //   },
  //   {
  //     id: 4,
  //     name: 'Product 4',
  //     description: 'Praesent in fringilla leo. Mauris in ipsum vel arcu cursus luctus. Sed tincidunt nunc sed ex fringilla.',
  //     price: 120,
  //     image_path: 'product4.jpg',
  //   },
  //   {
  //     id: 5,
  //     name: 'Product 5',
  //     description: 'Vestibulum auctor leo nec sapien dictum convallis. Cras auctor turpis a purus vestibulum, nec interdum justo malesuada.',
  //     price: 180,
  //     image_path: 'product5.jpg',
  //   },
  //   {
  //     id: 6,
  //     name: 'Product 6',
  //     description: 'Another product description.',
  //     price: 220,
  //     image_path: 'product6.jpg',
  //   },
  //   {
  //     id: 7,
  //     name: 'Product 7',
  //     description: 'Yet another product description.',
  //     price: 90,
  //     image_path: 'product7.jpg',
  //   },
  //   {
  //     id: 8,
  //     name: 'Product 8',
  //     description: 'Description of product 8.',
  //     price: 130,
  //     image_path: 'product8.jpg',
  //   },
  //   {
  //     id: 9,
  //     name: 'Product 9',
  //     description: 'Description of product 9.',
  //     price: 170,
  //     image_path: 'product9.jpg',
  //   },
  //   {
  //     id: 10,
  //     name: 'Product 10',
  //     description: 'Description of product 10.',
  //     price: 200,
  //     image_path: 'product10.jpg',
  //   },
  // ];
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const {currentUser}=useContext(AuthContext);
  const navigate=useNavigate()
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoaded(true);
  //     controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
  //   }, 250);

  //   return () => clearTimeout(timeout);
  // }, [controls]);

  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["products"],
      queryFn: () => makeRequest.get("/products").then((res) => {
        return res.data;
      })
    }
  )
  const handleInputChange = (field, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property) =>
         ({ ...property, [field]: value })
      )
    );
  };
  const handleSubmit = async (productId,productImg,productName) => {
    try {
      console.log(currentUser)
      const { id, name } = currentUser._doc;

      const response = await makeRequest.post("/bidders/placebid", {
        userId: id,
        name,
        productId,
        productImg,
        productName,
        bidPrice, // Pass the bid price to the backend
      });

      console.log("Bid placed successfully:", response.data);
      navigate("/bid")
    } catch (error) {
      console.log("Error placing bid:", error);
    }
  };
  const products=data
  console.log(products)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-wrap justify-start overflow-x-auto p-10 mt-20">
      {products.map((product) => (
        <div key={product._id} className="w-64 h-96 mr-10 mb-10 bg-opacity-80 border border-gray-300 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img src={`uploads/${product.product_imgurl}`} alt="Product Image" className="w-full h-auto max-h-40 rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.product_name}</h3>
            <p className="text-gray-600">{product.product_desc}</p>
            <strong className="block  mb-2">Price (Rs.): {product.product_price}</strong>
           { product.product_type=="general"?<a href={`add_to_cart.php?id=${product._id}`} className="bg-gradient-to-r from-orange-500 to-orange-800 text-white text-center py-2 px-4 rounded-lg block hover:bg-green-600 transition-colors">
              Add to Cart
            </a>:<div className="flex flex-col"><input type="text" name="bidprice" placeholder='Enter Bid Price' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center',fontFamily:'Gills Sans',fontWeight:'bolder' }} onChange={(e) => setBidPrice(e.target.value)}/> 
             <button onClick={() => handleSubmit(product._id,product.product_imgurl,product.product_name)} className="bg-red-500 text-white py-2 px-4 rounded-full mt-8" style={{ width: '50%', marginTop: '20px', backgroundColor: '#ff4d4f', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Place Bid
            </button></div>
}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
