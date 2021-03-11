/* eslint-disable no-alert */
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowLeft,
    faFlag,
    faFutbol,
    faMapMarkerAlt,
    faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import female from '../../images/female.jpg';
import male from '../../images/male.jpg';
import './TeamDetail.css';

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    const {
        strTeam,
        strTeamBanner,
        intFormedYear,
        strLeague,
        strSport,
        strGender,
        strCountry,
        strDescriptionEN,
        strStadiumDescription,
        strFacebook,
        strTwitter,
        strInstagram,
        strYoutube,
    } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]))
            .catch((err) => {
                console.log(err);
                alert('Somethings went wrong! Please try again later!');
            });
    }, [idTeam]);

    let isGender;
    if (strGender === 'Male') {
        isGender = <img src={male} alt="Male" />;
    } else if (strGender === 'Female' || strGender === 'Mixed') {
        isGender = <img src={female} alt="female" />;
    }

    return (
        <>
            <img className="banner-img" src={strTeamBanner} alt="" />
            <Container className="mt-5">
                <Row className="team-info">
                    <Col md={6}>
                        <h1>{strTeam}</h1>
                        <h4>League: {strLeague}</h4>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}
                        </p>
                    </Col>
                    <Col md={6} className="team">
                        {isGender}
                    </Col>
                </Row>
                <br />
                <div className="text-justify">
                    <p>{strStadiumDescription}</p>
                    <br />
                    <p>{strDescriptionEN}</p>
                </div>

                <Button as={Link} to="/" variant="outline-primary">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>

                <div className="text-center social">
                    <a href={`https://${strFacebook}`} rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href={`https://${strTwitter}`} rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href={`https://${strInstagram}`} rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={`https://${strYoutube}`} rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
                <br />
            </Container>
        </>
    );
};

export default TeamDetail;
