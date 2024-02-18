import { BUTTON_SIZES, BUTTON_STYLES } from "@/styles/button";
import { LINK_STYLES } from "@/styles/link";
import { POSITIONING_STYLES } from "@/styles/positioning";
import * as stylex from "@stylexjs/stylex";
import Link from 'next/link';

// const navbarStyles = stylex.create(
//   {
//     display:"flex'
//   }
// )

export default function Header({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    // <header>
    //   header
    // </header>
    <header {...stylex.props(POSITIONING_STYLES.row,  )} style={{backgroundColor:'orange', margin:0, padding:'0'}}>
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
    </header>
  );
}