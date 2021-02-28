import React, {useEffect, useState} from 'react';



const ReadApi = () => {
const [apis, setApis] = useState([])

useEffect(() => {
    console.log('useEffect')
    getDataTwitter()
    
}, [])

const getDataTwitter= async () => {
    const importData = await fetch('https://storage.googleapis.com/sismoee/2019/bogota/twitter.json')
    const data = await importData.json()
    setApis(data)
}
    return (
        <div>
            hola
        </div>
    )
}

export default ReadApi