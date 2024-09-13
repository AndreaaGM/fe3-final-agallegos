import React from 'react'

const Footer = () => {
  return (
    <footer style={{ height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
  
      <p>Powered by</p>
      <img src="/images/DH.png" alt='logo' className="footer-logo" />
      <img src='/images/ico-facebook.png' alt="Facebook" className="footer-icon" />
      <img src='/images/ico-instagram.png' alt="Instagram" className="footer-icon" />
      <img src='/images/ico-whatsapp.png' alt="WhatsApp" className="footer-icon" />
      <img src='/images/ico-tiktok.png' alt="TikTok" className="footer-icon" />
        
    </footer>
  )
}

export default Footer

