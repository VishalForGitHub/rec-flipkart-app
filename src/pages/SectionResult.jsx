import { useParams } from "react-router-dom";

export default function SectionResult(){
    let {sectionName}=useParams();
    return(
        <div className="ee">
             <h1>i am {sectionName}</h1>
        </div>
    );
}