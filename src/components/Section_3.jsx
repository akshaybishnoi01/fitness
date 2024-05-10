import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import laptop_img from '../assets/image/laptop.png'
import group_2 from '../assets/image/Group_2.png'
const Section_3 = () => {
    return (
        <>
            <section className=' mt_-3 bg-black position-relative'>
                <Container className=' mw-1140 py-lg-5'>
                    <Row className=' justify-content-lg-between pb-5'>
                        <Col className="col-12 col-lg-5">
                            <div className=' d-flex justify-content-lg-start justify-content-center'>
                                <img className=' w-100 mw_530' src={laptop_img} alt="laptop_img" />
                            </div>
                        </Col>
                        <Col className=' col-12 col-lg-6  pt-5 d-flex justify-content-center'>
                            <div className=' mw_520'>
                                <h3 className=' mb-0 ff-Eurostile fs-30 fw-bold color_emphasis line-37 pb-4 text-lg-start text-center'>
                                    Let Me Know Where <span className=' color_secondary'>You Want Me To Send It</span>
                                </h3>
                                <input type="text" placeholder='Name' className=' mb-0 ff-Manrope fw-normal fs-16 line-21 color_emphasis opacity-50 w-100 name_bor' />
                                <input type="email" placeholder='Email' className=' mb-0 ff-Manrope fw-normal fs-16 line-21 color_emphasis opacity-50 w-100 name_bor mt-2' />
                                <div className=' d-flex justify-content-lg-start  justify-content-center pt-4'>
                                    <div className='border_btn mw_190 p-2 cur-pointer'>
                                        <button className=' mb-0 ff-Eurostile fw-bold line-14 fs-16 send_it color_tertiary'>
                                            Send It Here!
                                        </button>
                                        <div className='black_line trans_'></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className=' group-2 d-sm-flex d-none'>
                    <img src={group_2} alt="group_2" />
                </div>
            </section>
        </>
    )
}

export default Section_3