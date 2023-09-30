import React from 'react';
import Menu from './Menu/Menu';
import DashboardCard from './Cards/DashboardCard';
function Home() {
    let resPonseJson =  [{
        "image" : "/image/logo.jpg",
        "title" : "Lorem Ipsum1",
        "description" : "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
    },{
        "image" : "/image/mountains.jpg",
        "title" : "Lorem Ipsum2",
        "description" : "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
    },{
        "image" : "/image/mountains.jpg",
        "title" : "Lorem Ipsum3",
        "description" : "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
    }]

  return (
        <>

     
            <div className="w3-main" style={{'margin-left':'300px'}}>

                <Menu />
                <div className="w3-row-padding">
                    {resPonseJson.map((data)=>{
                        return <DashboardCard image={data.image} description={data.description} title={data.title} />
                    })}
                </div>
                <div className="w3-row-padding">
                    {resPonseJson.map((data)=>{
                        return <DashboardCard image={data.image} description={data.description} title={data.title} />
                    })}
                </div>
            </div>
        </>
  )
}

export default Home