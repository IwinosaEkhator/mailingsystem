import React, { useState } from 'react';
import AdminFormComponents from './adminFormComp';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import './Admin/admin.css';

const App = () => {
    const [step, setStep] = useState(1);
    const [forms, setForms] = useState([{ id: Date.now(), collapsed: false, data: { unit: '', quantity: '', description: '' } }]);
    const [formData, setFormData] = useState({
        name: '',
        from: '',
        date: '',
        de_name: '',
        de_rank: '',
        de_sign: '',
        de_date: '',
        re_name: '',
        re_rank: '',
        re_sign: '',
        re_date: '',
    });

    const handleChange = (formId, e) => {
        const { name, value } = e.target;
        if (formId) {
            setForms(forms.map(form => form.id === formId ? { ...form, data: { ...form.data, [name]: value } } : form));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Forms submitted:', formData, forms);
    };

    const addForm = () => {
        setForms([...forms, { id: Date.now(), collapsed: false, data: { unit: '', quantity: '', description: '' } }]);
    };

    const removeForm = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };

    const toggleCollapse = (id) => {
        setForms(forms.map(form => form.id === id ? { ...form, collapsed: !form.collapsed } : form));
    };

    return (
        <div className="App">
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Internal Delivery Note</h1>
                <form className="admin-form list-group" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="list-group">
                            <AdminFormComponents
                                fName="Date"
                                fPlaceholder=""
                                fElement="date"
                                fType="date"
                                fOnChange={(e) => handleChange(null, e)}
                                fValue={formData.date}
                            />

                            <AdminFormComponents
                                fName="From"
                                fPlaceholder=""
                                fElement="from"
                                fType="text"
                                fOnChange={(e) => handleChange(null, e)}
                                fValue={formData.from}
                            />

                            <div className="li-group">
                                <AdminFormComponents
                                    fName="To"
                                    fPlaceholder=""
                                    fElement="to"
                                    fType="name"
                                    fOnChange={(e) => handleChange(null, e)}
                                    fValue="Ekhator Iwinosa"
                                />

                                <AdminFormComponents
                                    fName="ID No"
                                    fPlaceholder=""
                                    fElement="to"
                                    fType="name"
                                    fOnChange={(e) => handleChange(null, e)}
                                    fValue="npdc.b0011"
                                />
                            </div>

                            <button className="admin-form-button" type="button" onClick={nextStep}>Next</button>
                        </div>
                    )}

                    {step === 2 && (
                        <>
                            {forms.map((form, index) => (
                                <div key={form.id} className="list-group">
                                    <div className="header d-flex align-items-center justify-content-between" onClick={() => toggleCollapse(form.id)}>
                                        <h5>Request Form {index + 1}</h5>
                                        <button type="button">
                                            {form.collapsed ? <IoIosArrowDown fontSize={20} color='#06AD50' /> : <IoIosArrowUp fontSize={20} color='#06AD50' />}
                                        </button>
                                    </div>

                                    {!form.collapsed && (
                                        <div className="form-content">
                                            <div className='li-group'>
                                                <AdminFormComponents
                                                    fName="Unit"
                                                    fPlaceholder=""
                                                    fElement="unit"
                                                    fType="text"
                                                    fOnChange={(e) => handleChange(form.id, e)}
                                                    fValue={form.data.unit}
                                                />

                                                <AdminFormComponents
                                                    fName="Quantity"
                                                    fPlaceholder=""
                                                    fElement="quantity"
                                                    fType="text"
                                                    fOnChange={(e) => handleChange(form.id, e)}
                                                    fValue={form.data.quantity}
                                                />
                                            </div>

                                            <div className="list-group-n">
                                                <label>Description Of Materials/Services</label>
                                                <textarea
                                                    name="description"
                                                    rows={4}
                                                    cols={54}
                                                    onChange={(e) => handleChange(form.id, e)}
                                                    value={form.data.description}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="li-group">
                                <button className="admin-form-button" type="button" onClick={prevStep}>Back</button>
                                <button className="admin-form-button config-request removeBtn" type="button" onClick={() => removeForm(forms[forms.length - 1].id)} disabled={forms.length === 1}>-</button>
                                <button className="admin-form-button config-request" type="button" onClick={addForm}>+</button>
                                <button className="admin-form-button" type="button" onClick={nextStep}>Next</button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div className='list-group mt-1'>
                                <div className='d-flex justify-space-between'>
                                    <div className='list-group'>
                                        <h3>Delivered by</h3>

                                        <AdminFormComponents
                                            fName="Name"
                                            fPlaceholder=""
                                            fElement="de_name"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue={formData.de_name}
                                        />
                                        <AdminFormComponents
                                            fName="Rank"
                                            fPlaceholder=""
                                            fElement="de_rank"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue={formData.de_rank}
                                        />
                                        <AdminFormComponents
                                            fName="Signature"
                                            fPlaceholder=""
                                            fElement="de_sign"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue={formData.de_sign}
                                        />
                                        <AdminFormComponents
                                            fName="Date"
                                            fPlaceholder=""
                                            fElement="de_date"
                                            fType="date"
                                            fOnChange={handleChange}
                                            fValue={formData.de_date}
                                        />

                                    </div>

                                    <div className='list-group'>
                                        <h3>Received by</h3>

                                        <AdminFormComponents
                                            fName="Name"
                                            fPlaceholder=""
                                            fElement="re_name"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue="Ekhator Iwinosa"
                                        />
                                        <AdminFormComponents
                                            fName="Rank"
                                            fPlaceholder=""
                                            fElement="re_rank"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue="CLEANER"
                                        />
                                        <AdminFormComponents
                                            fName="Signature"
                                            fPlaceholder=""
                                            fElement="re_sign"
                                            fType="text"
                                            fOnChange={handleChange}
                                            fValue={formData.re_sign}
                                        />
                                        <AdminFormComponents
                                            fName="Date"
                                            fPlaceholder=""
                                            fElement="re_date"
                                            fType="date"
                                            fOnChange={handleChange}
                                            fValue={formData.re_date}
                                        />
                                    </div>
                                </div>

                                <div className='li-group mx-5 px-5'>
                                    <button className="admin-form-button" type="button" onClick={prevStep}>Back</button>
                                    <button className="admin-form-button" type="submit">Submit</button>
                                </div>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default App;
