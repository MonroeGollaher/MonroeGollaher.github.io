import classNames from "class-names";
import PropTypes from "prop-types";
import React from "react";
import WorkHistoryListItem from "./WorkHistoryItem";
import jobData from "./index.data";
import styles from "./index.module.css";

const Resume = ({ className }) => {
  const classList = classNames(
    styles.wrapper,
    className
    // theme === "dark" && styles.dark
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
