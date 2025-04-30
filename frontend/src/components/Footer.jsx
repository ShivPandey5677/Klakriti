import React from 'react';

const Footer = () => {
 
  const resourcesLinks = [
    { href: "#", text: "Art Techniques" },
    { href: "#", text: "Craft Tutorials" },
    { href: "#", text: "Inspiration Gallery" },
    { href: "#", text: "Art Supplies" },
    { href: "#", text: "Craft Workshops" },
  ];

  
  const platformLinks = [
    { href: "#", text: "Art Courses" },
    { href: "#", text: "Craft Kits" },
    { href: "#", text: "Art and Craft Tools" },
    { href: "#", text: "Art and Craft Books" },
    { href: "#", text: "Art and Craft Events" },
  ];


  const communityLinks = [
    { href: "#", text: "Art Exhibitions" },
    { href: "#", text: "Craft Fairs" },
    { href: "#", text: "Artisan Markets" },
    { href: "#", text: "Art and Craft Classes" },
    { href: "#", text: "Art and Craft Forums" },
  ];

  return (
    <footer className="mt-20 border-t py-10  " style={{backgroundColor:'bg-gray-800',height:'50vh',width:'100vw'}}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4" style={{marginTop:'15%',marginLeft:'10%'}}>Resources</h3>
          <ul className="space-y-2">
          
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white" style={{marginLeft:'10%',marginTop:'10%',textAlign:'center'}}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4" style={{marginTop:'15%',marginLeft:'10%'}}>Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white" style={{marginLeft:'10%',textAlign:'center',marginTop:'10%'}}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4" style={{marginTop:'15%',marginLeft:'10%'}}>Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white" style={{marginLeft:'10%',textAlign:'center',marginTop:'10%'}}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
