import React/*,{useState}*/ from 'react'

export default function About(props) {
    // let MyStyle = {
    //     color : 'black',
    //     backgroundColor : 'green'
    //     // border:'1px solid black'
    // }
    // const [MyStyle,setMyStyle] = useState({color : 'black',
    //                                 backgroundColor : 'white',
    //                                 border:'1px solid black'
    //                                 }); 
    // // const [btnText, setbtnText] = useState('Dark Mode');
    // const handleToggle = ()=>{
    //     if(MyStyle.color === 'black')
    //     {
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         // setbtnText('Dark Mode')
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor:'white',
    //             border:'1px solid black'
    //         })
    //         // setbtnText('Light Mode')
    //     }
    // }
    
    
  return (
    <>
            <div className="container" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion accordion-flush " id="accordionFlushExample" /*style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}*/ style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}  aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
                This is the first item's accordation body.These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,through the transition does limot overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
            <h2 className="accordion-header" id="flush-headingTwo" style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}>
            <button className="accordion-button collapsed" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="flush-collapseTwo"  style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count and word count statistics for a gicen text.
                TextUtils reports the number of words and characters. Thus it is suitable for writing text with word character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
            <h2 className="accordion-header" id="flush-headingThree" style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}>
            <button className="accordion-button collapsed" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <strong> Browser Compatible</strong>
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"  style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}>
                This word counter software works in any web browsers such as Chrome, Firefix, Internet explorer,safari , opers,etx.It suits to count characters in facebook, blog ,books, excel document, pdf document, essays, etc.
            </div>
            </div>
            </div>
        </div>
        <div className="container my-2" style={{backgroundColor:props.Mode==='dark'?'#343a40':'white',color:props.Mode==='dark'?'white':'black'}}></div>

        {/* <div className="form-check form-switch m-4">
           <input className="form-check-input" type="checkbox" role="switch" onClick={handleToggle} id="flexSwitchCheckDefault"/> 
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"   >Dark Mode</label> 
          {/* <button className="btn btn-primary mx-2" style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}} onClick={handleToggle} >{btnText}</button> */}
        {/* </div> */} 
      
            </div>
    </>
  )
}
