import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import header_img_2 from '../assets/image/header_img_2.png'
const header = () => {
  return (
    <>
      <header className=' header_bg_img min-vh-100'>
        <Container>
          <div>
            <div className=' d-flex justify-content-between align-items-center py-3'>
              <div>
                <h2 className=' mb-0 ff-Manrope fs-26 fw-semibold color_emphasis'>
                  logo
                </h2>
              </div>
              <div className='border_btn mw_185 p-2 cur-pointer '>
                <button className=' mb-0 ff-Eurostile fw-bold line-14 fs-14 get_in_touch color_tertiary'>
                  GET IN TOUCH
                </button>
                <div className='black_line trans_'></div>
              </div>
            </div>
          </div>
        </Container>
        <Container className='  mw_990'>
          <Row className=' py-5 flex-lg-row flex-column-reverse'>
            <Col className=' col-12 col-lg-8 d-flex justify-content-lg-start justify-content-center align-items-lg-start align-items-center'>
              <h2 className=' mb-0 ff-Eurostile fw-bold fs-45 line-59 color_emphasis py-lg-5 mt-3 mw_666 text-lg-start text-center '>
                Get The eBook That Reveals The <span className=' color_secondary fs-47 line-62'>7 Fitness Myths</span> That Are Holding
                You Back From Experiencing Top-Level Fitness
              </h2>
            </Col>
            <Col className=' col-12 col-lg-4 d-flex justify-content-lg-start justify-content-center'>
              <div className=' py-1'>
                <img className=' mw_338 w-100' src={header_img_2} alt="header_img_2" />
              </div>
            </Col>
          </Row>

        </Container>
      </header>
    </>
  )
}

export default header
