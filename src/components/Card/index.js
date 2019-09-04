import React, { PureComponent } from "react";

import styles from "./styles.sass";

class Card extends PureComponent {
  componentDidMount() {
    this.inner.addEventListener("mouseenter", () => {
      this.spn.style.setProperty("--cl", "transparent");
    });
    this.inner.addEventListener("mouseleave", () => {
      this.spn.style.setProperty("--cl", "");
    });
  }

  render() {
    const { type, title, description } = this.props;
    return (
      <div className={styles["container-" + type || circular]}>
        <span ref={el => (this.spn = el)}>i</span>
        <div ref={el => (this.inner = el)} className={styles.inner}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
