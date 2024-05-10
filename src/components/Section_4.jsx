import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cover_page from '../assets/image/Cover_page.png'
const Section_4 = () => {
    return (
        <>
            <section className=' background_img'>
                <Container className=' mw-1140 py-5'>
                    <Row className=' flex-lg-row flex-column-reverse'>
                        <Col className=' col-12 col-lg-8 py-5 d-flex justify-content-lg-start justify-content-center'>
                            <h4 className=' mb-0 ff-Eurostile text-lg-start text-center pt-4 mw_704 fs-30 fw-bold color_tertiary line-49'>
                                With The Right Knowledge Maintaining And Improving Your Fitness Becomes Effortless And Enjoyable. Stop Wasting Time You Don’t Have!
                            </h4>
                        </Col>
                        <Col className=' col-12 col-lg-4'>
                            <div className=' d-flex justify-content-center'>
                                <img className=' w-100 mw_305' src={cover_page} alt="cover_page" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section_4