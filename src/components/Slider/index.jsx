import React from 'react'
import { Carousel } from 'react-carousel-minimal';


function Slider() {
    const data = [
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
        
      },
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
   
      },
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
       
      },
    ];
   
    return (
      <div className="App">
        <div style={{ textAlign: "center" }}>
            
          <div style={{
              padding: "0 "
            }}>
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="100vh"
          
            
              slideNumber={true}
              
              captionPosition="bottom"
              
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              
              style={{
                textAlign: "center",
                
               
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  export default Slider;