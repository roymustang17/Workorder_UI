import React, { useState } from "react";


function Sidebar() {
    const [client, setClient] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [rfq, setRFQ] = useState('');

    const handleEntry = (e) => {
        setClient(e.target.value)
    }

    const handleChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleRFQchange = (e) => {
        setRFQ(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client:', client);
        console.log('Commencement:', start_date);
        console.log('Completion:', end_date);
        console.log('RFQ Code:', rfq);
    };

    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Save</button>

            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Workorder</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="dropdown">
                        <select name="" id="" onChange={handleEntry} onSubmit={handleSubmit}>
                            <option value="Client Name"></option>
                            <option value="A">A.</option>
                            <option value="B.">B.</option>
                            <option value="C.">C.</option>
                        </select>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Date of Commencement</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="dd/mm/yyyy"
                                value={start_date}
                                onChange={handleChange}
                                pattern="\d{2}/\d{2}/\d{4}"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="CompletionDate" className="form-label">Date of Completion</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="dd/mm/yyyy" 
                                value={end_date} 
                                pattern="\d{2}/\d{2}/\d{4}" 
                                onChange={handleEndChange} 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="rfq">RFQ Code</label>
                            <input type="text" className="form-control" value={rfq} onChange={handleRFQchange} required />
                        </div>
                        <button variant="primary" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
