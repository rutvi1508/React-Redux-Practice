import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
function Home() {


    const location = useLocation()
    const history = useParams();
    console.log("LOCAOSAJNAND", location)
    console.log("dshgfdshf", history)

    return (
        <div>
            <h1>Hello Home</h1>
        </div>
    )
}

export default Home