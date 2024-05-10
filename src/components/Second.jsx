import React from 'react'
import { Container } from 'react-bootstrap'
import group_1 from '../assets/image/Group_1.png'
const Second = () => {
  return (
    <>
      <section className=' mt_-3 bg-black py-md-5 position-relative'>
        <Container className=' mw_1120 py-5 '>
          <div className='box mb-4 position-relative overflow-hidden py-5 mt-lg-5'>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 text-center">
              If you’re reading this, most likely you’re in search of the keys that unlock world class performance…..performance that can get you to the next level of your playing career ….
              And let you create a lifestyle that you’ve always dreamed of… right?
            </p>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 py-3 text-center">
              Well there’s a big obstacle in your way…… one that you most likely don’t even notice….. like a hacker
              whose stolen your starting spot…..and you have no control over it.
            </p>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 text-center">
              That annoying little hacker is simply a lack of knowledge. Sounds ridiculous, right? Stick with me here…. If I knew back then (in my playing days) what I
              know now, I would probably still be playing instead of writing this eBook.
            </p>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 py-3 text-center">
              Early on in my career I realized that in order to get to the next level I needed to get stronger, pack on some lean muscle, improve my endurance,
              increase my sprint speed & develop robust change of direction qualities.
            </p>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 text-center">Problem was... I had no idea how to improve these qualities. I needed help. I spent majority of my time research
              ing on social media platforms & doing workouts that got me minimal results.</p>
            <p className=" mb-0 ff-Manrope fw-normal fs-18 color_emphasis line-24 pt-3 text-center">
              Once I figured out the secret sauce to improving all the qualities mentioned above, getting fit became effortless. No more stress, disappointment, anger or frustration. I want you to feel that too. This short eBook can provide you with the tools you need to start getting
              better results out of your current programs, while doing less not more.
            </p>
            <div className=' d-flex  justify-content-center pt-5 cur-pointer'>
              <div className=' border_btn mw_185 p-2 '>
                <button className=' mb-0 ff-Eurostile fw-bold line-14 fs-14 dowload_now color_tertiary'>
                  Download Now
                </button>
                <div className='black_line_2 trans_'></div>
              </div>
            </div>
            <div className='position-absolute pos_absolute w-100 '>
              <div className='ellipse'>
              </div>
            </div>
          </div>

        </Container>
        <div className=' group-1 d-lg-flex d-none'>
          <img src={group_1} alt="group_1" />
        </div>
      </section>
    </>
  )
}

export default Second