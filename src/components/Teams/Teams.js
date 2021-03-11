/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeams(data.teams))
            .catch((err) => {
                console.log(err);
                alert('Somethings went wrong! Please try again later!');
            });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    {teams.map((team) => (
                        <TeamList team={team} key={team.idTeam} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Teams;
