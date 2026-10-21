import React from 'react'
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
} from 'react-icons/fa'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import aboutImage from '../../assets/images/about/about.jpg'
import '../../Share/Style.css'
import Footer from '../../Share/Footer'
import UseData from '../../Hooks/UseData'
import SliderCommon from '../../Share/SliderCommon'
import AboutCard from './AboutCard'
import PageTitle from '../../Share/PageTitle'

const About = () => {
  const { local, serviceArray } = UseData()
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      Hi, I'm Madeleine, and I'm am a front-end software developer! Prior to making the switch from Marketing to
                      Tech- I worked for well known startups doing product
                      building and influencer marketing. This helped me to
                      realize that what I really wanted to do was the building
                      of products! With my background in design and marketing
                      combined with a degree in psychology - I can communicate
                      my ideas clearly, build what I need to build and make it
                      look good! I see myself as an enthusiastic, hardworking,
                      life long learner with a positive attitude.
                    </p>
                    <p className="text-gray-lite leading-7 mt-8 dark:text-color-910">
                     For the last 4 years I've been building products for the <a href="https://www.moneris.com/en/solutions/restaurants/online-ordering">UEAT</a> ecosystem. Anything from online ordering, to SMS marketing tools to POS systems. I have experience with a variety of libraries and tools.
                    </p>
                  </div>
                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                     Get in touch:
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                 
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
Québec City                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="mailto:ibthemes21@gmail.com"
                            >
                              madeleinepbelanger@gmail.com
                            </a>
                          </h6>
                        </div>
                      </div>
         
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>

            <div className="  pb-12 ">
        
              <div className="">
                {/* Experience information  */}

          
              </div>
            </div>

            <div>{/* Slick Slider call here  */}</div>

            {/* Common Footer call here */}
            <Footer condition={false} bg={'#FFFF'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
