import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamList.css';

const TeamList = (props) => {
    const { team } = props;
    const { idTeam, strTeam, strTeamBadge } = team;
    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="card">
                <Card.Img className="card-img" variant="top" src={strTeamBadge} />
                <Card.Body className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Button as={Link} to={`/team/${idTeam}`} variant="outline-primary">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default TeamList;
