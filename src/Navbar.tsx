import React, { useState } from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { motion } from 'framer-motion'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-6 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-2xl xl:text-4xl tracking-widest inline-block mr-4 py-2 whitespace-nowrap"
                        href="/"
                    >
                        Enceladus
                    </a>
                    <button
                        className="cursor-pointer text-2xl leading-none tracking-widest px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        Menu
                        {/* <i className="fas fa-bars"></i> */}
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow justify-end"
                        + (navbarOpen ? " flex" : " hidden")
                    }
                    // animate={{ display: navbarOpen ? 'flex' : 'hidden' }}
                    // transition={{ type: "spring" }}
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col items-end lg:flex-row list-none lg:ml-auto text-lg md:text-2xl tracking-widest">
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center hover:opacity-75"
                                href="/main"
                            >
                                Home
                                {/* <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">Main</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                                href="/read"
                            >
                                Read
                                {/* <i className="fab fa-twitter text-lg leading-lg opacity-75"></i><span className="ml-2">Tweet</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                                href="/portfolio"
                            >
                                Portfolio
                                {/* <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">Pin</span> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar