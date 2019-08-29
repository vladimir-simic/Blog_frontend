import React, { Component } from 'react';
import Logo from "../../components/logo/logo";
import "./team.css";
import teamMale from "../photography/photos/team-member.jpg";
import teamFemale from "../photography/photos/team-member-female.png";

class Team extends Component {
    render() {
        return (
            <div>
                <Logo />
                <div className="team">
                    <h1 className="team-heading">Meet our team</h1>
                    <div className="team-member-1">
                        <img src={teamMale} alt="Male" className="team-photo"/>
                        <h3 className="team-name">John Doe</h3>
                        <p className="team-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="team-member-2">
                        <img src={teamFemale} alt="Female" className="team-photo"/>
                        <h3 className="team-name">Jane Doe</h3>
                        <p className="team-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="team-member-3">
                        <img src={teamMale} alt="Female" className="team-photo"/>
                        <h3 className="team-name">John Doe</h3>
                        <p className="team-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;