import React from 'react';

const ToolChecklist = ({
    data,
    onChange,
    prevStep,
    nextStep,
    preview
}) => {

    const {    
        ats ,
        assessment , 
        videoInterview,
        preBoarding,
        onBoarding , 
        sourcing,
        otherAmount} = data;

    return (
        <div className=" mb-5">

            <div className=" shadow-sm">
                <div className="row">
                    <div className="col card p-2 " style={{ borderRadius: '0px' }}>
                        <div className=" card-header bg-white text-center text-underline">
                        <h5 class="card-title">
                        Tool checklist
                            </h5>

</div>

<div className=" card-body text-justify p-5">


Human resource function tools have played a vital role in automating the recruitment journey of candidates. The HR automation industry has come along a long way from ATS and sourcing tools to pre-boarding software for better employee and candidate experience.

Opt from the selection of standard recruitment tools, which would help in determining the overall cost.

</div>

</div>

                    <div className="col card p-2 " style={{ borderRadius: '0px' }}>
                        <form className="p-3">
                            <div class="form-group row">
                                <label for="input3" class="col">
Tool Checklist

</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" disabled placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">
ATS 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="ats" value={ats} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">

                                Assessment Tool 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="assessment" value={assessment} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">

                                Video Interview Tool 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="videoInterview" value={videoInterview} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">

                                Pre Boarding Tool 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="preBoarding" value={preBoarding} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="input3" class="col">

                                Onboarding tool 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="onBoarding" value={onBoarding} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">

                                Sourcing tool 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="sourcing" value={sourcing} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="input3" class="col">


                                Others(Specify amount) 
</label>
                                <div class="col">
                                    <input type="Number" class="form-control" id="input3" name="otherAmount" value={otherAmount} onChange={(e)=>onChange(e)} placeholder="" />
                                </div>
                            </div>

</form>
                </div>

            </div>
        </div>

{ !preview&&        <div className="mt-4 ">
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

export default ToolChecklist;
