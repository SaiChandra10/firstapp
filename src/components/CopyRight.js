import "./CopyRight.css"

function CopyRight(){
    const name = "Sai Chandra";
    const year = new Date().getFullYear();

    return(
        <div >
            <h1 className="head">Hello {name}</h1>
            <p style={{color:"green"}}>Copyright @ {year}</p>
        </div>
    );
}

export default CopyRight;