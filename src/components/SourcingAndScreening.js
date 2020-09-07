import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SourcingAndScreening = ({onChange , data , nextStep ,preview }) => {

    const { openPosition,
        candidatesScreened,
        salaryRange,
        hoursSpendScreening,
        recruiterCost,
        talentBranding,
        avgDropoffRate,
        timeToHire,
    } = data;


    return (
        <div className=" mb-5">

            <div className=" shadow-sm " >
                <div className="row">
                    <div className="col card p-2 " style={{ borderRadius: '0px' }}>
                        <div className="card-header  bg-white text-center Number-underline">
                            <h5 class="card-title">
                                Sourcing & Screening Cost
                            </h5>

                        </div>
                        <div className=" text-justify card-body p-5">
                            Sourcing and screening are critical processes that outline an organization's quality of hire. The cost of supply is the sum of the total cost of sourcing a candidate and talent branding expenses.

                            The component directly proportional are
                            1. Salary range - higher package resources are costlier
                            2. Average employee turnover rate
                            3. Screening - Number of candidates screened
                            4. Cost per assessment - Recruiter salary and hours spent on screening

                            The total gives an approx cost for a candidate sourcing & screening.
                        </div>
                    </div>

                    <div className="col card p-2 " style={{ borderRadius: '0px' }}>
                        <form className="p-3" >
                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Number of open position
                                </label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="openPosition" value={openPosition} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">Number of candidates screened</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="candidatesScreened" value={candidatesScreened} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Salary range
                                </label>

                                <div class="col">

                                    <select class="form-control" onChange={onChange} value ={salaryRange} name="salaryRange">
                                        <option value="">-Select-</option>

                                        <option value="28">25k-35K</option>
                                        <option value="35">35k-50K</option>
                                        <option value="47">50k-75k</option>
                                        <option value="60">75K+</option>


                                    </select>
                                </div>
                            </div>


                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Time To Hire
                                </label>
                                <div class="col">
                                    <input type="text" class="form-control" id="input3" value={salaryRange} disabled/>
                                </div>
                            </div>


                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Hours spend in screening
                                </label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="hoursSpendScreening" value={hoursSpendScreening} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Recruiter cost per month
                                </label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="recruiterCost" value={recruiterCost} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Talent Branding
                                </label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="talentBranding" value={talentBranding} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">
                                    Avg. turnover rate
                                </label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="avgDropoffRate" value={avgDropoffRate} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

    {!preview &&        <div className="mt-4">
                <div className="text-right">
                    <button
                        className="btn btn-primary"
                        onClick={nextStep}
                    >Continue</button>
                </div>
            </div >}
        </div>

    )
};

export default SourcingAndScreening;
