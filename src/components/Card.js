/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import imge from '../images/1.jpg'
import './styles/Card.css'



class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={title:'HOLA MUNDO'}
    }
    componentDidMount(){
        setTimeout(()=> {
            this.setState ({
                title:'BIENVENIDO'
            })
        }, 5000)
    }

    render(){

        const { description, leftColor, rightColor}=this.props
        return(
            <div className="card mx-auto Fitness-Card"
            style= {{
                backgroundImage: ` linear-gradient(to right,${leftColor}, ${rightColor})`
            }}
            >
                <div className="Card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imge} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.state.title}</h1>
                            <p>{description}</p>
                        </div>   
                    </div>
                </div>
            </div> 
        )
    }
}

export default Card 