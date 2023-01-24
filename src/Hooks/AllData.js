import { useEffect, useState } from 'react'
// for work_images
import work1 from '../assets/images/work_images/1.jpg'
import work2 from '../assets/images/work_images/2.jpg'
import work3 from '../assets/images/work_images/3.jpg'
import work4 from '../assets/images/work_images/4.jpg'
import work5 from '../assets/images/work_images/5.jpg'
import work6 from '../assets/images/work_images/6.jpg'
import work7 from '../assets/images/work_images/7.jpg'
import work8 from '../assets/images/work_images/8.jpg'
import work9 from '../assets/images/work_images/9.jpg'
// works small images
import workSmall1 from '../assets/images/work_images/small/1.jpg'
import workSmall2 from '../assets/images/work_images/small/2.jpg'
import workSmall3 from '../assets/images/work_images/small/3.jpg'
import workSmall4 from '../assets/images/work_images/small/4.jpg'
import workSmall5 from '../assets/images/work_images/small/5.jpg'
import workSmall6 from '../assets/images/work_images/small/6.jpg'
import workSmall7 from '../assets/images/work_images/small/7.jpg'
import workSmall8 from '../assets/images/work_images/small/8.jpg'
import workSmall9 from '../assets/images/work_images/small/9.jpg'
// blog post images
import blog6 from '../assets/images/blog_images/6.jpg'
import blog4 from '../assets/images/blog_images/4.jpg'
import blog2 from '../assets/images/blog_images/2.jpg'
import blog1 from '../assets/images/blog_images/1.jpg'
import blog3 from '../assets/images/blog_images/3.jpg'
import blog5 from '../assets/images/blog_images/5.jpg'
// blog image small
import blogSmall6 from '../assets/images/blog_images/small/6.jpg'
import blogSmall4 from '../assets/images/blog_images/small/4.jpg'
import blogSmall2 from '../assets/images/blog_images/small/2.jpg'
import blogSmall1 from '../assets/images/blog_images/small/1.jpg'
import blogSmall3 from '../assets/images/blog_images/small/3.jpg'
import blogSmall5 from '../assets/images/blog_images/small/5.jpg'

import img1 from '../assets/images/slider/brand-1.png'
import img2 from '../assets/images/slider/brand-2.png'
import img3 from '../assets/images/slider/brand-3.png'
import img4 from '../assets/images/slider/brand-4.png'
import img5 from '../assets/images/slider/brand-5.png'
//  icon use as img here
import icon from '../assets/images/icons/icon-1.svg'
import icon1 from '../assets/images/icons/icon-2.svg'
import icon2 from '../assets/images/icons/icon-3.svg'
import icon3 from '../assets/images/icons/icon-4.svg'
import icon4 from '../assets/images/icons/icon-5.svg'
import icon5 from '../assets/images/icons/icon-6.svg'
// contact image
import iconPhone from '../assets/images/contact/phone-call 1.png'
import iconEmail from '../assets/images/contact/email 1.png'
import iconMap from '../assets/images/contact/map 1.png'
import { CgNotes } from 'react-icons/cg'
import { FaBlogger, FaRegUser } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { FiCodesandbox } from 'react-icons/fi'
import { RiContactsBookLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const AllData = () => {
  const [check, setCheck] = useState(false)
  const [local, setLocal] = useState(localStorage.getItem('theme'))
  const [singleData, setSingleData] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem('theme')

    if (!themeValue) {
      setCheck(false)
      localStorage.setItem('theme', 'light')
    } else {
      themeValue === 'dark' && setCheck(true)
      themeValue === 'light' && setCheck(false)
    }

    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [])

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === 'light') {
      setCheck(false)
      localStorage.setItem('theme', 'light')
      setLocal('light')
    } else {
      setCheck(true)
      localStorage.setItem('theme', 'dark')
      setLocal('dark')
    }
    localStorage?.getItem('theme') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  // fillter portfilo data
  const handleData = (text) => {
    if (text === 'All') {
      setData(workItems)
    } else {
      const findData = workItems.filter((item) => item.tag === text)
      setData(findData)
    }
  }

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id)
    setSingleData(find)
    setIsOpen(true)
  }

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id)
    setSingleData(find)
    setIsOpen(true)
  }

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation()
    let isActive = location.pathname === to
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`)
    return <Link className={allClassNames} to={to} {...rest} />
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: '1',
      tag: 'App Development',
      title: 'Lucent App',
      img: work9,
      imgSmall: work9,
      bg: '#FFF0F0',
      client: 'Myself- Passion Project',
      langages: 'Node.js, Express, EJS, MongoDB',
      link: 'https://lucent.onrender.com/',
      linkText: 'Lucent App',
      description:
        'Lucent App is a full stack application for those in depth dreamers who need a little more guidance and structure in their writing. From writing workshops to vision boarding this app is just getting started but is currently going to satisfy any writer.',
    },
    {
      id: '2',
      tag: 'Web Design and Development',
      title: 'Considerate Cat Design',
      img: workSmall2,
      imgSmall: workSmall2,
      bg: '#FFF3FC',
      client: 'Considerate Cat ',
      langages: 'HTML, CSS, Javascript',
      link: 'www.consideratecat.com',
      linkText: 'Considerate Cat',
      description:
        'A full stack wordpress site that I have been developing and maintaining for years. From design to managing plugins this site is as functional as it is adorable! Come for the website application but stay for the kittens!',
    },

    {
      id: '4',
      tag: 'Website Development',
      title: 'Breath',
      img: workSmall4,
      imgSmall: workSmall4,
      bg: '#E9FAFF',
      client: 'Breath Yoga ',
      langages: 'CSS & HTML',
      linkText: 'Breath',
      description:
        ' A Static site for a local yoga studio. Clean, minamalist and functional',
    },
    {
      id: '5',
      tag: 'Web Development',
      title: 'Island Dog Rescue',
      img: workSmall1,
      imgSmall: workSmall1,
      bg: '#FFF0F0',
      client: 'Island Dog',
      langages: 'HTML, Javascript, CSS, Tailwind',
      link: 'https://island-dog.netlify.app/',
      linkText: 'www.islanddog.com',
      description: 'A site for a local dog rescue. My dream client.',
    },
    {
      id: '6',
      tag: 'Full Stack ',
      title: 'Dev Days',
      img: work8,
      imgSmall: work8,
      bg: '#F4F4FF',
      client: 'Envato',
      langages: 'Node.Js, EJS, Javascript, MongoDB, Express',
      link: 'https://teamasaurus-devdays.herokuapp.com/',
      linkText: 'Dev Days',
      description:
        'A full stack application for developers to track their personal projects, clients, study to do items and more!',
    },
    {
      id: '7',
      tag: 'API and API call ',
      title: 'Tarot Picker',
      img: work7,
      imgSmall: work7,
      bg: '#F4F4FF',
      client: 'Considerate Cat',
      langages: 'HTML, Javascript, CSS, API call ',
      link: 'https://tarot-picker.netlify.app/',
      linkText: 'Tarot Picker',
      description:
        'Get your one card tarot pull here with an integrated API call to pull a tarot card.',
    },
    {
      id: '8',
      tag: 'Web Development (in progress)',
      title: 'GIC-Compare',
      img: work6,
      imgSmall: work6,
      bg: '#FFF3FC',
      client: 'Agency Client',
      langages: 'HTML, Tailwind, Javascript, CSS, Google Integrations',
      link: 'https://giccompare.onrender.com/',
      linkText: 'Canadian Interest Rates ',
      description:
        'This is a client project that focuses on displaying Canadian interest rates to users. I used tailwind primarily to create the design as well as a google sheets integration.',
    },
  ]
  const [data, setData] = useState(workItems)

  // Elements for Blogs section
  const blogsData = [
    {
      id: '1',
      img: blog1,
      imgSmall: blogSmall1,
      date: '177 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '4',
      img: blog4,
      imgSmall: blogSmall4,
      date: '000 April',
      category: 'Inspiration',
      title: 'Everything You Need to Know About Web Accessibility.',
      bg: '#EEFBFF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '2',
      img: blog2,
      imgSmall: blogSmall2,
      date: '21 April',
      category: 'Web Design',
      title: 'The window know to say beside you',
      bg: '#FFF0F0',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '5',
      img: blog5,
      imgSmall: blogSmall5,
      date: '27 April',
      category: 'Inspiration',
      title: 'Top 10 Toolkits for Deep Learning in 2021.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '3',
      img: blog3,
      imgSmall: blogSmall3,
      date: '27 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      bg: '#FCF4FF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
    {
      id: '6',
      img: blog6,
      imgSmall: blogSmall6,
      date: '27 April',
      category: 'Inspiration',
      title: 'Everything You Need to Know About Web Accessibility.',
      bg: '#EEFBFF',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    },
  ]

  // Menu items for Homepage One
  const menuItem = [
    {
      id: '01',
      name: 'Home',
      link: '/home/MainPage',
      icon: <AiOutlineHome />,
    },
    {
      id: '02',
      name: 'About',
      link: '/home/about',
      icon: <FaRegUser />,
    },
    // {
    //   id: '06',
    //   name: 'Resume',
    //   link: '/home/resume',
    //   icon: <CgNotes />,
    // },
    {
      id: '03',
      name: 'Works',
      link: '/home/works',
      icon: <FiCodesandbox />,
    },
    // {
    //   id: '04',
    //   name: 'Blogs',
    //   link: '/home/blogs',
    //   icon: <FaBlogger />,
    // },
    {
      id: '05',
      name: 'Contact',
      link: '/home/contact',
      icon: <RiContactsBookLine />,
    },
  ]

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: '01',
      name: 'About',
      link: '/homeTwo/about',
      icon: <FaRegUser />,
    },
    {
      id: '02',
      name: 'Resume',
      link: '/homeTwo/resume',
      icon: <CgNotes />,
    },
    {
      id: '03',
      name: 'Works',
      link: '/homeTwo/works',
      icon: <FiCodesandbox />,
    },
    {
      id: '04',
      name: 'Blogs',
      link: '/homeTwo/blogs',
      icon: <FaBlogger />,
    },
    {
      id: '05',
      name: 'Contact',
      link: '/homeTwo/contact',
      icon: <RiContactsBookLine />,
    },
  ]

  // Slider image for Clients
  const sliderImg = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5]

  // serviceArray items for about page
  const serviceArray = [
    {
      id: '1',
      icon: icon,
      title: 'Web and App Development',
      des:
        'From consultation to production to deployment, we can work together to bring your website to life.',
      color: '#D566FF',
      bg: '#FCF4FF',
    },
    {
      id: '2',
      icon: icon1,
      title: 'Employment',
      des:
        'I am open to work as a full stack developer as well as available to take on freelancing clients.',
      color: '#DDA10C',
      bg: '#FEFAF0',
    },
    {
      id: '3',
      icon: icon2,
      title: 'Website Design',
      des:
        'Need a complete design or webpage overhaul? Tying together design and code, I can help you to create a beautiful and functional website.',
      color: '#8774FF',
      bg: '#FCF4FF',
    },
    // {
    //   id: '4',
    //   icon: icon3,
    //   title: 'Photography',
    //   des:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
    //   color: '#FF6080',
    //   bg: '#FFF4F4',
    // },
  ]

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: '2021-2023',
      title: 'Ph.D in Horriblensess ',
      place: 'ABC University, Los Angeles, CA',
      bg: '#FFF4F4',
    },

    {
      id: 2,
      date: '2019 - Present',
      title: 'Sr. Software Tester',
      place: 'Google Inc.',
      bg: '#FFF1FB',
    },

    {
      id: 3,
      date: '2021',
      title: 'Best Developer ',
      place: 'University Of Melbourne, NA',
      bg: '#FFF4F4',
    },
  ]
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: '2017-2021',
      title: 'Computer Science',
      place: 'Imperialize Technical Institute',
      bg: '#EEF5FA',
    },

    {
      id: 2,
      date: '2015-2017',
      title: 'Cr. Web Developer',
      place: 'ib-themes ltd.',
      bg: '#F2F4FF',
    },

    {
      id: 3,
      date: '2008',
      title: 'Best Writter',
      place: 'Online Typodev Soluation Ltd.',
      bg: '#EEF5FA',
    },
  ]
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: '2015-2017',
      title: '  Graphic Designer',
      place: 'Web Graphy, Los Angeles, CA',
      bg: '#FCF4FF',
    },

    {
      id: 2,
      date: '2014 - 2015',
      title: 'Jr. Web Developer',
      place: 'Creative Gigs.',
      bg: '#FCF9F2',
    },

    {
      id: 3,
      date: '2015-2017',
      title: 'Best Freelancer',
      place: 'Fiver & Upwork Level 2 & Top Rated',
      bg: '#FCF4FF',
    },
  ]

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: '01',
      color: '#FF6464',
      name: 'Web Design',
      number: '80',
    },
    {
      id: '02',
      color: '#9272D4',
      name: 'Mobile App ',
      number: '95',
    },
    {
      id: '03',
      color: '#5185D4',
      name: 'Illustrator',
      number: '65',
    },
    {
      id: '03',
      color: '#CA56F2',
      name: 'Photoshope',
      number: '75',
    },
  ]

  // Personal information for contact pages
  const contactArray = [
    {
      id: '01',
      icon: iconPhone,
      title: 'Phone ',
      item1: '+250 857 2308',
      bg: '#FCF4FF',
    },
    {
      id: '02',
      icon: iconEmail,
      title: 'Email ',
      item1: 'madeleinepbelanger@gmail.com',
      bg: '#EEFBFF',
    },
  ]

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  }
}

export default AllData
