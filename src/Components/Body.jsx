const Body = () => {
    return(
        <div>
            <h1>Any Query</h1>
            <p>We're here to help and answer any question you might have.We look forward to hearing from you.</p>
            <form>
                <input type="text" placeholder = "Your Name"/> 
                <input type="text" placeholder = "Your Email"/>
                <input type="tel " placeholder = "Phone Number"/>
                <input type="text" placeholder = "Your Subject"/>
                <textarea placeholder = "Your Message" ></textarea>
                <button>Submit</button>
            </form>
            <div>
                <img src="" alt="whatsapp" />
                <h3>Whatsapp Support</h3>
                <p> " { " coming soon " } "</p>
            </div>
            <div>
                <img src="" alt="email" />
                <h3>Email Support</h3>
                <p> "support@aeropay.in"</p>
            </div>
            <div>
                <img src="" alt="Address" />
                <h3>Address</h3>
                <p> "Jaipur ,Rajasthan"</p>
            </div>
        
        </div>
    );
}
export default Body;