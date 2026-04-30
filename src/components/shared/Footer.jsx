

const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-900 text-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
                    <div>
                        <h2 className="text-2xl font-bold text-white">RT Gallery</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-400">Discover stylish, durable, and high-quality tiles for your home, office, kitchen, and bathroom. 
        Transform every space with elegance.</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a href="#" className="hover:text-pink-400 transition">Facebook</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-pink-400 transition">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="mt-4 space-y-3 text-sm text-slate-400">
                            <p>Email: support@rtgallery.com</p>
                            <p>Phone: +880 1827-244227</p>
                            <p>Address: Puraton Fulbari Sirajganj, Sirajganj, Bangladesh</p>
                        </div>
                        <a href="#" className="inline-block mt-5 rounded-xl bg-pink-800 px-5 py-2.5 font-medium text-white hover:bg-pink-600 transition">Get in Touch</a>
                    </div>
                </div>

                <div className="border-t border-slate-800">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-slate-500">
                        <p>© 2026 RT Gallery. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;