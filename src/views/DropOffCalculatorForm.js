import React, { useState } from 'react';
// import { saveAs } from 'file-saver';

import 'bootstrap/dist/css/bootstrap.min.css';
import SourcingAndScreening from '../components/SourcingAndScreening';
import Interview from '../components/Interview';
import ToolChecklist from '../components/ToolChecklist';
// import Axios from 'axios';

import ContactFrom from '../components/ContactFrom';

function DropOffCalculatorForm({data ,clearForm}) {
    console.log('dropoff fine' , data);
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
        otherAmount
        }  = data;
        
    const [sourcingScreening, setSourcingScreening] = useState ({
        openPosition,
        candidatesScreened,
        salaryRange,
        hoursSpend:hoursSpendScreening,
        recruiterCost,
        talentBranding,
        avgDropoffRate
    });

    console.log('sourcingScreening', sourcingScreening);


    const [interviewing, setInterviewing] = useState ({
        candidateInterviewed ,
        hoursSpend:hoursSpendInterviewing ,
        managerSalary , 
        hrManager
    });


    const [toolChecklist, setToolChecklist] = useState ({
        ats ,
        assessment , 
        videoInterview,
        preBoarding ,
        onBoarding , 
        sourcing,
        otherAmount
    });

    // const [report , setReport] =useState({
    //     productivityLoss ,
    //     timeToHire , 
    //     sourcingScreening,
    //     interviewing ,
    //     avgToolCost , 
    //     total
    // })

    const x = ({
        openPosition,
        candidatesScreened,
        salaryRange,
        hoursSpendScreening,
        recruiterCost,
        talentBranding,
        avgDropoffRate  
    }) => { 
        console.log('value' ,   openPosition,
        candidatesScreened,
        salaryRange,
        hoursSpendInterviewing,
        recruiterCost,
        talentBranding,
        avgDropoffRate  );
        return (talentBranding/openPosition*.15 + (candidatesScreened*.15*hoursSpendInterviewing*(recruiterCost/22*8)));
    }

    const y = ({
        avgDropoffRate,
        candidateInterviewed  ,
        hoursSpend  ,
        managerSalary , 
        hrManager,
    }) => { 
        return (
            (candidateInterviewed*.15)*((hrManager/176)*hoursSpend*0.2+(managerSalary/176)*hoursSpendScreening*0.8)        )
    }

    const z  = ({
        ats ,
        assessment , 
        videoInterview,
        preBoarding ,
        onBoarding , 
        sourcing,
        avgDropoffRate,
        openPosition,
        candidatesScreened,
        candidateInterviewed

    }) => { 
        return (
            ((assessment+videoInterview)*candidateInterviewed+ (preBoarding+onBoarding)*openPosition + (ats+sourcing)*candidatesScreened)*.15
        
        )}


        const w = ({salaryRange}) => { 
            return (
                (salaryRange*60*3)/365            
            )}

    const onSubmit = async(contact) => {

        console.log('user contact' , contact);
        const  x1 = x(sourcingScreening);
        console.log('x1' ,x1);

        const  y1 = y( {...interviewing , avgDropoffRate:sourcingScreening.avgDropoffRate } );
        console.log('y1' ,y1);

        const z1 = z({...toolChecklist , avgDropoffRate:  sourcingScreening.avgDropoffRate , openPosition:sourcingScreening.openPosition , candidatesScreened:sourcingScreening.candidatesScreened ,candidateInterviewed:interviewing.candidateInterviewed });
        console.log('z1' ,z1);

        const w1 = w({salaryRange:sourcingScreening.salaryRange})
        console.log('w1' ,w1);

        const sum  = x1 + y1 + z1 + w1;
        console.log('sum' ,sum);

        // Axios.post('/create-pdf', {sourcingScreening,interviewing,toolChecklist})
        // .then(() => Axios.get('fetch-pdf', { responseType: 'blob' }))
        // .then((res) => {
        //   console.log('res',res.data);
        //   const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
        //   saveAs(pdfBlob, 'newPdf.pdf');
        // })

        clearForm();

           
    //     try{

  

    // //  const res=   await  Axios.post('http://4e7cb620a34c.ngrok.io/api/calculate',{sourcingScreening, interviewing , toolChecklist});
    // //  const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            
    // //  saveAs(pdfBlob, 'newPdf.pdf');
              
    // //  console.log('res',res);
    // }catch(err){
    //     console.log(err);
    // }
}

  return (
      <>

      <SourcingAndScreening  data = {data} preview={true}/>
      <Interview  data={data}  preview={true} />
      <ToolChecklist data={data}  preview={true}/>

      <ContactFrom onSubmit = {onSubmit}  />
        <p>Total  sum:</p>
    </>
  );
}

export default DropOffCalculatorForm;
