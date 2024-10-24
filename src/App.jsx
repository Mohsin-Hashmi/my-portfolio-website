/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import devLogo from "../src/assets/Images/webdev.webp";
import Image from "../src/assets/Images/circleImg.webp";
import Swiper from "../src/swiperComponent/swiper";
import githublogo from "../src/assets/Images/githubLogo.webp";
import linkedilnLogo from "../src/assets/Images/linkedinLogo.webp";
import headHamburger from "../src/assets/Images/headerHamburger.webp";
import HamburderCrossBtn from "../src/assets/Images/headerHamburgerCross.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "../src/Modal/Modal";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navbarColor, setNavbarColor] = useState("#081b29");
  const [navbarWidth, setNavbarWidth] = useState("30px 0");
  const toggleSidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebarClose = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    if (scrollY > 10) {
      setNavbarColor("#0a3b5a");
      setNavbarWidth("20px 0");
    } else {
      setNavbarColor("#081b29");
      setNavbarWidth("30px 0");
    }
  }, [scrollY]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll2 = () => {
      const skillsSection = document.getElementById("MySkills");
      if (skillsSection) {
        const skillsSectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillsSectionTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="App">
        <header style={{ backgroundColor: navbarColor, padding: navbarWidth }}>
          <div className="container">
            {/* Header Section */}
            <div className="headerWrap">
              <a className="logo" href="javascript:;">
                Mohsin <span>Hashmi</span>
              </a>
              <ul className="navbarOptions">
                <li className="listOption ">
                  <Link
                    activeClass="active"
                    to="PortfolioBanner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="listOption">
                  <Link
                    activeClass="active"
                    to="PortfolioAbout"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>

                <li className="listOption">
                  <Link
                    activeClass="active"
                    to="MyEducation"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Education
                  </Link>
                </li>
                <li className="listOption">
                  <Link
                    activeClass="active"
                    to="MyExperience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Experience
                  </Link>
                </li>
                <li className="listOption">
                  <Link
                    activeClass="active"
                    to="MySkills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="listOption">
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="socialMediaLogo">
                <a href="https://github.com/Mohsin-Hashmi" target="_blank" rel="noreferrer">
                  <img className="github" src={githublogo} alt="Github Logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohsin-hashmi-388789205/"
                  target="_blank" rel="noreferrer"
                >
                  <img src={linkedilnLogo} alt="LinkedIn Logo" />
                </a>
              </div>
              <div>
                <button onClick={toggleSidebarOpen} className="hamburgerImage">
                  <img src={headHamburger} alt="Hamburger Icon" />
                </button>
                <div className={`sideMenuWrap ${isOpen ? "open" : ""}`}>
                  <button className="hamburgerBtn" onClick={toggleSidebarClose}>
                    <img
                      className="hamburgerCrossBtn"
                      src={HamburderCrossBtn}
                      alt="Hamburger Cross Option"
                    />
                  </button>
                  <ul className="sideMenu">
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="PortfolioBanner"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="PortfolioAbout"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        About
                      </Link>
                    </li>
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="MyEducation"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        Education
                      </Link>
                    </li>
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="MyExperience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        Experience
                      </Link>
                    </li>
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="MySkills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        Skills
                      </Link>
                    </li>
                    <li className="listOption">
                      <Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={toggleSidebarClose}
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Banner Section */}
      <section id="PortfolioBanner" className="portfolioBanner">
        <div className="container">
          <div className="portfolioBannerWrap">
            <div className="portfolioBannerWrapContent">
              <h1>
                Hi, I'm{" "}
                <span>
                  Mohsin <br /> Hashmi.
                </span>
              </h1>
              <h3>
                Frontend <span> Web Developer.</span>
              </h3>
              <p>
                Greetings!
                <br /> I am a budding Frontend web developer with a profound
                passion for web development, driven by a strong desire to excel
                in this dynamic field. I am eager to take on challenging
                projects and contribute my skills to your endeavors. If you are
                in need of a dedicated web developer, particularly for front-end
                services and web portfolios, I am well-prepared to assist you in
                transforming your concepts into exceptional digital experiences.
                Please feel free to contact me to explore how we can collaborate
                to achieve your web development goals.
              </p>
            </div>
            <div className="portfolioBannerWrapImage">
              <img src={devLogo} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="PortfolioAbout" className="portfolioAbout">
        <div className="container">
          <div className="portfolioAboutWrap">
            <h2>
              About <span> Me</span>
            </h2>
            <img src={Image} alt="profile" />
            <h3>
              Frontend <span> Web Developer.</span>
            </h3>
            <p>
              I'm Mohsin Hashmi, As a fresh computer science, graduate, I
              possess a good skill set in web development technologies like
              HTML, CSS, Bootstrap, JavaScript, React.js, and Nodes.js. I'm
              enthusiastic about designing user-friendly, visually appealing
              websites, and I'm always looking for ways to sharpen my abilities
              and keep up with the most recent developments in the field. I'm
              eager to start my career in web development and have a significant
              impact on the field because I have an intense work ethic and pay
              close attention to details.
            </p>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="MyEducation" className="myEducation ">
        <div className="container">
          <div className="myEducationWrap">
            <h2>
              My<span> Education</span>
            </h2>
            <div className="myEducationContentWrapper">
              <div className="myEducationWrapContent">
                <h4>Mar 2020-Feb 2024</h4>
                <h3>BS Computer Science-NUML.</h3>
                <p>
                  NUML CS program offers renowned faculty, advanced research,
                  and modern resources, shaping me through rigorous academics
                  and vibrant extracurriculars towards triumph.
                </p>
              </div>
              <div className="myEducationWrapContent">
                <h4>Aug 2016-Sep 2018</h4>
                <h3>HSSC-IMCB F-8/4 Islamabad.</h3>
                <p>
                  I got HSSC in Pre-Engineering from ,IMCB F-8/4 Islamabad known
                  for excellence. Amidst brilliance and top facilities, I honed
                  invaluable skills.
                </p>
              </div>
              <div className="myEducationWrapContent">
                <h4>Aug 2014-Jul 2018</h4>
                <h3>SSC-IMSB F-8/3 Islamabad.</h3>
                <p>
                  I earned my Secondary School Certificate from ,IMSB F-8/3
                  Islamabad a pivotal experience that laid the bedrock for my
                  academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="MyExperience" className="myExperience ">
        <div className="container">
          <div className="myExperienceWrap">
            <h2>
              My<span> Experience</span>
            </h2>
            <div className="myExperienceContentWrapper">
              <div className="myExperienceContent">
                <h4>Feb 2024-May 2024</h4>
                <h3>Skyscrapers Pvt Ltd.</h3>
                <p>
                  During my tenure as a Frontend Developer Intern at
                  Skyscrapers, I had the opportunity to apply and expand my
                  knowledge of web development principles. Working closely with
                  the development team, I actively contributed to multiple
                  projects, gaining hands-on experience in HTML, CSS, jQuery,
                  JavaScript and mobile design principles.
                  <br />
                  Additionally, I had the privilege of working with React,
                  enhancing my skills in modern front-end frameworks. Under the
                  mentorship of esteemed professionals, I received invaluable
                  guidance and support, which played a pivotal role in my
                  professional growth.
                  <br />
                  This internship not only provided me with practical experience
                  but also equipped me with the necessary skills and confidence
                  to excel in the field of front-end development
                </p>
              </div>
            <Modal />
            </div>
          </div>
        </div>
      </section>
      {/* My Skills Section */}
      <section id="MySkills" className="mySkills ">
        <div className="container">
          <div className="mySkillsWrap">
            <h2>
              My<span> Skills</span>
            </h2>
            <div className="mySkillsWrapContent">
              <div className="mySkillsWrapContentCol_01">
                <h3 className="title">Programming Skills</h3>
                <div className="mySkillsCard">
                  <div className="progress">
                    <h3>
                      HTML <span>90%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "90%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      CSS <span>90%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "90%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Jquery <span>60%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "60%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      JavaScript <span>50%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "50%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      React <span>40%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "40%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Github <span>70%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "70%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mySkillsWrapContentCol_01">
                <h3 className="title">Professional Skills</h3>
                <div className="mySkillsCard">
                  <div className="progress">
                    <h3>
                      LeaderShip <span>70%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "70%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Teamwork <span>80%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "80%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Problem Solving <span>70%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "70%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress">
                    <h3>
                      Communication <span>70%</span>
                    </h3>
                    <div className="bar">
                      <div
                        className="color"
                        style={{
                          width: isVisible ? "70%" : "0",
                          transition: isVisible ? "width 2.5s ease" : "",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Projects" className="projects ">
        <div className="container">
          <div className="projectsWrap">
            <h2>
              My<span> Projects</span>
            </h2>
            <Swiper />
          </div>
        </div>
      </section>
      {/* Swiper Proects Section */}

      {/*Footer contact Section  */}
      <footer className="mycontact">
        <div className="container">
          <div className="mycontactwrap">
            <h2>
              Mohsin<span> Hashmi</span>
            </h2>
            <div className="mycontactwrapContent">
              <div className="mycontactwrapInfo">
                <a href="mailto: mnadeemhashmi2000@gmail.com">
                  mnadeemhashmi2000@gmail.com
                </a>
                <a href="javascriptt:;">+923105617086 || +923235910071</a>
              </div>
              <div className="mycontactwrapSocialMedia">
                <a href="https://github.com/Mohsin-Hashmi" target="_blank" rel="noreferrer">
                  <img className="github" src={githublogo} alt="Github Logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohsin-hashmi-388789205/"
                  target="_blank" rel="noreferrer"
                >
                  <img src={linkedilnLogo} alt="LinkedIn Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
