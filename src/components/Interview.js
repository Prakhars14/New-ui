import React from 'react';

const Interview = ({
    data,
    prevStep,
    nextStep,
    onChange,
    preview
}) => {

    const {candidateInterviewed,
        hoursSpendInterviewing,
        managerSalary,
        hrManager} = data;
    return (
        <div className=" mb-5">

            <div className="shadow-sm" >
                <div className="row">
                    <div className="col card p-2 " style={{ borderRadius: '0px' }}>
                        <div className="card-header text-center bg-white" >
                            <h5 class="card-title">
                            Interviewing Cost
                            </h5>
</div>
                        <div className="card-body text-justify p-5 ">

                            With multiple stakeholders involved and lengthy multi-stage sessions, Candidate Interviewing is a significant cost component in the hiring process.

                            It is directly proportional to:
                            Number of candidate interviewed
                            Hour spend
                            Average salary of stakeholders

                            The total value is the approximate cost of a candidate interview.
</div>
                    </div>

                    <div className="col card p-2 " style={{ borderRadius: '0px' }} >
                        <form className="p-3">
                            <div class="form-group row">
                                <label for="input3" class="col">

                                    Number of candidates interviewed
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="candidateInterviewed" value={candidateInterviewed} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">

                                    Hours spends in interviewing and offer roll-out
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="hoursSpendInterviewing" value={hoursSpendInterviewing} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">

                                    Interviewer 1 salary per month
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="managerSalary" value={managerSalary} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">

                                    HR manager salary per month

</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="hrManager" value={hrManager} onChange={(e) => onChange(e)} placeholder="" />
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

{   !preview&&         <div className="mt-4 ">
                <div className="text-left d-inline">
                    <button
                        className="btn btn-secondary float-left"
                      onClick={prevStep}
                    >Back</button>
                </div>
                <div className="d-inline">
                    <button
                        className="btn btn-primary float-right"
                      onClick={nextStep}
                    >Continue</button>
                </div>
            </div >}

        </div >

    )
};

export default Interview;
