import React from 'react'

function DashboardCard(props) {
  return (
        <>
            <div className="w3-third w3-container w3-margin-bottom">
                <img src={props.image} alt="Norway" style={{width:'100%',height:'200px'}} className="w3-hover-opacity" />
                <div className="w3-container w3-white">
                    <p><b>{props.title}</b></p>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
  )
}

export default DashboardCard