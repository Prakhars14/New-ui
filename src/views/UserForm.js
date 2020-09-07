import React, { useState } from 'react';

import SourcingAndScreening from '../components/SourcingAndScreening';
import Interview from '../components/Interview';
import ToolChecklist from '../components/ToolChecklist';
import DropOffCalculatorForm from './DropOffCalculatorForm';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, CustomInput, Progress } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';

const  UserForm = () => {

  const [data , setData] = useState({
    step: 1,
    openPosition: '',
    candidatesScreened: '',
    salaryRange: '',
    hoursSpend: '',
    recruiterCost: '',
    talentBranding: '',
    avgDropoffRate: '',
    candidateInterviewed :'' ,
    hoursSpend :'' ,
    managerSalary: '' , 
    hrManager: '',
    ats :'' ,
    assessment: '' , 
    videoInterview: '',
    preBoarding :'' ,
    onBoarding: '' , 
    sourcing: '',
    otherAmount: ''
  });


  const {   
    candidateInterviewed,
    hoursSpendScreening,
    managerSalary,
    hrManager,
    openPosition,
    candidatesScreened,
    salaryRange,
    hoursSpendInterviewing,
    recruiterCost,
    talentBranding,
    avgDropoffRate,
    ats ,
    assessment , 
    videoInterview,
    preBoarding,
    onBoarding , 
    sourcing,
    otherAmount,
    step
}  = data;


  // Proceed to next step
  const nextStep = () => {
    setData((data) => {
        return {
            ...data,
            step: step + 1
        }
    });
  };

  // Go back to prev step
  const prevStep = () => {
    setData((data) => {
        return {
            ...data,
            step: step - 1
        }
    });
  };
  // Handle fields change
//   onChange = input => e => {
//     setData({ [input]: e.target.value });
//   };


const onChange = e => setData({ ...data, [e.target.name]: e.target.value });
console.log('data',data);

const clearForm = () =>{
    setData(data => {
        return{
        step: 1
    }});
}
//change
return (<>
          <SourcingAndScreening
            nextStep={nextStep}
            onChange={onChange}
            data={data}
          />

          <Interview
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={onChange}
            data={data}
          />

          <ToolChecklist
            nextStep={nextStep}
            prevStep={prevStep}
            onChange={onChange}
            data={data}
          />

        {/* <DropOffCalculatorForm data ={data} clearForm={clearForm}  /> */}
        
         </>
         );
      //   case 5:
      // default:
      //   (console.log('This is a multi-step form built with React.'))
    }

// export default UserForm1;


const UserForm1 = () => {
  return (
      <Card>
          <CardBody>
              <h4 className="header-title mt-0 mb-1">Wizard with Progress bar</h4>
              <p className="sub-header">Example of wizard with progress bar</p>

              <Wizard
                  render={({ step, steps }) => (
                      <React.Fragment>
                          <Progress
                              animated
                              striped
                              color="success"
                              value={((steps.indexOf(step) + 1) / steps.length) * 100}
                              className="mb-3 progress-sm"
                          />

                          <Steps>
                              <Step
                                  id="login"
                                  render={({ next }) => (
                                      <Form>
                                          <FormGroup row>
                                              <Label for="exampleEmail1" md={3}>
                                                  Email
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="email"
                                                      name="email"
                                                      id="exampleEmail1"
                                                      placeholder="enter email"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                              <Label for="examplePassword1" md={3}>
                                                  Password
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="password"
                                                      name="password"
                                                      id="examplePassword1"
                                                      placeholder="password placeholder"
                                                      defaultValue="12345"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                              <Label for="examplerePassword1" md={3}>
                                                  Re-Password
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="password"
                                                      name="repassword"
                                                      id="examplerePassword1"
                                                      placeholder="password"
                                                      defaultValue="12345"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <ul className="list-inline wizard mb-0">
                                              <li className="next list-inline-item float-right">
                                                  <Button onClick={next} color="success">
                                                      Next
                                                  </Button>
                                              </li>
                                          </ul>
                                      </Form>
                                  )}
                              />
                              <Step
                                  id="gandalf"
                                  render={({ next, previous }) => (
                                      <Form>
                                          <FormGroup row>
                                              <Label for="fname1" md={3}>
                                                  First Name
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="text"
                                                      name="fname"
                                                      id="fname1"
                                                      placeholder="Enter first name"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                              <Label for="lname1" md={3}>
                                                  Last Name
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="text"
                                                      name="lname"
                                                      id="lname1"
                                                      placeholder="enter last name"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <FormGroup row>
                                              <Label for="phone1" md={3}>
                                                  Phone Number
                                              </Label>
                                              <Col md={9}>
                                                  <Input
                                                      type="text"
                                                      name="phone"
                                                      id="phone1"
                                                      placeholder="enter phone number"
                                                  />
                                              </Col>
                                          </FormGroup>

                                          <ul className="list-inline wizard mb-0">
                                              <li className="previous list-inline-item">
                                                  <Button onClick={previous} color="info">
                                                      Previous
                                                  </Button>
                                              </li>
                                              <li className="next list-inline-item float-right">
                                                  <Button onClick={next} color="success">
                                                      Next
                                                  </Button>
                                              </li>
                                          </ul>
                                      </Form>
                                  )}
                              />
                              <Step
                                  id="dumbledore"
                                  render={({ previous }) => (
                                      <Row>
                                          <Col sm={12}>
                                              <div className="text-center">
                                                  <h2 className="mt-0">
                                                      <i className="mdi mdi-check-all"></i>
                                                  </h2>
                                                  <h3 className="mt-0">Thank you !</h3>

                                                  <p className="w-75 mb-2 mx-auto">
                                                      Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                      dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                      mattis dictum aliquet.
                                                  </p>

                                                  <div className="mb-3">
                                                      <CustomInput
                                                          type="checkbox"
                                                          id="exampleCustomCheckbox1"
                                                          label="I agree with the Terms and Conditions"
                                                      />
                                                  </div>
                                              </div>
                                          </Col>

                                          <Col sm={12}>
                                              <ul className="list-inline wizard mb-0">
                                                  <li className="previous list-inline-item">
                                                      <Button onClick={previous} color="info">
                                                          Previous
                                                      </Button>
                                                  </li>

                                                  <li className="next list-inline-item float-right">
                                                      <Button color="success">Submit</Button>
                                                  </li>
                                              </ul>
                                          </Col>
                                      </Row>
                                  )}
                              />
                          </Steps>
                      </React.Fragment>
                  )}
              />
          </CardBody>
      </Card>
  );
};
export default UserForm;
