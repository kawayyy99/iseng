import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPhone, faPenToSquare, faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoKwy from '../assets/img/logo/kaway.png';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false); // State untuk kontrol input
  const formRef = useRef(null); // Referensi ke form

  const handleIconClick = () => {
    setShowInput(true); // Menampilkan input saat ikon diklik
  };

  const handleClickOutside = (event) => {
    // Periksa apakah klik di luar form
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowInput(false); // Sembunyikan input jika klik di luar
    }
  };

  // Gunakan useEffect untuk menambahkan event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener saat komponen unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header-menu bg-white">
      <nav className="navbar navbar-expand-lg bg-opacity-50 p-3">
        <div className="container-fluid text-light">
          <a className="navbar-brand" href="#">
            <img className="logo" src={LogoKwy} alt="Deskripsi gambar" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  <FontAwesomeIcon icon={faComments} size="2x" style={{ color: "#696cff" }} /> <br />Chats
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faPenToSquare} size="2x" style={{ color: "#696cff" }} /><br />Updates
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUsers} size="2x" style={{ color: "#696cff" }} /><br />Contacts
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "#696cff" }} /><br />Contacts
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" ref={formRef}>
              {/* Tampilkan input jika showInput true */}
              {showInput && (
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  autoFocus  // Fokus otomatis pada input
                />
              )}
              {/* Ikon kaca pembesar */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2x"
                style={{ color: "#696cff", cursor: 'pointer' }}
                onClick={handleIconClick} // Klik ikon untuk menampilkan input
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
