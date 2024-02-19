import React, { ReactNode } from 'react'
import * as stylex from "@stylexjs/stylex";
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_STYLES } from '@/styles/button';
import { BorderRadius, BorderStyles, Colors, Sizes, TextColors } from 'types/stylingTypes';
  // size?: StyleXStyles;
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  type?: stylex.StyleXStylesWithout<{
      // alignItems?: string; // 'center'
      // backgroundClip?: string; // 'padding-box'
      // backgroundColor?: string; // Type of primary color
      // border?: string; // '1px solid transparent'
      // borderRadius?: string; // '.25rem'
      // boxShadow?: string; // 'rgba(0, 0, 0, 0.02) 0 1px 3px 0'
      // boxSizing?: string; // 'border-box'
      // color?: string; // '#fff'
      // cursor?: string; // 'pointer'
      // display: string; // 'inline-flex'
      // fontFamily?: string; // 'system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
      // fontSize?: string; // '16px'
      // fontWeight?: string; // '600'
      // justifyContent?: string; // 'center'
      // lineHeight?: string; // '1.25'
      // margin?: string; // '0'
      // minHeight?: string; // '3rem'
      // padding?: string; // 'calc(.875rem - 1px) calc(1.5rem - 1px)'
      // position?: string; // 'relative'
      // textDecoration?: string; // 'none'
      // transition?: string; // 'all 250ms'
      // userSelect?: string; // 'none'
      // WebkitUserSelect?: string; // 'none'
      // touchAction?: string; // 'manipulation'
      // verticalAlign?: string; // 'baseline'
      // width?: string; // 'auto'
      // ':hover': {
      //     backgroundColor?: string; // Type of hover color
      //     boxShadow?: string; // Type of box shadow
      // };
      // ':focus': {
      //     backgroundColor?: string; // Type of focus color
      //     boxShadow?: string; // Type of box shadow
      // };
      // ':hover:active': {
      //     backgroundColor?: string; // Type of active color
      //     boxShadow?: string; // Type of box shadow
      //     transform?: string; // Type of transform
      // };
  }>,
  children?: ReactNode
  //'primary' | 'secondary';
  size?: stylex.StyleXStylesWithout<{
    // backgroundColor?: any|Colors| undefined,
        // color?: any|TextColors| undefined,
        // border?: any|string| undefined,
        // borderRadius?:any| BorderRadius| undefined,
        // transition?: any|string| undefined,
        // ":hover": {
        //   color?: TextColors| undefined,
        //   backgroundColor?: Colors | undefined ,
        //   transform?: string | undefined ,
        // }| undefined,
      }> ;
  rounding?: stylex.StyleXStylesWithout<{
    // backgroundColor?: any|Colors| undefined,
        // color?: any|TextColors| undefined,
        // border?: any|string| undefined,
        // borderRadius?:any| BorderRadius| undefined,
        // transition?: any|string| undefined,
        // ":hover": {
        //   color?: TextColors| undefined,
        //   backgroundColor?: Colors | undefined ,
        //   transform?: string | undefined ,
        // }| undefined,
      }> ;
  disabled?: boolean
  styling?: stylex.StyleXStylesWithout<{
// backgroundColor?: any|Colors| undefined,
    // color?: any|TextColors| undefined,
    // border?: any|string| undefined,
    // borderRadius?:any| BorderRadius| undefined,
    // transition?: any|string| undefined,
    // ":hover": {
    //   color?: TextColors| undefined,
    //   backgroundColor?: Colors | undefined ,
    //   transform?: string | undefined ,
    // }| undefined,
  }>
}

const Button: React.FC<ButtonProps> = ({ type, size , rounding , disabled=false,children, styling,  ...props }) => {
  // Add logic to choose between main, secondary, etc.

  return (
      <button {...props} disabled={disabled}  {...stylex.props(BUTTON_STYLES.base, type, size , rounding, styling  )}>
           {children}
      </button>
  );
};
export default Button