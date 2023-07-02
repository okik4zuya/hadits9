import { Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'

export default function WebLayout({ children }) {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    return (
        <div style={{ paddingTop:"50px" }}>
            <div>
                <nav className="navbar is-transparent" role="navigation" aria-label="main navigation"
                style={{ 
                    position:"fixed",
                    top: "0",
                    left:"0",
                    right:"0",
                    height:"50px"
                 }}
                >
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <h1 className='has-text-weight-bold'>Tafaquh</h1>
                        </a>

                        <a role="button" className={`navbar-burger ${isMenuExpanded && "is-active"}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={`navbar-menu ${isMenuExpanded && "is-active"}`}>
                        <div className="navbar-start">
                            <Link className="navbar-item" href="/">
                                Home
                            </Link>

                            <div className={`navbar-item has-dropdown is-hoverable ${isMenuExpanded && "is-active"}`}>
                                <Link className="navbar-item" href="/quran">
                                    Quran
                                </Link>

                                <div className="navbar-dropdown">
                                    <Link className="navbar-item" href="/quran">
                                        Cari Qur'an
                                    </Link>
                                    <Link className="navbar-item" href="/quran/1/1">
                                        Tafsir Qur'an
                                    </Link>
                                </div>
                            </div>

                            <div className={`navbar-item has-dropdown is-hoverable ${isMenuExpanded && "is-active"}`}>
                                <Link className="navbar-item" href="/hadits">
                                    Hadits
                                </Link>

                                <div className="navbar-dropdown">
                                    <Link className="navbar-item" href="/hadits">
                                        Cari Hadits
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/bukhari/1">
                                        Shahih Bukhari
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/muslim/1">
                                        Shahih Muslim
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/ahmad/1">
                                        Musnad Ahmad
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/malik/1">
                                        Muwatho' Malik
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/tirmidzi/1">
                                        Sunan Tirmidzi
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/abudaud/1">
                                        Sunan Abu Daud
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/ibnumajah/1">
                                        Sunan Ibnu Majah
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/nasai/1">
                                        Sunan Nasa'i
                                    </Link>
                                    <Link className="navbar-item" href="/hadits/darimi/1">
                                        Sunan Darimi
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>

            </div>
            {children}
        </div>
    )
}