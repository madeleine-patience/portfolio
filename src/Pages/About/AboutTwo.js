import React from 'react'
import UseData from '../../Hooks/UseData'
import Footer from '../../Share/Footer'
import '../../Share/Style.css'
import SliderCommon from '../../Share/SliderCommon'
import AboutCard from './AboutCard'
import HomeCard from '../../Share/HomeCard'
import PageTitle from '../../Share/PageTitle'

const AboutTwo = () => {
  const { local, serviceArray } = UseData()

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden ">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7"></p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    Hi! Thanks for stopping by. I am a creative, personable and
                    hard working individual excited about web and application
                    development. With a background in design, I can bring
                    creative approches to your problem while keeping aesthetics
                    in mind. I am excited about working with local buisnesses
                    and connecting with the community in any way I can! When I'm
                    not learning the newest library you can find me exploring
                    coffee shops in the city, making my famous waffles for
                    friends or hanging out at the beach.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910"></p>
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              Services{' '}
            </h3>
            <div className=" ">
              {/* Experience information  */}

              {serviceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          {/* Common Footer call here */}
          <Footer bg={'#FFFF'} />
        </div>
      </div>
    </section>
  )
}

export default AboutTwo
