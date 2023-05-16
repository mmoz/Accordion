import logo from './logo.svg';
import './App.css';
import data from './data';
import {useState} from "react"
import SingleContent from './Components/singlecontent';

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Website Tool</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}/>
          })}
        </section>
    

      </div>
      
    </main>

  
  );
}

export default App;
