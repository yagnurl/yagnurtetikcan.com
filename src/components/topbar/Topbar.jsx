import "./topbar.scss"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={`topbar ${(menuOpen && "active")}` }>
            <div className="wrapper">
              <div className="left">

              </div>
                <div className="left">
                    <a href="#intro" className='logo'>
                    <img src="assets/logo2.svg" alt="" />
                    </a>
                </div>
             
                <div className="right">
                  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
        
                  </div>
                </div>
            
            </div>
        </div>
    )
}
