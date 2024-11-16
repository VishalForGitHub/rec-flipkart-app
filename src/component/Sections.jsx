import '../styles/sections.css'
import user from '../assets/user.png'
import appliances from '../assets/appliances.webp'
import electronics from '../assets/electronics.webp'
import fasion from '../assets/fasion.webp'
import furnitures from '../assets/furnitures.webp'
import grocery from '../assets/grocery.webp'
import mobile from '../assets/mobile.webp'
import toys from '../assets/toys.webp'
export default function Sections(){
    return(
          <div className="fields-container">
              <div className="fields">
                  <div id="grocery" className='field'>
                      <img src={grocery} alt="grocery" />
                      <p>Grocery</p>
                  </div>

                  <div id="mobile" className='field'>
                      <img src={mobile} alt="mobile"/>
                      <p>Mobile</p>
                  </div>

                  <div id="fasion" className='field'>
                      <img src={fasion} alt="fasion"/>
                      <p>Fasion</p>
                  </div>

                  <div id="electronics" className='field'>
                      <img src={electronics} alt="electronics"/>
                      <p>Electronics</p>
                  </div>
                  <div id="furnitures" className='field'>
                      <img src={furnitures} alt="furnitures"/>
                      <p>Furniture</p>
                  </div>
                  <div id="appliances" className='field'>
                      <img src={appliances} alt="appliances"/>
                      <p>Appliances</p>
                  </div>
                  <div id="toys" className='field'>
                      <img src={toys} alt="toys"/>
                      <p>toys</p>
                  </div>
              </div>
          </div>
    );
}