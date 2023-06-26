import React, { useState } from 'react';
 const ImageGrid = () => {
  const [set, setSet] = useState(0);

  const images = [
    ["../../assets/Light/Asset.png", "path-to-image2.jpg", "path-to-image3.jpg", "path-to-image4.jpg"],
    ["path-to-image5.jpg", "path-to-image6.jpg", "path-to-image7.jpg", "path-to-image8.jpg"],
  ];

  return (
    <div>
      <button onClick={() => setSet((set + 1) % 2)}>Change Images</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
        {images[set].map((img, index) => (
          <div 
            key={index}
            style={{ 
              width: '100%', 
              height: '0', 
              paddingBottom: '100%', 
              backgroundSize: 'cover', 
              backgroundImage: `url(${img})`
            }}
          >
            ![Alt text]({img})
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;