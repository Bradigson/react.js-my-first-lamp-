import '../Component/Lamp.css';



const Lamp = ()=>{
    const handleLamp = ()=>{
        let Lamp = document.querySelector('.lamp-lamp');
        Lamp.classList.toggle('On');
        let BtnLamp = document.querySelector('.btnLamp');

        if(BtnLamp.textContent === "ON"){
            BtnLamp.textContent = "OFF"
        }else{
            BtnLamp.textContent = "ON"
        }
    }
    return(
        <div className="Lamps">
            <div className="lamp-socalo"></div>
            <div className="lamp-lamp"></div>

            <div className="switch">
                <button className="btnLamp" onClick={handleLamp}>
                     OFF
                </button>
            </div>
            
        </div>
    )
}

export default Lamp;