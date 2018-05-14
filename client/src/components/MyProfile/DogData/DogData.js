import React from "react";
import "./DogData.css";

const DogData = (props) => {
    return (
        <div className="profile-card card-panel grey lighten-5 z-depth-1 dog-text">
            <div className="row">
                <div className="col l5 m12 s12">
                    <img src={props.picture} alt="dog-image" class="responsive-img dog-image" id="dogDataImg" />
                </div>
                <div className="col l7 m12 s12">
                    <div className="row">
                        <div className="col l12">
                            <h3 className="profile-header"> {props.name} </h3>
                        </div>
                        <div className="row">
                            {/* <div className="col l1 m12 s12">
                            </div> */}
                            <div className="col l5 m12 s12" id="dog-info-left">
                                <span className="profile-text-dog">
                                    Breed: {props.breed}</span><br/><br/>
                                <span className="profile-text-dog">
                                    Size: {props.size} </span><br/><br/>
                                <span className="profile-text-dog">
                                    Age: {props.age} years old </span><br/><br/>
                                <span className="profile-text-dog">
                                    Temperment: {props.temperment}</span>
                            </div>
                            <div className="col l7 m12 s12" id="dog-info-left">
                                <span id="aboutDog" className="profile-text-dog">
                                    More about {props.name}: </span><br/><br/>
                                    <span className="profile-text-dog">{props.about}</span>
                            </div>
                            {/* <div className="col l1 m12 s12">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogData;


