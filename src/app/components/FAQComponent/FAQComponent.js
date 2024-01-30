import React, {useState} from "react";
import MinusWithBackground from '../../assets/icons/MinusWithbackground.svg';
import Plus from '../../assets/icons/Plus.svg';
import Minus from '../../assets/icons/Minus.svg';
import PlusWithBackground from '../../assets/icons/PlusWithBackground.svg';
import Pdf from '../../assets/files/IRS.pdf';
import Letter from '../../assets/files/ConsentLetter.docx';
import classes from './FAQComponent.module.css';


function FAQComponent(){

    let [types, setTypes]=useState([
        {
            name:"Donations",
            questions:[
                {
                    question:"Are my donations tax deductible?",
                    answer:"Yes.  We have received 501(c)3 status as a charity and your donations are 100% tax " +
                        "deductible. \n Click here to view our IRS 501(c)3 determination letter.",
                    showAnswer:true
                },
                {
                    question:"Can I help a specific person?",
                    answer:"Unfortunately, not.  We cannot disclose the names of people who have applied for assistance.",
                    showAnswer:true
                },
                {
                    question:"Can I designate funds for certain affiliations?",
                    answer:"As part of our application process, we do allow applicants to opt to provide additional " +
                        "information such as veteran or church affiliation.  We can designate your funds specifically " +
                        "to one of those identified groups of applicants. For our wholesale program, we are not provided" +
                        " this type of information with the debt portfolios.",
                    showAnswer:true
                },
                {
                    question:"Can a group designate funds for specific applicants?",
                    answer:"While we cannot disclose the names of any applicants, we can provide a group a code to use." +
                        "  This code could be shared with potential applicants that your group would like to support " +
                        "allowing us to earmark your donations for that group.  Please contact us at " +
                        "info@cleanslatez.org for more information.",
                    showAnswer:true
                }
            ]
        },
        {
            name:"Applicants",
            questions:[
                {
                    question:"What does this cost me?",
                    answer:"Nothing. We are a non-profit organization working to alleviate your medical debt. You will" +
                        " never pay a penny to us for any services we provide on your behalf.",
                    showAnswer:true
                },
                {
                    question:"Will you run my credit score?",
                    answer:"Yes, we need to perform a soft inquiry on your credit to approve you meet the eligibility " +
                        "criteria. This soft inquiry has no impact to your credit score.",
                    showAnswer:true
                },
                {
                    question:"Do I owe any taxes?",
                    answer:"No, you will not have any tax consequences from the relief of your medical debt.",
                    showAnswer:true
                },
                {
                    question:"Can I apply for medical debt relief for bills for my family?",
                    answer:"If you are the responsible party, then yes, you can include these debts in your application." +
                        " Common examples are minor children, disabled children, and family members where you are a " +
                        "guardian.",
                    showAnswer:true
                },
                {
                    question:"Do you keep my information confidential?",
                    answer:"Absolutely. We will only share the minimum information necessary to approve your" +
                        " application, and to negotiate with your creditors. We will never publicly share your" +
                        " information and all of your information is securely stored in our system.",
                    showAnswer:true
                },
                {
                    question:"Why do you need me to authorize a consent form?",
                    answer:"This form will be sent to your creditors, to provide proof that you have authorized us to " +
                        "speak on your behalf. Use of this form allows us to more quickly resolve medical debt, and do" +
                        " this without trying to coordinate 3-way calls with you and the creditor, or getting your" +
                        " authorization account by account. The consent form only authorizes us to work to resolve" +
                        " the medical debt that you reported to us in your application, nothing more.",
                    showAnswer:true
                },
                {
                    question:"Will you negotiate on my behalf?",
                    answer:"Yes, we negotiate directly with your creditors.",
                    showAnswer:true
                },
                {
                    question:"Do you pay me?",
                    answer:"No, we do not issue any funding directly to the applicants. To ensure that the funding is" +
                        " used for the medical debt relief, we pay directly to the creditors.",
                    showAnswer:true
                },
                {
                    question:"What do I have to do?",
                    answer:"Just complete the application form, and then we take care of the rest.",
                    showAnswer:true
                },
                {
                    question:"Is it a guarantee you will relieve my debt if I apply?",
                    answer:"No, we cannot offer any guarantees. Every individual has a unique situation. We first need " +
                        "to ensure we have enough donations to support our applicants. And then we need to negotiate" +
                        " with your creditors which may take time. It is possible that one or more of your creditors " +
                        "will be unwilling to negotiate the balance and we may not be able to relieve that debt, but we" +
                        " strive to relieve 100% of applicant’s debt.",
                    showAnswer:true
                },
                {
                    question:"How long does the process take?",
                    answer:"This is entirely dependent on the donations available, the number of applicants, the number" +
                        " of medical debts each applicant has, and the response time of the creditors. Generally, we " +
                        "anticipate a range of 1 to 4 months after you have applied before we have full resolution.",
                    showAnswer:true
                },
                {
                    question:"I received a letter you relieved some debt, but I still have other debts.",
                    answer:"This means that we purchased and abolished your debt as part of our Wholesale program. We" +
                        " encourage you to submit an application for the remaining past due medical debt you have.",
                    showAnswer:true
                },
                {
                    question:"My application was denied, what now?",
                    answer:"This means that the information we received the credit bureau does not match the" +
                        " information you provided. In this unlikely event, we will need you to submit proof of your " +
                        "income to validate the eligibility of the program. Please follow the instructions in the email " +
                        "you received.\n" +
                        "We also encourage you to reach out to the medical provider directly to apply for financial" +
                        " assistance or try to negotiate a discount. We are unable to assist with debts for those who" +
                        " do not qualify, but many providers will work with you if you contact them directly.",
                    showAnswer:true
                },
                {
                    question:"How can I check the status of my application?",
                    answer:"Unfortunately, we are unable to administratively handle providing ongoing updates on the " +
                        "status of your application. We do send emails as we are able to relieve debt on your behalf." +
                        " Please be on the lookout for emails from us.",
                    showAnswer:true
                },
                {
                    question:"What criteria do you use?",
                    answer:"We provide support for those whose total household income are at 400% or less of the " +
                        "federal poverty guidelines, or whose medical debt is 5% or more of their household annual " +
                        "income.",
                    showAnswer:true
                },
                {
                    question:"I put my medical debt on a Visa or Mastercard, can I still apply?",
                    answer:"No, unfortunately not. This debt is no longer officially confirmable as medical debt. " +
                        "Relieving this type of debt would have tax consequences to you, the applicant. For every $1 we" +
                        " relieve, you would owe tax as taxable income. We have a future program that we will be" +
                        " working to get IRS approval on, which would allow us to consider debt such as this, but today," +
                        " we cannot.",
                    showAnswer:true
                },
                {
                    question:"Will you sell or share my information?",
                    answer:"Absolutely not! We use your information internally to absolve your medical debt. We will " +
                        "never sell or share your information with any party that is unrelated to absolving your medical" +
                        " debt. We share your information only to the extent necessary to resolve your debt, which is" +
                        " to the credit bureau and your creditors.",
                    showAnswer:true
                },
                {
                    question:"How do you use the optional information I provided in the application?",
                    answer:"Two part use. First we use this to help match you to donors who are interested in donating" +
                        " to specific groups of people, such as veterans or single parents.\n" +
                        "Next, we aggregate all the responses received to get a picture of our applicant pool. We never" +
                        " use the individual response, and the information is used to demonstrate the need across " +
                        "different groups. Information used for this purpose would look something like this:\nX% of applicants are veterans.\n" +
                        "X% of our applicants are single parents.\n" +
                        "X% of our applicants are American Indian or Alaska Native.",
                    showAnswer:true
                }
                ]
        },
        {
            name:"Providers",
            questions:[
                {
                    question:"Will you purchase delinquent medical debt from my practice?",
                    answer:"Yes, we will work with you to review and analyze your outstanding medical debt. We will " +
                        "offer you a fair market value estimation to purchase the medical debt.",
                    showAnswer:true
                },
                {
                    question:"Does it matter what type of medical debt it is?",
                    answer:"No, as long as it is medical debt it can be any type of debt.\n",
                    showAnswer:true
                },
                {
                    question:"Does it matter how old the debt it is?",
                    answer:"No, as long as the debt is delinquent, we do not put aging parameters on the debt we " +
                        "purchase.",
                    showAnswer:true
                },
                {
                    question:"How am I benefiting financially?",
                    answer:"Immediate impacts are seen by providers. You will stop paying for mail and postage to send " +
                        "statements to patients that cannot pay. Stop the cost of outbound collection calls. Eliminate " +
                        "the calls from patients to your office to inquire about these past due bills. Stop dragging " +
                        "bad debt around on your balance sheet. Gives your collection team or agency more time to focus" +
                        " on truly collectable accounts.",
                    showAnswer:true
                }
            ]
        }
    ])


    let handleOpenQuestions =(index)=>{
        if(types[index].showQuestions){
            types[index].showQuestions =false
        }
        else{
            types[index].showQuestions =true
        }
        setTypes([...types])
    }

    let toggleAnswer =(index, inx)=>{
        if(types[index].questions[inx].showAnswer){
            types[index].questions[inx].showAnswer=false
        }
        else{
            types[index].questions[inx].showAnswer=true
        }
        setTypes([...types])
    }

    let switchForAnswer=(parameter, answer)=>{
        switch (parameter) {
            case "Are my donations tax deductible?":
                    return (
                        <div className={classes.answer}>Yes. We have received 501(c)3 status as a charity and your donations are 100% tax
                            deductible. <br/>Click<span style={{marginLeft:"5px",
                            marginRight:"5px"}}>
                                <a style={{ color:"#102F5E", textDecoration:"underlined", fontWeight:"bold"}} href={Pdf} download="IRS 501(c)3.pdf" target="_blank"
                                                              onClick={()=>window.open(`${Pdf}`)}>here</a></span>
                            to view our IRS 501(c)3 determination letter.</div>  );
            case "Why do you need me to authorize a consent form?":
                return (
                    <div className={classes.answer}>This form will be sent to your creditors, to provide proof that you
                        have authorized us to speak on your behalf. Use of this form allows us to more quickly resolve
                        medical debt, and do this without trying to coordinate 3-way calls with you and the creditor,
                        or getting your authorization account by account. The consent form only authorizes us to work
                        to resolve the medical debt that you reported to us in your application, nothing more.<br/>
                        Click<span style={{marginLeft:"5px", marginRight:"5px"}}><a style={{ color:"#102F5E",
                            textDecoration:"underlined", fontWeight:"bold"}}
                                                                                    href={Letter}
                                                                                    download="Consent Letter.docx"
                                                                                    target="_blank">here</a></span>
                        to view the consent form.</div>  );
            default:
                return <div className={classes.answer}>{answer}</div>
    }}


    const renderTypes=types.map((item, index)=>(
        <>
            <div className={classes.typeWhole} key={index} onClick={()=>handleOpenQuestions(index)}>
                <div className={classes.typeLeft}>{item.name}</div>
                <div className={classes.typeRight}>
                    {item.showQuestions ? <img src={MinusWithBackground} alt={""}/> :
                        <img src={PlusWithBackground} alt={""}/>}
                </div>
            </div>
            { item.showQuestions && item.questions.map((single, inx)=>(
                <div className={classes.questionSection} key={inx}>
                    <div className={classes.upPart}>
                        <div className={classes.upLeft}>
                            <div className={classes.question}>{single.question}</div>
                        </div>
                        <div className={classes.upRight} onClick={()=>{
                            toggleAnswer(index, inx)
                        }}>{single.showAnswer ?
                            <img src={Minus} alt={"plus image"} /> : <img src={Plus} alt={"plus image"} />}
                            </div>
                    </div>
                    {single.showAnswer && switchForAnswer(single.question, single.answer)}
                </div>
            ))}
        </>
    ));

    return(
        <div className={"container"}>
            <div className={classes.title}>How can we help?</div>
            <div className={classes.inside}>
                {renderTypes}
            </div>
        </div>
    )
}

export default FAQComponent;