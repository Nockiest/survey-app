import { BUTTON_SIZES, BUTTON_STYLES } from "@/styles/button";
import { LINK_STYLES } from "@/styles/link";
import { POSITIONING_STYLES } from "@/styles/positioning";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import Button from "./Button";
import Mylink from "./Mylink";
import { SHADOWS } from "@/styles/Variables";
import { INHERIT } from "@/styles/Inheit";
const NAVBAR_STYLES = stylex.create({
  navWrapper: {
    overflow: "hidden",
    width: "100vw",
    margin: "0 auto",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    alignItems: "center",
    borderBottom: 'black 2px solid',
    height:'100px',
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif",

    overflow: "hidden",
    height: '100%,'
  },

  navLink: {
    textTransform: "uppercase",
    textAlign: "center",
    borderTop: "0.5px solid rgba(0, 0, 0, 0.1)",

    ":last-child": {
      paddingRight: "3em",
    },
  },
  right: {
    overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'relative',
      left: '1.5em',
      height: 'auto',
  },
});
// const NAVBAR_STYLES = stylex.create({



//   navVisible: {
//     height: '100%',
//     overflow: 'auto',
//   },



//   '@media (min-width: 800px)': {
//     navWrapper: {
//       overflow: 'hidden',
//     },
//     nav: {
//       overflow: 'hidden',
//       flexDirection: 'row',
//     },
//     navLink: {
//       borderTop: 'none',
//     },
//     right: {
//
//     },


//     navLink: {
//       transform: 'skew(-20deg)',
//       color: '#777',
//       textDecoration: 'none',
//       '&:last-child': {
//         paddingRight: '3em',
//       },
//     },
//     'a:hover.navLink:not(.active)': {
//       color: '#444',
//       background: '#ddd',
//       background: 'linear-gradient(45deg, #fff, #ddd)',
//     },
//   },


export default function Header({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <div style={{ height: "100px" }}>
      <header id="nav-wrapper" {...stylex.props(NAVBAR_STYLES.navWrapper, SHADOWS.sm)}>
        <nav
          id="nav"
          {...stylex.props(NAVBAR_STYLES.nav, POSITIONING_STYLES.rowResponsive)}
        >
          {/* <div className="nav left" {...stylex.props( POSITIONING_STYLES.rowResponsive)}> */}

              <h1 className="logo un-skew" >
                <a href="#home"{...stylex.props(INHERIT.inherit)} style={{textDecoration:'none'}}> Survey App</a>
              </h1>

            {/* <button id="menu" className="btn-nav">
              <span className="fas fa-bars"></span>
            </button> */}
          {/* </div> */}
          <div
            className="nav right"
            {...stylex.props(POSITIONING_STYLES.rowResponsive, )}
          >
            {["home", "about", "work", "contact"].map((link, index) => (
              <span className="nav-link-span" key={index}>
                <Button type={BUTTON_STYLES.primary}styling={BUTTON_STYLES.btnNav}>

                  <Mylink href={link === "home" ? "/" : `/${link}`}>
                    {link}
                  </Mylink>
                </Button>
              </span>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}


{
  /* <header {...stylex.props(POSITIONING_STYLES.row,  )} style={{backgroundColor:'orange', margin:0, padding:'0'}}>
      <h1>Survey App</h1>
      <nav {...stylex.props(POSITIONING_STYLES.row)}>
        {isAuthenticated ? (
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
