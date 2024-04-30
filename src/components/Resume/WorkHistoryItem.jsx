import classNames from "class-names";
import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";

const WorkHistoryListItem = ({
  className,
  company,
  dates,
  jobTitle,
  lineItems,
}) => {
  return (
    <li className={className}>
      <div className={classNames(styles.experienceWrapper, "secondary")}>
        <div className={styles.info}>
          <h3>{jobTitle}</h3>
          <p className={styles.company}>{company}</p>
          <p className={styles.dates}>{dates}</p>
          <ul>
            {lineItems.map((item, index) => (
              <li key={index}>
                <p>• {item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

WorkHistoryListItem.propTypes = {
  className: PropTypes.string,
  company: PropTypes.string,
  dates: PropTypes.string,
  jobTitle: PropTypes.string,
  lineItems: PropTypes.arrayOf(PropTypes.string),
};

WorkHistoryListItem.defaultProps = {
  className: "",
  company: "",
  dates: "",
  jobTitle: "",
  lineItems: PropTypes.arrayOf(""),
};

export default WorkHistoryListItem;
