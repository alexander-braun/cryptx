import React from 'react'

function ExpandMenueInput() {
    let expMenue = document.getElementsByClassName('expand_menue')[0]
    
    return (
        <div class="expandbutton_field" onClick={() => {
            if(expMenue) {
                if (expMenue.style.maxHeight){
                    expMenue.style.maxHeight = null;
                  } else {
                    expMenue.style.maxHeight = expMenue.scrollHeight + "px";
                  } 
            }
        }}>
            <div className="expandbutton_name">Frequency Analysis</div>
            <div className="button_menue">

            </div> 
        </div>
        
    )
}

export default ExpandMenueInput