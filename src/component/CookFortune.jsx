
const CookFortune =({data})=>{

    return(
        
    <article className="phortune">

<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>

        <h1>Galletas de la Fortuna</h1>

        <div className="conPhrase"> 
        <p>{data.phrase}</p>
        </div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
<div className="firefly"></div>
     </article>
    )
}

export default CookFortune