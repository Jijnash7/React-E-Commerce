const JournalPageFooter = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white text-lg">
                <div>
                    <span className="footer-title text-yellow-200">Storefront</span>
                </div>
                <div>
                    <span className="footer-title text-yellow-200">Products & Prices</span>
                    <ul className="text-white mt-2">
                        <li>Body Lotion - ₹299</li>
                        <li>Body Wash - ₹249</li>
                        <li>Body Scrub - ₹349</li>
                        <li>Gift Set - ₹799</li>
                        <li>Combo Pack - ₹999</li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title text-yellow-200">Gallery</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <img src={require('../assets/car1.png')} alt="car1" className="w-8 h-8 rounded" />
                        <img src={require('../assets/better.jpeg')} alt="better" className="w-8 h-8 rounded" />
                        <img src={require('../assets/i1.jpg')} alt="i1" className="w-8 h-8 rounded" />
                        <img src={require('../assets/cartGif.gif')} alt="cartGif" className="w-8 h-8 rounded" />
                    </div>
                </div>
                <div>
                    <span className="footer-title text-yellow-200">Billing Options</span>
                    <div className="flex gap-2 mt-2">
                        <img src={require('../assets/mastercard.png')} alt="Mastercard" className="w-8 h-8" />
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-pink-500 text-white border-pink-300">
                <div className="items-center grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current text-yellow-200"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className='font-bold text-yellow-200'>built by jijnash. <br /></p>
                </div>
            </footer>
        </div>
    )
}

export default JournalPageFooter
