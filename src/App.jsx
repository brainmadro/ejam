import { useRef } from 'react'
import star from './assets/star.svg'
import lock from './assets/lock.svg'
import lockBlack from './assets/lock-black.svg'
import amex from './assets/amex.svg'
import gPay from './assets/gpay.svg'
import visa from './assets/visa.svg'
import paypal from './assets/paypal.svg'
import shopPay from './assets/shop pay.svg'
import applePay from './assets/apple pay.svg'
import truck from './assets/ph_truck-light.svg'
import mastercard from './assets/mastercard.svg'
import productBig from './assets/productBig.png'
import checkmark from './assets/tick-circle.svg'
import arrowRight from './assets/arrow-right.svg'
import userAvatar from './assets/user-avatar.png'
import tagVerfiedMark from './assets/verify 1.svg'
import stockStatus from './assets/stock-status.svg'
import mcAfeeLogo from './assets/McAfee_Secure.svg'
import productSmall from './assets/productSmall.png'
import heart from './assets/mdi_cards-heart-outline.svg'
import blueCheckmark from './assets/tick-circle-blue.svg'
import nortonLogo from './assets/norton-antivirus-logo 1.svg'
import satisfactionGuaranteeCert from './assets/satisfaction-guarantee.png'
import tagCheckmark from './assets/fluent_checkmark-starburst-20-regular.svg'
import syncArrows from './assets/fluent_arrow-sync-checkmark-20-regular.svg'
import clarifionLogo from './assets/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png'
import './App.css'
import './media-queries.css'

