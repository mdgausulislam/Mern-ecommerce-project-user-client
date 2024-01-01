import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
    return (
        <div className='footer'>
            {/* About Section Footer */}
            <div className="about-footer">
                <div className="content">
                    <h3>About</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
                <div className="content">
                    <h3>Help</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
                <div className="content">
                    <h3>Consumer Policy</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
                <div className="content">
                    <h3>Social</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
                <div className="content">
                    <h3>Mail Us</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
                <div className="content">
                    <h3>Register office Address</h3>
                    <p>Carear</p>
                    <p>Flipkart stories</p>
                    <p>Press</p>
                    <p>Flipkart Wholesale</p>
                    <p>Cleartrip</p>
                    <p>Corporate information</p>
                </div>
            </div>

            {/* Social Media Footer */}

            <div className="social-media-footer">
                <div className="content">
                    <h6>Follow Us</h6>
                    {/* Add your social media icons/links here */}
                    <div className="social-icons">
                        {/* Example icons (replace with your actual social media icons) */}
                        <a href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
