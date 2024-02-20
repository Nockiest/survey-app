import { BUTTON_SIZES, BUTTON_STYLES } from "@/styles/button";
import { LINK_STYLES } from "@/styles/link";
import { POSITIONING } from "@/styles/positioning";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import Button from "./Button";
import Mylink from "./Mylink";
import { SHADOWS } from "@/styles/Variables";
import { INHERIT } from "@/styles/Inherit";
import { HEADER } from "@/styles/header";
import { ROUNDING, MARGIN } from "../styles/Variables";

export default function Header({
  isAuth ,
}: {
  isAuth : boolean;
}) {
  return (
    <div style={{ height: "100px" }}>
      <header id="nav-wrapper" {...stylex.props(HEADER.navWrapper, SHADOWS.sm)}>
        <nav
          id="nav"
          {...stylex.props(HEADER.nav, POSITIONING.rowResponsive)}
        >
          <h1
            className="logo un-skew"
            {...stylex.props(HEADER.h1, ROUNDING.md)}
          >
            <a
              href="#home"
              {...stylex.props(INHERIT.inherit)}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Survey App
            </a>
          </h1>

          <div
            className="nav right"
            {...stylex.props(POSITIONING.rowResponsive, MARGIN.xxl)}
          >
            {["home", "about", "work", "contact"].map((link, index) => (
              <Button
                type={BUTTON_STYLES.primary}
                styling={[BUTTON_STYLES.btnNav]}
                key={index}
              >
                <Mylink href={link === "home" ? "/" : `/${link}`}>
                  {link}
                </Mylink>
              </Button>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}

{
  /* <header {...stylex.props(POSITIONING.row,  )} style={{backgroundColor:'orange', margin:0, padding:'0'}}>
      <h1>Survey App</h1>
      <nav {...stylex.props(POSITIONING.row)}>
        {isAuth  ? (
          <>
            <button {...stylex.props(BUTTON_SIZES.md, BUTTON_STYLES.secondary)}  >
            <Link href="/surveys"  >
            <span {...stylex.props(LINK_STYLES.base)}>My Surveys </span>
            </Link>
            </button>
            <button {...stylex.props(BUTTON_SIZES.md, BUTTON_STYLES.secondary)}>
            <Link href="/create-survey"  {...stylex.props(LINK_STYLES.base)}>
              Create New Survey
            </Link>
            </button>

          </>
        ) : (
          <Link href="/auth">
            Login
          </Link>
        )}
      </nav>
    </header> */
}
