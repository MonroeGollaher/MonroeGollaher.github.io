import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import classNames from "class-names";
import { ThemeContext } from "../../App";
import WorkHistoryListItem from "./WorkHistoryItem";
import jobData from "./index.data";

const Resume = ({ className }) => {
  const {
    _currentValue: { theme },
  } = ThemeContext;

  const classList = classNames(
    styles.wrapper,
    className,
    theme === "dark" && styles.dark
  );

  return (
    <div className={classList}>
      <h2>Experience</h2>
      <ul>
        {jobData.map(({ company, dates, jobTitle, lineItems }, index) => (
          <WorkHistoryListItem
            key={index}
            company={company}
            dates={dates}
            jobTitle={jobTitle}
            lineItems={lineItems}
          />
        ))}
      </ul>
    </div>
  );
};

Resume.propTypes = {
  className: PropTypes.string,
};

Resume.defaultProps = {
  className: "",
};

export default Resume;
