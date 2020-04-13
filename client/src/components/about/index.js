import React from 'react'

const About = () => {
    return (
        <div style={{height:'calc(100vh - 50px)', display: 'flex', justifyContent:'center', alignItems:'center', color: 'white', fontSize: '1.5rem'}}>
            <div style={{textAlign:'center'}}>
                <h1 style={{marginBottom:'4vh', fontSize:'4rem'}}>Cryptx</h1>
                <p className="about_paragraph">
                    ... started in 2020. 
                </p>
                <p className="about_paragraph" style={{fontSize:'1rem'}}>
                    The project was created by <a style={{color: 'rgb(26, 134, 195)', fontWeight: '600', textDecoration:'none'}} target="_blank" href="https://github.com/alexander-braun/cryptx">Alexander Braun</a> 
                </p>
            </div>
        </div>
    )
}

export default About