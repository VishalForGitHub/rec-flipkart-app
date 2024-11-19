import '../styles/sections.css'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'
import appliances from '../assets/appliances.webp'
import electronics from '../assets/electronics.webp'
import fasion from '../assets/fasion.webp'
import furnitures from '../assets/furnitures.webp'
import grocery from '../assets/grocery.webp'
import mobile from '../assets/mobile.webp'
import toys from '../assets/toys.webp'
export default function Sections() {
    let fieldsArray = [
        { fieldname: 'Grocery', url: grocery },
        { fieldname: 'Mobile', url: mobile },
        { fieldname: 'Fasion', url: fasion },
        { fieldname: 'Electronics', url: electronics },
        { fieldname: 'Furnitures', url: furnitures },
        { fieldname: 'Appliances', url: appliances },
        { fieldname: 'Toys', url: toys }
    ]
    return (
        <div className="fields-container">
            <div className="fields">
                {fieldsArray.map((field) => (
                    <Link key={field.fieldname} to={`/section/${field.fieldname}`}>

                        <div  id={field.fieldname} className='field'>
                            <img src={field.url} alt={field.fieldname} />
                            <p>{field.fieldname}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}