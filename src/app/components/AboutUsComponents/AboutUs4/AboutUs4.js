import React, {useState} from "react";
import Image9 from '../../../assets/images/Image9.png';
import Image10 from '../../../assets/images/Image10.png';
import Image11 from '../../../assets/images/Image11.jpg';
import Image25 from '../../../assets/images/Image25.jpg';
import Image26 from '../../../assets/images/Image26.jpg';
import classes from './AboutUs4.module.css';


function AboutUs4(){

    const [team, setTeam] =useState([
         {
             image:Image9,
             name:"Samantha Jacobson",
             position:"Founder",
             about:"Sam was inspired to found Clean SlateZ after watching several people close to her struggle with " +
                 "increasing medical debts they could not afford. She offered support where she could, but often felt" +
                 " helpless to make a meaningful difference.",
             moreText:"Sam saw the emotional and mental toll that the medical debt took on the family, and the" +
                 " devasting consequences. Required prescriptions not refilled, prescribed therapy and treatments not " +
                 "sought, and necessary medical equipment and supplies not used all due to concern of how they would " +
                 "pay for them. The aftermath on their finances left them behind in mortgage/rent payments, utility " +
                 "bills, credit card bills, auto loans, and unable to afford the basics. As an individual, Sam could " +
                 "only do so much, but she saw an opportunity for all of us to collectively help solve the massive " +
                 "problem of medical debt, and Clean SlateZ was born. Boasting over a decade and a half in the" +
                 " healthcare domain, Samantha \"Sam\" Jacobson is a recognized industry leader in revenue cycle" +
                 " management for healthcare providers. Her depth in medical billing and collections isn't just " +
                 "technical; it's driven by a desire to enact change. Motivated to positively impact lives, Sam " +
                 "leverages her strategic prowess to deliver meaningful outcomes to those of us who need it most." +
                 " She holds a Bachelor’s of Science in Management, complemented by a minor in Occupational Safety and" +
                 " Health, from Embry-Riddle Aeronautical University."
     },
         {
             image:Image10,
             name:"Birt Stem",
             position:"Board of Directors",
             about:"A stalwart in healthcare for over three decades, Birt Stem's journey has been vast, from\n" +
                 "                        clinician roles to sales management and leading IT units for medical device firms.",
             moreText:"He's renowned for innovating with technology and automation, ensuring organizations remain both " +
                 "agile and impactful. He’s also a strong advocate for using technology to streamline processes and " +
                 "improve the patient and customer experience.  \n" +
                 "At his core, Birt is driven by patient-centric values, always prioritizing their holistic well-being," +
                 " including their financial health. His expertise ensures Clean SlateZ operates efficiently, maximizing" +
                 " the reach of every donated dollar. Birt's academic background shines with a Bachelor’s in Education," +
                 " emphasizing Athletic Training and Sports Medicine, from Azusa Pacific University.\n"

         },
         {
             image:Image11,
             name:"Miranda Dickman",
             position:"Board of Directors",
             about:"Miranda Dickman, a healthcare veteran with 20 years under her belt, is an authority on medical\n" +
                 "                        billing and collections for providers. Her expansive understanding spans medical claims,\n" +
                 "                        insurance dynamics, collection agencies, and patient financial assistance programs.",
             moreText:"This wealth of knowledge positions Miranda as an invaluable pillar of support and guidance for " +
                 "Clean SlateZ. Beyond her operational expertise, Miranda's academic accomplishments stand out—she's a" +
                 " double BA holder in Biochemistry and Molecular, Cellular, and Developmental Biology. Furthermore," +
                 " her recent Master’s in Healthcare Administration was earned with the distinction of a top scholar.\n"
         },
        {
            image: Image25,
            name:"Lauren Fuchsen",
            position: "Board of Directors",
            about:"Lauren is a seasoned registered nurse with over 15 years of diverse experience, spanning various " +
                "roles at the bedside and in business. For the past four years, she's dedicated her expertise to " +
                "third-party administration, empowering employers to tackle the soaring healthcare expenses. Her work " +
                "has a profound ripple effect, positively impacting consumers downstream.",
            moreText: "Driven by a fervent belief in holding healthcare providers accountable for their role in the" +
                " overwhelming burden of unaffordable medical bills and debt, Lauren is passionate about driving change." +
                " She channels her dedication into assisting individuals, providing relief, and advocating for a fairer " +
                "healthcare system. Her commitment lies in bridging the gap between quality care and affordability, " +
                "making a tangible difference in people's lives."
        },
        {
            image: Image26,
            name:"Melissa Butler",
            position: "Board of Directors",
            about:"With over 15 years of dedicated experience in Talent Management and Human Resources, Melissa has" +
                " established a distinguished career marked by a profound focus on Diversity and Inclusion initiatives. " +
                "She brings a wealth of expertise in shaping and executing strategic talent acquisition plans that " +
                "drive organizational growth and foster inclusive workplaces and integrating these principles into her" +
                " leadership approach.",
            moreText: "As a devoted Air Force Military mom, Melissa actively volunteers with various veteran groups, " +
                "embodying her commitment to supporting and empowering those who have served our country.Melissa brings" +
                " a unique perspective and unwavering dedication to promoting a diverse and inclusive environment. She" +
                " is committed to leveraging her skills and experiences to contribute meaningfully to Clean SlateZ, " +
                " fostering innovation, and driving positive change in helping individuals with the overwhelming burden " +
                "of high medical debt."
        }
     ])

    let showMore=(i)=>{
        let teamCopy=[...team];
        if(teamCopy[i].showMoreText){
            teamCopy[i].showMoreText= false
        }
        else{
            teamCopy[i].showMoreText=true
        }
        setTeam(teamCopy)
    }


    let renderInformation=team.map((item, index)=>(
        <div className={classes.inside} key={index}>
            <div className={classes.mainImgDiv}>
                <img className={classes.mainImg} src={item.image} alt={""}/>
            </div>
            <div className={classes.mainTitle}>{item.name}</div>
            <div className={classes.subTitle}>{item.position}</div>
            <div className={classes.description}>{item.about}</div>
            {item.showMoreText && <div className={classes.description}>{item.moreText}</div>}
            <div className={classes.view} onClick={()=>showMore(index)}>{!item.showMoreText ? "View more" : "View less"}</div>
        </div>
        )
    )


    return(
        <div className={"container"}>
            <div className={classes.whole}>
                <div className={classes.title}>Meet the Team</div>
                <div className={classes.main}>
                    {renderInformation}
                </div>
            </div>
        </div>
    )
}

export default AboutUs4;