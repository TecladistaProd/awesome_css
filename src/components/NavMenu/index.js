import React, { PureComponent } from "react";

import styles from "./styles.sass";

import { Power2 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all";

class NavMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ paused: true }),
      opened: false
    };
  }

  componentDidMount() {
    this.state.tl.from(this.nav, 1, {
      x: 300,
      display: "none",
      ease: Power2.easeOut,
      delay: 0
    });

    this.state.tl.to(
      this.svgCircle,
      3,
      {
        scale: 1,
        x: 0,
        y: -1300,
        ease: Power2.easeOut
      },
      "-=1"
    );

    this.state.tl.to(
      this.svgCircle2,
      4,
      {
        scale: 1.8,
        x: 2900,
        y: -500,
        ease: Power2.easeOut
      },
      "-=3"
    );
  }

  componentDidUpdate() {
    if (this.props.open) {
      this.svg.style.zIndex = 1;
      this.state.tl.play();
    } else {
      this.state.tl.reverse();
      this.svg.style.zIndex = -1;
    }
  }

  render() {
    return (
      <>
        <svg
          ref={el => (this.svg = el)}
          style={{ zIndex: -1 }}
          className={styles.svg}
        >
          <defs>
            <clipPath id="clipPath">
              <circle
                ref={el => (this.svgCircle = el)}
                className="one"
                // cx="150"
                // cy="350"
                cx="200"
                cy="400"
                r="1300"
                transform="scale(0)"
              />
              <circle
                ref={el => (this.svgCircle2 = el)}
                className="two"
                cx="-2200"
                cy="1900"
                r="800"
                transform="scale(0)"
              />
            </clipPath>
          </defs>
        </svg>
        <nav className={styles.nav} ref={el => (this.nav = el)}>
          <span onClick={() => this.props.onClose()}>X</span>
          <ul>
            <li>
              <a href="#">Holly</a>
            </li>
            <li>
              <a href="#">Balls</a>
            </li>
            <li>
              <a href="#">This</a>
            </li>
            <li>
              <a href="#">Rocks</a>
            </li>
          </ul>
          <p>
            loremAdipisicing nulla proident nostrud ad minim ex culpa tempor
            aliqua enim mollit veniam commodo veniam.
          </p>
        </nav>
      </>
    );
  }
}

export default NavMenu;
