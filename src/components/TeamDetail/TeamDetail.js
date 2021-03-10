import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
    } = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTeam(data.teams[0]));
    }, [idTeam]);

    return (
        <>
            <img className="banner-img" src={strTeamBanner} alt="" />
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <h1>{strTeam}</h1>
                        <h3>{strLeague}</h3>
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
                        {strGender ? (
                            <img src={male} alt="Male" />
                        ) : (
                            <img src={female} alt="female" />
                        )}
                    </Col>
                </Row>
                <br />
                <div className="text-justify">
                    <p>{strStadiumDescription}</p>
                    <br />
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="text-center social">
                    <Link to={` https://${strFacebook}`} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>

                    <a href={strTwitter}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a href={strInstagram}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </Container>
        </>
    );
};

export default TeamDetail;
