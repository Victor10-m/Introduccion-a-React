/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import exerciseImg from '../images/1.jpg'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card mx-auto Fitness-Card">
                <div className="Card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1> hola mundo</h1>
                            <p>hola mundo a todos los que observen este ejemplo</p>
                        </div>   
                    </div>
                </div>
            </div> 
        )
    }
}

export default Card 