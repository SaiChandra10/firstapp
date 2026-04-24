import "./TimeBased.css"

function getText(date){
    if(date >= 6 && date <=12) return "Good Morning";
    else if(date > 12 && date <= 20) return "Good AfterNoon";
    else if(date > 20 || date < 6) return "Good Night";
}

function getSytle(date){
    if(date >= 6 && date <=12) return "morning";
    else if(date > 12 && date <= 20) return "afternoon";
    else if(date > 20 || date < 6) return "night";
}

function TimeBased () {
    const date = new Date(2026,1,1,22).getHours();
    const text = getText(date);
    const style = getSytle(date);
    console.log(date,text,style);
    return(
    <div>
        <h1 className={style}>{text}, okay</h1>
    </div>
    )

}

export default TimeBased;
