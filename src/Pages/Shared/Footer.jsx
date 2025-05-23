import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white mt-10 p-10 flex justify-evenly">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <aside>
                    <img className='w-28' src={logo} alt="" />
                    <p>
                        QAV It Solutions
                        <br />

                    </p>
                </aside>
            </footer>
            <footer className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Captainboggey</p>
                </aside>
            </footer>
        </div>

    );
};

export default Footer;