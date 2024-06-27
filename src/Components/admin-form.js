import React, { useState } from 'react';
import AdminFormComponents from './adminFormComp';
import './Admin/admin.css';
import { FaPrint } from 'react-icons/fa';
import Resquestorder from './request-order';
import Requesttable from './request-table';
import nnpclogo from "../Components/Assets/nnpc-logo.png"

const App = () => {
    const [step, setStep] = useState(1);
    const [forms, setForms] = useState([{ id: Date.now(), description: { SN: '', domainName: '', computerName: '' }, unit: '', quantity: '' }]);
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
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Forms submitted:', formData, forms);
        setSubmitted(true);
        nextStep(); // Move to the thank you step
    };

    const addForm = () => {
        setForms([...forms, { id: Date.now(), description: { SN: '', domainName: '', computerName: '' }, unit: '', quantity: '' }]);
    };

    const removeForm = (id) => {
        setForms(forms.filter(form => form.id !== id));
    };

    const handleUpdateDescription = (id, description, unit, quantity) => {
        setForms(forms.map(form => form.id === id ? { ...form, description, unit, quantity } : form));
    };


    return (
        <div className="App">
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Internal Delivery Note</h1>
                <form className="admin-form" onSubmit={handleSubmit}>
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
                        <div className='details' style={{ width: "1000px" }}>
                            <Resquestorder addForm={addForm}>
                                {forms.map((form, index) => (
                                    <Requesttable
                                        key={form.id}
                                        tKey={form.id}
                                        tItem={index + 1}
                                        tDescription={form.description}
                                        tUnit={form.unit}
                                        tQuantity={form.quantity}
                                        handleUpdateDescription={handleUpdateDescription}
                                        removeForm={removeForm}
                                    />
                                ))}

                            </Resquestorder>
                            <div className="li-group w-25">
                                <button className="admin-form-button" type="button" onClick={prevStep}>Back</button>
                                <button className="admin-form-button" type="button" onClick={nextStep}>Next</button>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
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

                            </div>

                            <div className='li-group mx-5 px-5'>
                                <button className="admin-form-button" type="button" onClick={prevStep}>Back</button>
                                <button className="admin-form-button" type="submit">Submit</button>
                            </div>
                        </div>
                    )}
                    {step === 4 && submitted && (
                        <div className="receipt-content">
                            <div className="container bootstrap snippets bootdey">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="invoice-wrapper">
                                            <div className="intro row text-capitalize">
                                                <div className='col-2'>
                                                    <img src={nnpclogo} className='w-100'></img>
                                                </div>
                                                <div className='col-8 text-center'>
                                                    <h5>
                                                        NNPC E & P Limited <br /> ( A Subsidiary of NNPC)
                                                    </h5>
                                                    <h3>
                                                        <strong>Internal Delivery Note</strong>
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="payment-info">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <span>Delivery No.</span>
                                                        <strong>000000001</strong>
                                                    </div>
                                                    <div className="col-sm-6 text-end">
                                                        <span>Delivery Date</span>
                                                        <strong>Jul 09, 2014 - 12:20 pm</strong>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="payment-details">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <span>From</span>
                                                        <strong>Manager ITD</strong>
                                                        {/* <p>
                                        989 5th Avenue
                                        <br />
                                        City of Monterrey
                                        <br />
                                        55839
                                        <br />
                                        USA
                                        <br />
                                        <a href="mailto:jonnydeff@gmail.com">jonnydeff@gmail.com</a>
                                      </p> */}
                                                    </div>
                                                    <div className="col-sm-6 text-end">
                                                        <span>To</span>
                                                        <strong>Ekhator Iwinosa</strong>
                                                        <p>
                                                            npdc.b0011 <br />
                                                            DM Well Engineering
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>


                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Item <br /> No</th>
                                                        <th scope="col">Description of Materials</th>
                                                        <th scope="col" className='text-center'>Unit</th>
                                                        <th scope="col" className='text-center'>Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>
                                                            Dell Inspiron XPS 15
                                                            <br /> NPDC-DT-120
                                                            <br /> GJ356R
                                                        </td>
                                                        <td className='text-center'>1</td>
                                                        <td className='text-center'>1</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>
                                                            Dell Inspiron XPS 15
                                                            <br /> NPDC-DT-120
                                                            <br /> GJ356R
                                                        </td>
                                                        <td className='text-center'>3</td>
                                                        <td className='text-center'>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>
                                                            Dell Inspiron XPS 15
                                                            <br /> NPDC-DT-120
                                                            <br /> GJ356R
                                                        </td>
                                                        <td className='text-center'>10</td>
                                                        <td className='text-center'>1</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div className='row mt-5'>
                                                <div className='col-8 pe-5'>
                                                    <strong>Delivered by:</strong>
                                                    <p className='mt-2 mb-0'>Name: Ezue Edwin</p>
                                                    <p className='mb-0'>Rank: DM</p>
                                                    <p>Date: 10/6/2024</p>
                                                </div>
                                                <div className='col-4'>
                                                    <strong className='pb-3'>Received by:</strong>
                                                    <p className='mt-2 mb-0'>Name: Ekhator Iwinosa</p>
                                                    <p className='mb-0'>Rank: DM</p>
                                                    <p>Date: 10/6/2024</p>
                                                </div>
                                            </div>
                                            {/* <div className="line-items">
                                  <div className="headers clearfix">
                                    <div className="row">
                                      <div className="col-xs-4">Description</div>
                                      <div className="col-xs-3">Quantity</div>
                                      <div className="col-xs-5 text-end">Amount</div>
                                    </div>
                                  </div>
                                  <div className="items">
                                    <div className="row item">
                                      <div className="col-xs-4 desc">Html theme</div>
                                      <div className="col-xs-3 qty">3</div>
                                      <div className="col-xs-5 amount text-end">$60.00</div>
                                    </div>
                                    <div className="row item">
                                      <div className="col-xs-4 desc">Bootstrap snippet</div>
                                      <div className="col-xs-3 qty">1</div>
                                      <div className="col-xs-5 amount text-end">$20.00</div>
                                    </div>
                                    <div className="row item">
                                      <div className="col-xs-4 desc">Snippets on bootdey</div>
                                      <div className="col-xs-3 qty">2</div>
                                      <div className="col-xs-5 amount text-end">$18.00</div>
                                    </div>
                                  </div>
                                  <div className="total text-end">
                                    <p className="extra-notes">
                                      <strong>Extra Notes</strong>
                                      Please send all items at the same time to shipping address by next week.
                                      Thanks a lot.
                                    </p>
                                    <div className="field">
                                      Subtotal <span>$379.00</span>
                                    </div>
                                    <div className="field">
                                      Shipping <span>$0.00</span>
                                    </div>
                                    <div className="field">
                                      Discount <span>4.5%</span>
                                    </div>
                                    <div className="field grand-total">
                                      Total <span>$312.00</span>
                                    </div>
                                  </div>
                  
                                  <div className="print">
                                    <a href="#">
                                      <FaPrint />
                                      Print this receipt
                                    </a>
                                  </div>
                                </div> */}
                                        </div>

                                        <div className="footer">
                                            Copyright © 2024. NNPC
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default App;
