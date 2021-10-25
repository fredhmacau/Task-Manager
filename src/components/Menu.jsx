import ContentMenu from "./ContentMenu"
import {Spring,animated} from "react-spring"
import {useState} from "react"



export default function Menu({toggleButton}) {
  const [menu,inMenu]=useState(false)
  return (
    <>
      {!menu?(
        <Spring from={{opacity:0}} to={{opacity:1}} loop={false}>
          {
            states=>(
              <animated.div style={states}>
                <div>
                  <ContentMenu inMenu={inMenu} toggleButton={toggleButton}/>
                </div>
              </animated.div>
            )
          }
          
        </Spring>
      ):(
       <></>
      )

      }
    </>
  )
}




