import Link from "next/link";
import * as stylex from '@stylexjs/stylex';
// components/Footer.tsx
import { LAYOUT } from '@/styles/layout';
import { colors } from "@/styles/Variables";
import { DARK } from "@/styles/button";
import { POSITIONING_STYLES } from "@/styles/positioning";
import { LINK_STYLES } from "@/styles/link";

export const FOOTER_STYLING = stylex.create({
    base: {
      backgroundColor: 'black',
      color: "white",
      minHeight:'250px',
      maxHeight: '500px',
      marginTop: 'full',
      paddingTop: 'auto'
    }
  })


export default function Footer() {
    return (
      <footer {...stylex.props( LAYOUT.threeColumn, FOOTER_STYLING.base)}  >
        <nav {...stylex.props(POSITIONING_STYLES.column)}>
          <Link {...stylex.props(LINK_STYLES.base)} style={{textDecoration:'none'}} href="/about">
             About
          </Link>
          <Link {...stylex.props(LINK_STYLES.base)} href="/contact" >
           Contact
          </Link>
        </nav>
        <p>&copy; 2024 Survey App. All rights reserved. Created by Andrew Lukes</p>
      </footer>
    );
  }