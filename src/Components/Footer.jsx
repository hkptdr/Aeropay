import './Footer.css'
import logo from'./logo.png'
const Footer = () => {
    return(
        <div className="Foot">
            <div>
           
                <h2>Disclaimer</h2>
                <p>"Please do not share your AeronPay Wallet password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from AeronPay. We advise our customers to completely ignore such communications & report to us at disputes@aeronpay.in"</p>
           
            </div>
            <div>
            
                 <img src={logo} alt="aeropay" />
                <p>AeronPay Wallet is India's leading payment solution with the largest digital services and mobile commerce platform.</p>
                <nav> 
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Careers</li>
                      <li>Pricing</li>
                    </ul>
                </nav>
                <nav>
                     <ul>
                      <li>Contacts</li>
                      <li>Blogs</li>
                      <li>Support</li>
                      <li>FAQs</li>
                   </ul>
                </nav>
                <nav> 
                    <ul>
                      <li>Merchant</li>
                      <li>Distributor</li>
                      <li>Franchise</li>
                    </ul>
                </nav>
                <nav> 
                    <ul>
                      <li>Privacy Policy</li>
                      <li>Terms and Conditions</li>
                      <li>Grievance Policy</li>
                      <li>Cancellation and Refund Policies</li>
                     </ul>
                </nav>
               
           
            </div>
            <div>
            
                <p>Follow us</p>
                <button>Instagram</button>
                <button>Linkdin</button>
                <button>Youtube</button>
                <button>Facebook</button>
                <button>Twitter</button>
            
            </div>
        </div>
    );
}
export default Footer;