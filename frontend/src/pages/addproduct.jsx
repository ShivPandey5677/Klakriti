import React, { useContext, useState } from "react";
import { makeRequest } from "../axios";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const [catalogue, setCatName] = useState({ catname: "" });
  const navigate=useNavigate();
  const [catalogueData, setCatalogueData] = useState({});
  const [property, setProperty] = useState([
    {
      id: 1,
      name: "",
      price: "",
      desc: "",
      origin: "",
      imgURL: "",
      type: "",
    },
  ]);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const token = document.cookie;
  const handleInputChange = (field, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property) =>
         ({ ...property, [field]: value })
      )
    );
  };

  const handleImage = async () => {
    if (file) {
      const imgUrl = await upload();
      setProperty((prevProperty) =>
        prevProperty.map((prop, index) =>
          index === property.length - 1 ? { ...prop, imgURL: imgUrl } : prop
        )
      );
    }
  };


  // const handleAddProduct = async () => {
  //   const newProduct = {
  //     id: property.length + 1,
  //     name: "",
  //     price: "",
  //     desc: "",
  //     category: "",
  //     imgURL: "",
  //     location: "",
  //   };
  //   setProperty([...property, newProduct]);
  // };
  const handleCategoryChange = (field, value) => {
    setProperty((prevProperty) =>
      prevProperty.map((property) =>
      ({ ...property, [field]: value } )
      )
    );
  };

  // Array of categories
  const handleSubmit = async () => {
    try {
      // Assuming your Express server is running on http://localhost:3001
      const response = await axios.post("http://localhost:8000/api/products/addproduct", property,{
        withCredentials:true,
      });
      console.log("Products added successfully:", response.data);
      navigate("/shop")
    } catch (error) {
      console.log("Error adding products:", error);
    }
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div style={{ backgroundColor: '#333', minHeight: '110vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '150px' }}>
     
      <div style={{ backgroundColor: '#f0f0f0', height: '600px', width: '350px', border: '2px solid #fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',margin:'50px',margintop:'20px' }}>
      <div>
        <h1  className="bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text mix-blend-mode-difference"style={{fontFamily:'Gills Sans',fontWeight:'bolder',fontSize:'40px'}}>Add Product</h1>
      </div>
        <input type="text"  name="name" placeholder='Name' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center',fontFamily:'Gills Sans',fontWeight:'bolder',color:'white' }} onChange={(e)=>handleInputChange("name",e.target.value)}/>
        <div style={{border: '2px solid #ccc', borderRadius: '5px',width: '80%', marginTop: '20px', padding: '10px',backgroundColor:'black'}}>
        <input type="file"  name="image" placeholder='File' style={{ textAlign: 'center' ,color:'white',fontFamily:'Gills Sans',fontWeight:'bolder'}}  onChange={(e) => setFile(e.target.files[0])}/>
        <button onClick={handleImage} className="text-white">Save Image</button>
        </div>
        <input type="text" name="price" placeholder='Price' style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center',fontFamily:'Gills Sans',fontWeight:'bolder' }} onChange={(e) =>
                handleInputChange("price", e.target.value)
              }/>
        <textarea placeholder='Description' name="desc" style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor:'black',fontFamily:'Gills Sans',fontWeight:'bolder' }} onChange={(e) => handleInputChange("desc", e.target.value)}/>
       
        <div style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor:'black' }}>
        <select id="origin" placeholder='Origin' name="origin" style={{fontFamily:'Gills Sans',fontWeight:'bolder'}}  onChange={(e) => handleCategoryChange("origin", e.target.value)}>
          <option value="origin" style={{color:'white'}}>Origin</option>
          <option value="domestic">Domestic</option>
          <option value="international">International</option>
        </select>
        </div>
        <div style={{ width: '80%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center', backgroundColor: 'black' }}>
        <select id="type" placeholder='Type' name="type" style={{fontFamily:'Gills Sans',fontWeight:'bolder'}}  onChange={(e) => handleCategoryChange("type", e.target.value)}>
          <option value="type">Type</option>
          <option value="antique">Antique</option>
          <option value="general">General</option>
        </select>
        </div>
        <button onClick={handleSubmit} className="bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-8" style={{ width: '50%', marginTop: '20px', backgroundColor: '#ff4d4f', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Addproduct;
