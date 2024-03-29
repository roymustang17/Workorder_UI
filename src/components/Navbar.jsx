import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import Table from './Table'
import Other from './Other'

const Navbar = () => {
    const [activeScreen, setActiveScreen] = useState('screen1');
  
    const handleButtonClick = (screen) => {
    setActiveScreen(screen);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'screen1':
        return <Table />;
      case 'screen2':
        return <Other />;
      default:
        return null;
    }
  };

    return(
        <div className='mx-5'>
            <div className='d-flex justify-content-between'>
                <div>Create Workorder</div>
                <button 
                    className="btn btn-primary border-0" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasRight" 
                    aria-controls="offcanvasRight" 
                    style= {{backgroundColor: 'aqua', width: '100px'}}
                >
                    Save
                </button>
            </div>
            <div className='my-3'>
                <button onClick={() => handleButtonClick('screen1')} className="btn border-bottom" style={{width: '200px'}}>Overview</button>
                <button onClick={() => handleButtonClick('screen2')} className="btn border-bottom" style={{width: '200px'}}>Other</button>
            </div>
            
            <div>{renderScreen()}</div>
        </div>
    );
}



// const Navbar = () => {
//   return (
//         <nav class="navbar navbar-expand-lg bg-body-tertiary m-3 bg-body-tertiary">
//             <div class="container-fluid">
//                 {/* <a class="navbar-brand" href="#">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button> */}
//                 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                     <div class="navbar-nav">
//                         <Link class="nav-link active" aria-current="page" href="/">Overview</Link>
//                         <Link class="nav-link" href="/other">Other</Link>
//                         {/* <a class="nav-link" href="#">Pricing</a> */}
//                         {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//   )
// }

export default Navbar