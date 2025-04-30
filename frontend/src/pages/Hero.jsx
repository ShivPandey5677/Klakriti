import React from 'react';
import { Link } from 'react-router-dom';


const HeroPage = () => {
   return (
      
       <div style={{ height: '100vh', width: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column' }}>
          
           <div style={{backgroundColor:'black',height:'10vh',width:'100%',marginTop:'7%',padding:'0%',marginLeft:'10px',textAlign:'center',fontFamily:'Gill Sans',fontSize:'25px'}}>
           <h3>

           BIDDING:
               <span style={{marginLeft:'5px',marginTop:'3px',}}>Get the item before its too late</span>
               <Link className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text"
         to="/AddProduct"
         style={{marginLeft:'10px', textDecoration:'underline',textDecorationColor:'red'}}
       >
       Register Now
       </Link>
           </h3>


           </div>
           <div style={{ display: 'flex', flex: 1 }}>
               <div style={{ height: '100%', width: '50%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                   <div style={{height:'700px',width:'700px',margin:'30px', borderStyle:'solid',backgroundColor:'black',textAlign:'center',position:'relative'}}>
                       <div style={{marginTop:'130px'}}>
                   <h1 className="text-4xl sm:text-7xl lg:text-4xl  tracking-wide" style={{marginTop:'45px',textAlign:'center',fontWeight:'bolder'}}>
           Artisan Avenue
       <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text" style={{fontWeight:'bolder',fontFamily:'Gills Sans',fontSize:'40px'}}>
         {" "}
         for Local Arts
       </span>
     </h1>
     <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" style={{fontFamily:'Gils Sans',fontSize:'20px'}}>
     Let's ignite the flame of creativity and embrace the beauty of local arts and crafts! Together, we can build a vibrant community where every brushstroke, stitch, and carve tells a story of passion, tradition, and innovation. <br />
      Join us in celebrating the richness of our cultural heritage and empowering artisans to shine bright in their craft. Together, let's unleash the power of creativity and transform dreams into masterpieces that captivate hearts and inspire generations to come!!
     </p>
     <div className="flex justify-center my-10">
       <a
         href="#"
         className="bg-gradient-to-r from-red-500 to-red-800 py-3 px-4 mx-3 rounded-md"
       >
        Join Prime
       </a>
       <a href="#" className="py-3 px-4 mx-3 rounded-md border">
         Scroll Creativity
       </a>
     </div>
     </div>
                   </div>
               </div>
               <div style={{ height: '100%', width: '50%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               {/*When you set position: 'absolute' on an element, it positions itself relative to the nearest positioned ancestor.
               If there's no positioned ancestor, it positions itself relative to the initial containing block, which is
               typically the <body> element.


In your code, the parent <div> elements don't have position: 'relative' or any other positioning property set, so when you set position: 'absolute' on the inner <div>, it positions itself relative to the initial containing block (usually the <body> element), not its parent <div>. */}
               <div style={{height:'700px',width:'700px',marginTop:'30px', marginLeft:'15%',borderStyle:'solid',backgroundColor:'black',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                   <div>
                   <div style={{height:'300px',width:'200px', border:'1px solid black',borderRadius:'20px',marginLeft:'10px',marginTop:'10px',overflow:'hidden',backgroundColor:'black'}}>
                        <img src="https://plus.unsplash.com/premium_photo-1702634274351-8e7fcb905df9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                   </div>
                   <div style={{height:'300px',width:'200px', border:'1px solid black',borderRadius:'20px',marginLeft:'10px',marginTop:'10px',overflow:'hidden'}}>
                <img src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                   </div>


                 </div>
                 <div style={{height:'300px',width:'200px', border:'1px solid black',borderRadius:'20px',marginLeft:'10px',marginTop:'10px',overflow:'hidden'}}>
                    <img src="https://plus.unsplash.com/premium_photo-1674617774875-7c1697c4201d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                 </div>
                    
                   </div>
               </div>
           </div>
       </div>
   );
};


export default HeroPage;