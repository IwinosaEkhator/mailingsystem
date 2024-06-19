import React from "react";

import "../Components/Admin/admin.css";



const AdminForm = () => {

    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.querySelector(".progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    let formStepsNum = 0;

    /* Event Listener for Next Button. */
    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            formStepsNum++;
            updateFormSteps();
            updateProgressbar();
        });
    });

    /* Event Listener for Back Button. */
    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            formStepsNum--;
            updateFormSteps();
            updateProgressbar();
        });
    });

    /* Updates Form Items */
    function updateFormSteps() {
        formSteps.forEach((formStep) => {
            formStep.classList.contains("form-step-active") &&
                formStep.classList.remove("form-step-active")
        })
        formSteps[formStepsNum].classList.add("form-step-active");
    }

    /* Updates Progress Bar */
    function updateProgressbar() {
        progressSteps.forEach((progressStep, index) => {
            if (index < formStepsNum + 1) {
                progressStep.classList.add('progress-step-active')


            } else {
                progressStep.classList.remove('progress-step-active')
            }
        })
        progress.style.width = ((formStepsNum) / (progressSteps.length - 1)) * 100 + "%";

    }

    return (
        <>

            <form action="#" class="form">
                <h2 class="text-center">Registration Form</h2>

                <div class="text-center"><a href="" target="_blank"></a></div>


                <div class="progressbar">
                    <div class="progress" id="progress"></div>
                    <div class="progress-step progress-step-active" data-title="Basic"></div>
                    <div class="progress-step" data-title="Contact"></div>
                    <div class="progress-step" data-title="Social"></div>
                    <div class="progress-step" data-title="Password"></div>
                </div>


                <div class="form-step form-step-active">
                    <div class="input-group">
                        <label for="dob">Date </label>
                        <input type="date" name="dob" id="dob" />
                    </div>
                    <div class="input-group">
                        <label for="firstName">From:</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>
                    <div className="input-group d-flex align-items-center">
                        <label for="lastName">To:</label>
                        <div className="d-flex flex-column ms-3">
                            <p class="mb-0 text-underlined">Ekhator Iwinosa</p>
                            <p class="mb-0">npdc.b5544</p>
                            <p class="mb-0">Ekhator Iwinosa</p>
                        </div>
                    </div>
                    <div class="">
                        <a href="#" class="btn-form btn-next width-50 ml-auto">Next</a>
                    </div>
                </div>


                <div class="form-step">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div class="input-group">
                        <label for="email">Email Address</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div class="input-group">
                        <label for="phone">Phone Number</label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div class="btns-group">
                        <a href="#" class="btn-form btn-prev">Back</a>
                        <a href="#" class="btn-form btn-next">Next</a>
                    </div>
                </div>


                <div class="form-step">
                    <div class="input-group">
                        <label for="instagram">Instagram Username</label>
                        <input type="text" name="instagram" id="instagram" />
                    </div>
                    <div class="input-group">
                        <label for="text">Twitter Username</label>
                        <input type="text" name="twitter" id="twitter" />
                    </div>
                    <div class="input-group">
                        <label for="github">Github Username</label>
                        <input type="text" name="github" id="github" />
                    </div>
                    <div class="btns-group">
                        <a href="#" class="btn-form btn-prev">Back</a>
                        <a href="#" class="btn-form btn-next">Next</a>
                    </div>
                </div>


                <div class="form-step">
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div class="input-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                    </div>
                    <div class="btns-group">
                        <a href="#" class="btn-form btn-prev">Back</a>
                        <input type="submit" value="Register" class="btn-form" />
                    </div>
                </div>
            </form>

        </>
    )
};

export default AdminForm;