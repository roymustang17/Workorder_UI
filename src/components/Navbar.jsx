import React, { useState } from 'react'
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
        <div className='mx-0 mx-md-5'>
            <div className='d-flex justify-content-between'>
                <div className='fw-bold'>Create Workorder</div>
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
            
            <div className='container mx-0 mx-md-auto'>{renderScreen()}</div>
        </div>
    );
}

export default Navbar