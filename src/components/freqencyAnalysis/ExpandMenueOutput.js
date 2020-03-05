import React from 'react'

function ExpandMenueOutput({method}) {

    let expMenue
    switch(method) {
        case 'Frequency Analysis':
            expMenue = document.getElementsByClassName('expand_menue')[1]
            break
        case 'Index of Coincidence':
            expMenue = document.getElementsByClassName('coincidence_menue')[1]
            break
        default: 
            return
    }
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
            <div className="expandbutton_name">{method}</div>
            <div className="button_menue">

            </div> 
        </div>
        
    )
}

export default ExpandMenueOutput