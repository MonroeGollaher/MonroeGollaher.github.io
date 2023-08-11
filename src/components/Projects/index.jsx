import React, { useEffect } from "react";
import styles from "./index.module.css";
import Project from "./Components/Project";
import projects from "./Components/Project/index.data";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ThemeContext } from "../../App";

const Projects = ({ className }) => {
  const {
    _currentValue: { theme },
  } = ThemeContext;

  useEffect(() => {
    const paginationBullets = document.querySelector(".swiper-pagination");
    paginationBullets.classList.add(styles.pagination);
    if (theme === "dark") paginationBullets.classList.add(styles.dark);
  });

  const classList = classNames(styles.wrapper, className);

  return (
    <div className={classList}>
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
        {projects.map(({ title, blurb, image, githubLink }) => (
          <SwiperSlide key={title} className={styles.swiperWrapper}>
            <Project
              title={title}
              blurb={blurb}
              image={image}
              githubLink={githubLink}
              theme={theme}
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
