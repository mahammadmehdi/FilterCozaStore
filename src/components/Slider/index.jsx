import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import "./index.scss"


function Slider() {
  const data = [
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
      caption:
        `<div class='mainHead'>
           <div class='season'>Women Collection 2018</div>
          <h1 class='category'>NEW SEASON</h1>
          <button class='btn'>SHOP NOW</button>
          </div>`
    },
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
      caption:
        `<div class='mainHead'>
           <div class='season'>Men New-Season</div>
          <h1 class='category'>JACKETS & COATS</h1>
          <button class='btn'>SHOP NOW</button>
          </div>`

    },
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
      caption:
        `<div class='mainHead'>
           <div class='season'>Men Collection 2018</div>
          <h1 class='category'>NEW ARRIVALS</h1>
          <button class='btn'>SHOP NOW</button>
          </div>`

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
            time={5000}
            width="100%"
            height="100vh"
            slideNumber={true}
            captionPosition="bottom"
            dots={true}
            automatic={true}
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