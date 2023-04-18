import React from 'react'
import Slider from '../inc/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='text-header'>Our Company</h3>
              <div className='underline mx-auto'></div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-md-12'>
              <p className='font-normal fs-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
