import React,{ useState } from 'react'
import './components.css'
import AccountMenu from './AccountMenu';
import SlideLeftNav from './SlideLeftNav';

export default function Nav() {

    const currencies = [
        { code: "INR", name: "Indian Rupee" },
        { code: "USD", name: "US Dollar" },
        { code: "GBP", name: "British Pound" },
        { code: "AUD", name: "Australian Dollar" },
      ];
      const [selectedCurrency, setSelectedCurrency] = useState("");
      const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
      };

  return (
    <div>
      <nav>
        <div className='nav-container'>
            <div className="logo">
                MyTrip
            </div>

            <div className="slide-nav">
             <div className="user"><AccountMenu/></div>
             <div className="sliding-bar"><SlideLeftNav/></div>
            </div>

            <div className='list'>
                <ul>
                    <li>
                        <a href="">
                            <p>My trip</p>
                            <span>Manage and Booking</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                          <p>Propertiys</p>
                          <span>List your Prackege and Propertiys</span>
                        </a>
                    </li>
                    <li className='login'>
                        <a href="">Create Account/Login</a>
                    </li>
                    <li>
                      <select name="Country" id="" className='Country'>
                        <option value="India">India | ENG</option>
                        <option value="USA">UAS | ENG</option>
                      </select>
                    </li>
                    <li>
                      <div className="dropdown">
                           <div className="dropdown-content">
                             <select
                               value={selectedCurrency}
                               onChange={handleCurrencyChange}
                               className="currency-select"
                             >
                               {currencies.map((currency) => (
                                 <option key={currency.code} value={currency.code}>
                                   {currency.code} 
                                 </option>
                               ))}
                             </select>
                           </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
