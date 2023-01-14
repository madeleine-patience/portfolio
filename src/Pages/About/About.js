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
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who am i?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      Hi! I’m Madeleine. I recently made the switch from a
                      career in marketing to the exciting world of tech. With a
                      background in marketing and experience as a designer and
                      illustrator, I have a unique perspective on how to
                      approach problems and generate creative solutions. I'm
                      currently pursuing a career as a software developer and am
                      constantly learning and growing in this dynamic industry.
                      Its exciting for me to learn new technologies and enjoy
                      staying up-to-date on the latest trends and developments
                      in the field. In addition to my tech interests, I also
                      enjoy using my design and illustration skills to create
                      unique and engaging visuals. (AKA, I know what looks
                      good!) With a background in psychology and years of
                      working in teams and one on one with people- My
                      communication and people skills help me to be a well
                      rounded employee. Im so excited to bring all my past
                      experience and knowledge to a new position as a developer!
                      If you want to chat I'd love to talk anything coding,
                      #womenInTech, film photography, "west coast is best coast"
                      or local coffee shop reccomendations!
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      If you want to chat I'd love to talk anything coding,
                      #womenInTech, film photography, "west coast is best coast"
                      or local coffee shop reccomendations!
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Phone
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="tel:+1234567890"
                            >
                              +1 250 857 2308
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Location
                          </p>
                          <h6 className="font-medium dark:text-white">
                            Victoria B.C.
                          </h6>
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
                      <div className="flex">
                        <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaRegCalendarAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Birthday
                          </p>
                          <h6 className="font-medium dark:text-white">
                            July 8th, 1990
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
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                Services
              </h3>
              <div className="">
                {/* Experience information  */}

                {serviceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
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
