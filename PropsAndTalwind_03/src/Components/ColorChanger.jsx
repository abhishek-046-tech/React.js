import React,{useState} from 'react'

function ColorChanger() {
    const [color, setColor] = useState("olive")
    return (
        <div className='w-full h-screen duration-200'
            style={{backgroundColor: color}}
           
        >
          <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'></div>  
        </div>
    )
}

export default ColorChanger
