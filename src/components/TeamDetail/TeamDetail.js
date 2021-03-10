import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TeamDetail.css';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    const { strTeam, strTeamBanner } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]));
    }, [idTeam]);

    return (
        <Container>
            <img className="banner-img" src={strTeamBanner} alt="" />
            <h1>{strTeam}</h1>
        </Container>
    );
};

export default TeamDetail;
