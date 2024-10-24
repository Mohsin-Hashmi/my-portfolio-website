import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "../swiperComponent/swiper.css";
export default function swiper() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{
          clickable:true,
          enabled:true,
        }}
        breakpoints={{
          360: {
            navigation:{
              enabled:false,
            },
            Pagination:{
              enabled:true,
            }
          },
          768: {
            navigation:{
              enabled:true,
            },
            Pagination:{
              enabled:false,
            }
          }
        }}
      >
        <SwiperSlide>
          <div className="swiperWrapperContent">
            <div className="swiperWrapContent">
              <h4>Sep 2022-Dec 2023</h4>
              <h3>
                Password Guessing Using Machine Learning Final Year
                Project(FYP).
              </h3>
              <p>
                In this project, I successfully implemented a password guessing
                and similarity evaluation system leveraging the LSTM RNN
                algorithm, utilizing a dataset of leaked passwords. The model
                has been trained to generate passwords based on several critical
                features, including length, character composition, uppercase and
                lowercase letters, special character presence, and syllable
                count. This sophisticated system not only generates passwords
                but also evaluates their similarity to the dataset of leaked
                passwords, contributing to enhanced password security and
                recovery mechanisms. Additionally, I have developed an intuitive
                and user-friendly frontend using the Streamlit API, making this
                technology accessible and practical for a wider user base. This
                project highlights my proficiency in machine learning and my
                commitment to improving password-related security processes.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapperContent">
            <div className="swiperWrapContent">
              <h4>Aug 2023-Oct 2023</h4>
              <h3>Weather App With API Integration.</h3>
              <p>
                The Weather App with API Integration in React is a project that
                empowers users to effortlessly stay informed about the weather
                conditions across various locations. Through seamless
                integration with a weather API, the application delivers
                up-to-the-minute updates, furnishing essential details such as
                temperature fluctuations, humidity levels, and comprehensive
                forecasts. Its intuitive interface ensures ease of use, enabling
                users to navigate effortlessly and obtain the information they
                need with just a few clicks or taps. This project not only
                highlights the versatility of React but also underscores its
                ability to craft immersive and dynamic experiences tailored for
                practical purposes. Whether planning a weekend getaway or simply
                staying abreast of daily weather patterns, this app stands as a
                testament to the fusion of technology and user convenience.
                It's a practical and user-friendly application that
                showcases the power of React.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperWrapperContent">
            <div className="swiperWrapContent">
              <h4>Feb 2024-May 2024</h4>
              <h3>
                Fully Responsive Skyscrapersnow.com Website Using HTML, CSS,
                JavaScript, jQuery and PHP.
              </h3>
              <p>
                In this project, I developed a fully responsive website for
                Skyscrapers, a company that recently wanted to redesign their
                existing website with a new, updated look by collaborating with
                my team members. I translated high-fidelity Figma designs into
                clean and efficient code while maintaining design consistency
                and user experience that meets the company's needs and aligns
                with their new branding vision.In addition to translating Figma designs into functional code, our team implemented robust features to enhance user engagement and streamline navigation. By prioritizing responsiveness, we ensured seamless accessibility across various devices, from desktops to smartphones, thereby maximizing the reach and usability of the Skyscrapers website. This project exemplifies our commitment to delivering tailored solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="swiperWrapperContent">
            <div className="swiperWrapContent">
              <h4>Mar 2020-Feb 2024</h4>
              <h3>BS Computer Science-NUML.</h3>
              <p>
                NUML CS program offers renowned faculty, advanced research, and
                modern resources, shaping me through rigorous academics and
                vibrant extracurriculars towards triumph.
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
