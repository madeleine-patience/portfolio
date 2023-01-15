import React from 'react'
import userImage from '../../assets/images/about/avatar.jpg'
import downloadIcon from '../../assets/images/download.png'
import cvFile from '../../assets/images/cv.webp'
import Header from '../../Share/Header'

import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
  FaTwitch,
  FaGithub,
} from 'react-icons/fa'
import PageTitle from '../../Share/PageTitle'

const HomePage = () => {
  return (
    <div className="bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <>
        <PageTitle title="Home"></PageTitle>
        {/* End pagetitle */}

        <div
          className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
          data-aos="fade"
        >
          <img
            className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
            src={userImage}
            alt=""
          />
          <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
            Madeleine Belanger
          </h3>
          <p className="mb-4 text-[#7B7B7B]">Full Stack Developer</p>
          {/* Avatar Info End */}

          {/* Social information start */}
          <div className="flex space-x-3">
            <a
              d44d3a158a39774d5f54aacc8ae4ad5ea7b5b428
              href="https://twitter.com/madeleinebelan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaGithub />
              </span>
            </a>

            <a
              d44d3a158a39774d5f54aacc8ae4ad5ea7b5b428
              href="https://www.linkedin.com/in/madeleine-belanger/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>

            {/* git hub  */}

            <a
              href="https://twitter.com/madeleinebelan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1C9CEA]">
                <FaTwitter />
              </span>
            </a>
          </div>
          {/* Social information start */}

          {/* Dowanload button start */}
          <a
            href={cvFile}
            download
            className="flex items-center bg-gradient-to-r from-[#aaa0eb] to-[#a299da] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#aaa0eb] to-[#a299da] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
          >
            <img src={downloadIcon} alt="icon" className="mr-2" />
            Download Resume
          </a>

          {/* Dowanload button End */}
        </div>
      </>
    </div>
  )
}

export default HomePage
