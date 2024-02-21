import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
// components/Footer.tsx
import { LAYOUT } from "@/styles/layout";
import { SHADOWS, SPACING } from "@/styles/Variables";
import { BUTTON_STYLES, DARK } from "@/styles/button";
import { POSITIONING } from "@/styles/positioning";
import { LINK_STYLES } from "@/styles/link";
import Button from "./Button";
import { LIST } from "@/styles/list";
import Mylink from "./Mylink";
import { CARD } from "@/styles/card";
export const FOOTER_STYLING = stylex.create({
  base: {
    backgroundColor: "black",
    color: "white",
    minHeight: "250px",
    maxHeight: "500px",
    marginTop: "full",
    paddingTop: "auto",
    padding: "1em",
    alignItems: "center",
  },
  h2: {
    marginTop: "1.3em",
    // fontSize: '15px',
    fontWeight: "400",
    textAlign: "center",
  },
});

export default function Footer() {
  return (
    <footer
      className="footer"
      {...stylex.props(
        FOOTER_STYLING.base,
        POSITIONING.rowResponsive,
        SHADOWS.lg
      )}
    >
      <div className="footer__addr">
        <h1 className="footer__logo">Survey app</h1>

        <h2>Contact</h2>

        <address>
          5534 Somewhere In. The World 22193-10212
          <br />
          <Button type={BUTTON_STYLES.primary}>
            <Mylink href="mailto:ondralukes06@seznam.cz">Email Us</Mylink>
          </Button>
        </address>
      </div>

      <ul
        className="footer__nav"
        {...stylex.props(POSITIONING.rowResponsive,POSITIONING.start, SPACING.md)}
      >
        <li className="nav__item" {...stylex.props(LIST.default)}>
          <h2 className="nav__title" {...stylex.props(FOOTER_STYLING.h2)}>
            Media
          </h2>

          <ul className="nav__ul">
            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Email Us</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">print</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Ads</Mylink>
            </li>
          </ul>
        </li>

        <li
          className="nav__item nav__item--extra"
          {...stylex.props(LIST.default)}
        >
          <h2 className="nav__title" {...stylex.props(FOOTER_STYLING.h2)}>
            Technology
          </h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">About</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Your Surveys</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Paid Plan</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Automation</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">AI</Mylink>
            </li>
          </ul>
        </li>

        <li className="nav__item" {...stylex.props(LIST.default)}>
          <h2 className="nav__title" {...stylex.props(FOOTER_STYLING.h2)}>
            Legal
          </h2>

          <ul className="nav__ul">
            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">
                Privacy Policy
              </Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Terms Of Use</Mylink>
            </li>

            <li>
              <Mylink href="mailto:ondralukes06@seznam.cz">Site Map</Mylink>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2023 Andrew Lukes. All rights reserved.</p>

        <div className="legal__links">
          <span>
            Made with <span className="heart">♥</span> remotely from Anywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
{
  /* // <footer {...stylex.props( LAYOUT.threeColumn, FOOTER_STYLING.base)}  >
      //   <nav {...stylex.props(POSITIONING.column)}>
      //     <Link {...stylex.props(LINK_STYLES.base)} style={{textDecoration:'none'}} href="/about">
      //        About
      //     </Link>
      //     <Link {...stylex.props(LINK_STYLES.base)} href="/contact" >
      //      Contact
      //     </Link>
      //   </nav>
      //   <p>&copy; 2024 Survey App. All rights reserved. Created by Andrew Lukes</p>
      // </footer> */
}
