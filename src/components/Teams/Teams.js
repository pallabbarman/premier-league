import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamList from '../TeamList/TeamList';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeams(data.teams));
    }, []);

    return (
        <Container>
            <Row>
                {teams.map((team) => (
                    <TeamList team={team} />
                ))}
            </Row>
        </Container>
    );
};

export default Teams;
