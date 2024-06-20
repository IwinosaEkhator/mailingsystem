import React, { useState } from 'react';


import "../Components/Admin/admin.css";
import "./Login/login.css"
import AdminFormComponents from './adminFormComp';

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        from: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    }

    return (
        <div className="App">
            <div style={{ display: "inline-block" }}>
                <h1 style={{ textAlign: 'center', }}>Internal Delivery Note</h1>
                <form className='admin-form' onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className='list-group'>
                            {/* <h2>Step 1: Personal Details</h2> */}

                            <AdminFormComponents
                                fName="Date"
                                fPlaceholder=""
                                fElement="date"
                                fType="date"
                                fOnChange={handleChange}
                                fValue={formData.from}
                            />

                            <AdminFormComponents
                                fName="From"
                                fPlaceholder=""
                                fElement="from"
                                fType="text"
                                fOnChange={handleChange}
                                fValue={formData.from}
                            />

                            <div className='li-group'>
                                <AdminFormComponents
                                    fName="To"
                                    fPlaceholder=""
                                    fElement="to"
                                    fType="name"
                                    fOnChange={handleChange}
                                    fValue="Ekhator Iwinosa / npdc.b0011"
                                />

                                <AdminFormComponents
                                    fName="To"
                                    fPlaceholder=""
                                    fElement="to"
                                    fType="name"
                                    fOnChange={handleChange}
                                    fValue="Ekhator Iwinosa / npdc.b0011"
                                />

                            </div>

                            <button className='admin-form-button' type="button" onClick={nextStep}>Next</button>
                        </div>
                    )}
                    {step === 2 && (
                        <div>
                            <h2>Step 2: Address Details</h2>
                            <label className="admin-form-label">
                                Address:
                                <input type="text" name="address" value={formData.address} onChange={handleChange} />
                            </label>
                            <label className="admin-form-label">
                                City:
                                <input type="text" name="city" value={formData.city} onChange={handleChange} />
                            </label>
                            <button type="button" onClick={prevStep}>Back</button>
                            <button type="button" onClick={nextStep}>Next</button>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <h2>Step 3: Country Details</h2>
                            <label className="admin-form-label">
                                Country:
                                <input type="text" name="country" value={formData.country} onChange={handleChange} />
                            </label>
                            <button className='admin-form-button' type="button" onClick={prevStep}>Back</button>
                            <button className='admin-form-button' type="submit">Submit</button>
                        </div>
                    )}
                </form>
                {/* <div className="progress-bar">
                <div style={{ width: `${(step / 3) * 100}%` }} className="progress"></div>
            </div> */}
            </div>
        </div>
    );
}

export default App;
