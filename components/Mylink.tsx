import { CSSProperties, textDecoration } from '@stylexjs/stylex/lib/StyleXCSSTypes';
import { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface MyLinkProps extends LinkProps {
   styling:StyleXStyles< {
    color?: 'red' | 'blue' | 'green';
    padding?: 0 | 4 | 8 | 16 | 32;
    backgroundColor?: string;
    borderColor?: string;
    borderTopColor?: string;
    borderEndColor?: string;
    borderBottomColor?: string;
    borderStartColor?: string;
  }>;

}
const Mylink:React.FC<MyLinkProps> = ({href, styling,   ...props}) => {
  return (
    <Link  {...styling}  {...props} href={href} style={{textDecoration: 'none'}}>Mylink</Link>
  )
}

export default Mylink