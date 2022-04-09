import React, { useState } from 'react'
import "./Taps.css"
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function Taps() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="display">
      <div className="tab__container">
        <div className="bloc-tabs">

          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <div className="flex">
              <div className="mt-1">
                <Radio
                  checked={toggleState === 1}
                  onChange={() => toggleTab(1)}
                  value="1"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 1 }}
                  color="primary"
                  
                />
              </div>
              <div >
                <h2 >$9.99</h2>
                <p >Shipping cost: $5.00</p>
              </div>
            </div>


            <div
              className={toggleState === 1 ? "content__panel c1  active-content" : "content__panel c1"}
            >

<div style={{ display: "flex", flexDirection: "column", gap: "35px", padding: "10px" }}>
                <div >

                  <p >Seller: <span style={{ color: '#4978E8', textDecorationLine: 'underline' }}>Seller name</span></p>
                  <Rating name="size-small" defaultValue={4} size="small" />
                  <p >Brand: Dave Killer's Breads</p>

                </div>
                <div >
                  <p >Available in</p>
                  <div className="flex">
                    <Button variant="outlined">300 gms</Button>
                    <Button variant="contained">500 kg</Button>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                </div>
                <div className="flex">
                  <div >
                    <p >Quantity</p>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                  <div >
                    <p >Check availability</p>
                    <div className="flex">
                      <Button variant="outlined" >750 kg</Button>
                      <Button variant="contained">500 kg</Button>
                    </div>
                  </div>
                </div>
              </div>
                        </div>

            <div className={toggleState === 1 ? "active" : ""}></div>

          </button>


          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <div className="flex">
              <div className="mt-1">
                <Radio
                  checked={toggleState === 2}
                  onChange={() => toggleTab(2)}
                  value="2"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 2 }}
                  color="primary"
                  
                />
              </div>
              <div >
                <h2 >$5.99</h2>
                <p >Shipping cost: $5.00</p>
              </div>
            </div>

            <div
              className={toggleState === 2 ? "content__panel c2 active-content" : "content__panel c2"}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "35px", padding: "10px" }}>
                <div >

                  <p >Seller: <span style={{ color: '#4978E8', textDecorationLine: 'underline' }}>Seller name</span></p>
                  <Rating name="size-small" defaultValue={4} size="small" />
                  <p >Brand: Dave Killer's Breads</p>

                </div>
                <div >
                  <p >Available in</p>
                  <div className="flex">
                    <Button variant="outlined">300 gms</Button>
                    <Button variant="contained">500 kg</Button>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                </div>
                <div className="flex">
                  <div >
                    <p >Quantity</p>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                  <div >
                    <p >Check availability</p>
                    <div className="flex">
                      <Button variant="outlined" >750 kg</Button>
                      <Button variant="contained">500 kg</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "active" : ""}></div>



          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <div className="flex">
              <div className="mt-1">
                <Radio
                  checked={toggleState === 3}
                  onChange={() => toggleTab(3)}
                  value="3"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 3 }}
                  color="primary"
                  
                />
              </div>
              <div >
                <h2 >$3.99</h2>
                <p >Shipping cost: $5.00</p>
              </div>
            </div>



            <div
              className={toggleState === 3 ? "content__panel c3 active-content" : "content__panel c3"}
            >

<div style={{ display: "flex", flexDirection: "column", gap: "35px", padding: "10px" }}>
                <div >

                  <p >Seller: <span style={{ color: '#4978E8', textDecorationLine: 'underline' }}>Seller name</span></p>
                  <Rating name="size-small" defaultValue={4} size="small" />
                  <p >Brand: Dave Killer's Breads</p>

                </div>
                <div >
                  <p >Available in</p>
                  <div className="flex">
                    <Button variant="outlined">300 gms</Button>
                    <Button variant="contained">500 kg</Button>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                </div>
                <div className="flex">
                  <div >
                    <p >Quantity</p>
                    <Button variant="outlined" >750 kg</Button>
                  </div>
                  <div >
                    <p >Check availability</p>
                    <div className="flex">
                      <Button variant="outlined" >750 kg</Button>
                      <Button variant="contained">500 kg</Button>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
            <div className={toggleState === 3 ? "active" : ""}></div>

          </button>
        </div>



      </div>

      <div className="bottom">
        <div className="bottom__left">
          <Button variant="contained" size="small" className="w-100">
            See more sellers
          </Button>
        </div>
        <div className="bottom__right">
          <Button variant="contained" className="opacity-75" size="small">Contained</Button>
          <Button variant="contained" size="small">Buy</Button>
        </div>
      </div>

    </div>
  )
}

export default Taps