import React from "react";
import "./ChallengeCard.css";
import img from '../../Images/banana3.png'
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

function ChallengeCard(props) {
    return (

        <div className="card cardCard">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Challenge:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Distance:</strong> {props.distance}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                    <li>
                        <strong>Bananas:</strong>
                        {/* {props.bananas} */}
                        {(() => {
                            return new Array(props.bananas).fill(
                                <img alt={props.name} src={img} />
                            )
                        })()}
                    </li>
                    <li>
                        {['left'].map(placement => (
                            <OverlayTrigger 
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        <strong>{placement} </strong> {props.description}
                                    </Tooltip>
                                }>
                                <Button variant="secondary" className="joinBtn">Join Now</Button>
                            </OverlayTrigger>
                        ))}
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ChallengeCard;