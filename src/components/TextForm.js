import React , {useState} from 'react'

export default function TextForm(props) {
  const handleupclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase","info");
    }
  const handlelowclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase","info");
  }
  const handleclearclick=()=>{
    let newText='';
    setText(newText);
  }
  const handleonchange=(event)=>{
    setText(event.target.value);
  }
  const [text,setText]=useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard","info");
  }

  return (
    <>
    <div className='container'>
        <h3 className="my-3">{props.heading}</h3>
        <div className="container my-3">
   <div className="form-floating">
    <div className="cont d-flex p-2">
  <textarea className="form-control" onChange={handleonchange} value={text} id="floatingTextarea" style={{backgroundColor:props.mode==='dark'?'black':'white'}}></textarea>
  
  <button disabled={text.length===0} type="button"  onClick={handleclearclick} className="btn btn-success my-3 mx-2 btn-sm">Clear</button></div>

  <button disabled={text.length===0} type="button"  onClick={handleupclick} className="btn btn-outline-primary my-3 mx-2">UPPERCASE</button>
  <button disabled={text.length===0} type="button"  onClick={handlelowclick} className="btn btn-outline-primary my-3 mx-2">lowercase</button>
  <button disabled={text.length===0} type="button"  onClick={handleCopy} className="btn btn-primary my-3 mx-2">Copy to Clipboard</button>
</div>
<div className="container my-3">
  <h4>Your text summary</h4>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read (for 125 wpm)</p>
</div>
</div>
<h5>Preview</h5>
<p>{text.length>0?text:"NULL"}</p>
    </div>
    </>
  )
}
