import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Excersises extends React.Component{
    constructor(props){
            super(props)
            this.state ={
                data:
                [{
                    "id": 1,
                    "description": "Learn amazing street workout and calisthenics",
                    "leftColor": "#A74CF2",
                    "rightColor": "#617BFB"
                },{
                    "id": 2,
                    "description": "Learn the secrets of bodyweight techniques",
                    "leftColor": "#17EAD9",
                    "rightColor": "#6078EA"
                },{
                    "id": 3,
                    "description": "Train anytime, everywere and become a superhero!",
                    "leftColor": "#FAD961",
                    "rightColor": "#F76B1C"
                }]
                
            }
    }

render(){
    return(
        <div>
                <Welcome 
                    username="Victor"
                />
                {   this.state.data.map((exercise) => {
                    return(
                        <Card 
                        title="HOLA MUNDO"
                        description="hola bienvendio a la practica de react"
                        leftColor="rgb(39, 142, 201)"
                        rightColor="rgb(224, 195, 113)"
    
                    />
                    )
                })}

            </div>
    )
}

}

export default Excersises