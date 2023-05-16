import { useState } from "react";
import { AiOutlineDownCircle,AiOutlineMinusCircle } from "react-icons/ai";

const SingleContent =({title,description})=>{
    const [showcontent,setShowContent] = useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showcontent)}>
                    {showcontent? <AiOutlineMinusCircle/> : <AiOutlineDownCircle/>}
                </button>
            </header>
            <p>
                {showcontent && <p>{description}</p>}
            </p>

        </article>

    );
}
export default SingleContent