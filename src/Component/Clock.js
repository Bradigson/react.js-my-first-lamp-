import  '../Component/Clock.css';
const Clock = (props)=>{
    return(
        <div className="Clock">
            <h1>
                {props.time.toLocaleTimeString()}
            </h1>
        </div>
    )

}

export default Clock;