function App() {
    const headerContainerRef = useRef(null)

    const handleScrollLeftButton = () => {
        headerContainerRef.current.scrollLeft -= headerContainerRef.current.clientWidth - 56
    }
    
    const handleScrollRightButton = () => {
        headerContainerRef.current.scrollLeft += headerContainerRef.current.clientWidth - 56
    }

    return (
        <>
            <header>
                <div className='header--container' ref={headerContainerRef}>
                    <button className='scroll_controls-header' onClick={handleScrollLeftButton}>{"<"}</button>
                    <div className='feature_tag'>
                        <img src={tagCheckmark} className="tag_checkmark_logo" alt="React logo" />
                        <span>30-DAY SATISFACTION GUARANTEE</span>
                    </div>
                    <div className='feature_tag'>
                        <img src={truck} className="truck_logo" alt="React logo" />
                        <span>FREE DELIVERY ON ORDERS OVER $40.00</span>
                    </div>
                    <div className='feature_tag'>
                        <img src={heart} className="heart_logo" alt="React logo" />
                        <span>50.000+ HAPPY CUSTOMERS</span>
                    </div>
                    <div className='feature_tag'>
                        <img src={syncArrows} className="sync_arrows_logo" alt="React logo" />
                        <span>100% MONEY BACK GUARANTEE</span>
                    </div>
                    <button className='scroll_controls-header' onClick={handleScrollRightButton}>{">"}</button>
                </div>
            </header>
            <section className='main--container'>
                <div className='brands_header'>
                    <img src={clarifionLogo} className="clarifion_logo" alt="React logo" />
                    <div className='security_certificates'>
                        <img src={mcAfeeLogo} className="mcAfee_logo" alt="React logo" />
                        <img src={nortonLogo} className="norton_logo" alt="React logo" />
                    </div>
                </div>
                <div className='banner--container'>
                    <h1>Wait ! your order in progress.</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                </div>
                <main className='main--content'>
                        <div className='progress_status-section'>
                            <div className='progress_step'>
                                <span className='tick_circle step_status-checked'><img src={checkmark} className="checkmark" alt="Checkmark" /></span>
                                <span>Step 1: Cart Review</span>
                            </div>
                            <div className='progress_step'>
                                <span className='tick_circle step_status-checked'><span className='step_status-checked'><img src={checkmark} className="checkmark" alt="Checkmark" /></span></span>
                                <span>Step 2: Checkout</span>
                            </div>
                            <div className='progress_step-current'>
                                <span className='tick_circle step_status-current'>3</span>
                                <span>Step 3: Special Offer</span>
                            </div>
                            <div className='progress_step'>
                                <span className='tick_circle step_status'>4</span>
                                <span>Step 4: Confirmation</span>
                            </div>
                        </div>
                        <div className='product--container'>
                            <section className='product_basic'>
                                <img src={productBig} className="logo react" alt="React logo" />
                                <div className='featured_comment-card'>
                                    <div className='user_details'>
                                        <div className='user_avatar'><img src={userAvatar} className='user_avatar' alt="User Avatar"/></div>
                                        <div className='user_highlights'>
                                            <div className='calification_stars'>
                                                <img src={star} className="star_logo" alt="React logo" />
                                                <img src={star} className="star_logo" alt="React logo" />
                                                <img src={star} className="star_logo" alt="React logo" />
                                                <img src={star} className="star_logo" alt="React logo" />
                                                <img src={star} className="star_logo" alt="React logo" />
                                            </div>
                                            <div className='user_name_row'>
                                                <span className='user_name'>Ken T.</span>
                                                <img src={tagVerfiedMark} className="verify_tag" alt="Verify Tag" />
                                                <span className='verified_customer_tag'>Verified Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                                </div>
                            </section>
                            <section className='product_info'>
                                <h3><span className='highlighted_text'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='highlighted_text'>$14 each</span> ($84.00 total!)</h3>
                                <div className='product_details--container'>
                                    <img src={productSmall} className="product-small" alt="React logo" />
                                    <div className='product_details--content'>
                                        <div className='title_price'>
                                            <h5>Clarifion Air Ionizer</h5>
                                            <div>
                                                <span className='price_before'>$180</span>
                                                <span className='price_currently'>$84</span>
                                            </div>
                                        </div>                                        
                                        <div className='calification_stars'>
                                            <img src={star} className="star_logo" alt="React logo" />
                                            <img src={star} className="star_logo" alt="React logo" />
                                            <img src={star} className="star_logo" alt="React logo" />
                                            <img src={star} className="star_logo" alt="React logo" />
                                            <img src={star} className="star_logo" alt="React logo" />
                                        </div>
                                        <div className='stock--container'><img src={stockStatus} className="stock-status" alt="Stock Status" />12 left in Stock</div>
                                        <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                                    </div>
                                </div>
                                <div>
                                    <ul className='product_features'>
                                        <li><img src={blueCheckmark} className="checkmark" alt="Checkmark" /><p>Negative Ion Technology may <strong>help with allergens</strong></p></li>
                                        <li><img src={blueCheckmark} className="checkmark" alt="Checkmark" /><p>Designed for <strong>air rejuvenation</strong></p></li>
                                        <li><img src={blueCheckmark} className="checkmark" alt="Checkmark" /><p><strong>Perfect for every room</strong> in all types of places.</p></li>
                                    </ul>
                                </div>
                                <div className='discount_card'>
                                    <div className='tick_circle percent-icon'>%</div>
                                    <span>Save <span className='highlighted_text'>53%</span> and get <span className='highlighted_text'>6 extra Clarifision</span> for only <span className='highlighted_text'>$14 Each</span>.</span>
                                </div>
                                <div className='quick_actions--container'>
                                    <button className='primary--button'>Yes - Claim my discount <img src={arrowRight} className="arrow_right" alt="Arrow Right" /></button>
                                    <div className='quick_actions'>
                                        <span>Free shipping</span>
                                        <div className='security--container'>
                                            <img src={lockBlack} className="lock_logo" alt="Lock" />
                                            Secure 256-Bit SSL Encryption.
                                        </div>
                                        <div className='payment_methods'>
                                            <img src={visa} className="lock_logo" alt="Visa" />
                                            <img src={shopPay} className="lock_logo" alt="Shop Pay" />
                                            <img src={paypal} className="lock_logo" alt="PayPal" />
                                            <img src={mastercard} className="lock_logo" alt="MasterCard" />
                                            <img src={gPay} className="lock_logo" alt="Google Pay" />
                                            <img src={applePay} className="lock_logo" alt="Apple Pay" />
                                            <img src={amex} className="lock_logo" alt="American Express" />
                                        </div>
                                    </div>
                                    <a href="#">No thanks, I don’t want this.</a>
                                </div>
                                <div className='satisfaction_guarantee--container'>
                                    <img src={satisfactionGuaranteeCert} className="satisfaction_guarantee_cert" alt="Satisfaction Guarantee Certificate" />
                                    <p>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee</strong>. Please refer to our return policy at the bottom of the page for more details.<br/>Happy Shopping!</p>
                                </div>
                            </section>
                        </div>
                </main>
            </section>
            <footer>
                <div className='footer--container'>
                    <div className='copyright--container'>
                        <span>Copyright (C) 2023</span>
                        <span>clarifionsupport@clarifion.com</span>
                    </div>
                    <div className='security--container'>
                        <img src={lock} className="lock_logo" alt="Lock" />
                        Secure 256-Bit SSL Encryption.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
