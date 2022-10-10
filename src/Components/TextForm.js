import React,{useState} from 'react'


export default function TextForm(props) {

    const  handleUpClick=()=>{
        // console.log("uppercase button was clicked");
        let upText = text.toUpperCase();
        setText(upText);
        
    }
    const  handleLowClick=()=>{
        // console.log("lowercase button was clicked");
        let lowText = text.toLowerCase();
        console.log(lowText);
        setText(lowText);
        
    }

    const  handleCopy=()=>{
        // let  text = document.getElementById("MyBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showMessage("Copied to clipboard");
        
    }
    const  handleExtraSpaces=()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
    }
    
    const handleClean=(event)=>{
        // console.log("On change");
        setText("");
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
     const[text,setText] = useState(""); //its the default random text (garbage) and   setText is the function which can change the value on the variable text.
    console.log(text);
   
     return (
    <>
        <div>
        <div className="mb-3 my-5" ><br/>
        <label htmlFor="MyBox" className="form-label"><h5 style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>{props.heading}</h5></label>
        <textarea className="form-control" placeholder="Enter text here...!!!!!" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}} id="MyBox" rows="7" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0 }  className="btn btn-primary m-1"  onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button disabled={text.length===0}  className="btn btn-primary m-1"  onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary m-1 " onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-outline-primary m-1 " onClick={handleClean}>Clear</button>
        <button  disabled={text.length===0}className="btn btn-primary m-1 " onClick={handleCopy}  >Copy</button>
        <button  disabled={text.length===0}  className="btn btn-primary m-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p color='red'>{/*{text === "" ? 0 : */}{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} - Words and {text.length} - Characters</p>
        </div>
    </>
)
}
