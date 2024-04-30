import classNames from "class-names";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { isInViewport } from "../../utils/isInViewport";
import Project from "./Components/Project";
import projects from "./Components/Project/index.data";
import styles from "./index.module.css";

const Projects = ({ className }) => {
  const ref = useRef();

  useEffect(() => {
    const paginationBullets = document.querySelector(".swiper-pagination");
    paginationBullets.classList.add(styles.pagination);
    const handleScroll = () => {
      isInViewport(ref.current).then((isVisible) => {
        if (isVisible) {
          ref.current.classList.add("foo-bar");
          // remove event listener after class gets added
          window.removeEventListener("scroll", handleScroll);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, [ref]);

  const classList = classNames(styles.wrapper, className);

  return (
    <div className={classList} ref={ref}>
      <h2>Projects</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log("swiper", swiper)}
        modules={[Pagination, A11y]}
      >
        {projects.map(({ blurb, githubLink, image, title }) => (
          <SwiperSlide key={title} className={styles.swiperWrapper}>
            <Project
              blurb={blurb}
              githubLink={githubLink}
              image={image}
              title={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

Projects.defaultProps = {
  className: "",
};

export default Projects;
