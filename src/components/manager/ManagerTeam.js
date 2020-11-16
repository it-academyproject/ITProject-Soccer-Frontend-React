import React, { useState } from 'react';
import matchByTeam from '../../json/team.json';
import img from '../../imgs/FootballAcademy.svg'

 // Icon or shield, choosen by a bunch of options? uploaded by manager?
 // Team name editable
 // Results? goals, players, date,...?

 //<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">

function ManagerTeam()  {
    
    var teamName = "The Big Zedini",
        manager = "Master of Disaster",
        numberOfPlayers = 21;
    var lastFiveResults = ["W", "L", "L", "W", "W"];
    var matchesByTeam = matchByTeam[0].matchByTeam;

    // Change content of match showing
    const [count, setCount] = useState(matchesByTeam[0]);

    function change (e){
        var id = document.getElementById(e.target.id);
        var classWinOrLose = document.getElementsByClassName('winOrLose');
        for (var i = 0; i < classWinOrLose.length; i++) {
            classWinOrLose[i].style.fontWeight = 300;
          }
        id.style.fontWeight = 700;
    }

    return ( 
        <div className="d-flex justify-content-around align-items-center"
             style={{width: "100%", height: "100vh"}}>

            <div className="d-flex justify-content-center" 
                 style={{ textAlign: "left", height: "50vh", minHeight: "500px"}}>

                <img src={img} className="" alt="shield of the team" style={{width: "170px", alignSelf: "flex-start", cursor: "pointer"}}></img>
               
                <div style={{marginLeft: "50px"}}>
                    <h2 style={{color: "#856895", marginBottom: "20px"}}><b>{teamName}</b>  <span class="material-icons" style={{cursor: "pointer"}}>create</span></h2> 

                    <p><b>Manager:</b> {manager}</p>
                    <p><b>Number of players:</b> {numberOfPlayers}</p>
                    <p><b>Last five results:</b> </p>
                    <div className= "d-flex justify-content-around align-items-center" 
                         style={{
                                backgroundColor: "#DBF3B2", 
                                borderRadius: "50px",
                                textAlign: "center",
                                height: "30px", 
                                padding: "15px 20px 0 20px"
                            }}
                    >
                        <p id ="1" className = "winOrLose" onClick={(e) => {setCount(matchesByTeam[0]); change(e);}} style={{fontWeight: "700"}}>{lastFiveResults[0]}</p>
                        <p id ="2" className = "winOrLose" onClick={(e) => {setCount(matchesByTeam[1]); change(e);}}>{lastFiveResults[1]}</p>
                        <p id ="3" className = "winOrLose" onClick={(e) => {setCount(matchesByTeam[2]); change(e);}}>{lastFiveResults[2]}</p>
                        <p id ="4" className = "winOrLose" onClick={(e) => {setCount(matchesByTeam[3]); change(e);}}>{lastFiveResults[3]}</p>
                        <p id ="5" className = "winOrLose" onClick={(e) => {setCount(matchesByTeam[4]); change(e);}}>{lastFiveResults[4]}</p>
                    </div>
                    <div style={{
                        height: "20vh",
                        width: "20vw",
                        minHeight: "200px", 
                        minWidth: "250px", 
                        backgroundColor: "#DBF3B2", 
                        marginTop: "20px",
                        textAlign: "center",
                        paddingTop: "40px",
                        borderRadius: "10px"}}
                    >
                        <h5><b>{count.local_team}</b> vs. <b>{count.visitor_team}</b></h5>
                        <h1 style={{fontWeight: "700"}}>{count.local_goals} - {count.visitor_goals}</h1>
                        <p>{count.date}</p>
                    </div>
                </div>
            </div>
         </div>
         );
}
 
export default ManagerTeam;