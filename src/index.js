import gray from 'gray-percentage';

import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

import 'typeface-yekan';
import 'typeface-vazir';
import 'typeface-lalezarregular';

export default {
  title: 'Awesome_RTL',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [],
  headerFontFamily: ['Yekan', 'Vazir', 'tahoma', 'serif'],
  bodyFontFamily: ['Vazir', 'Yekan', 'tahoma', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      direction: 'rtl',
    },
    'h1,.-vazir': {
      fontFamily: ['Vazir', 'sans-serif'].join(','),
    },
    '.-yekan': {
      fontFamily: ['Yekan', 'sans-serif'].join(','),
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingRight: rhythm(13 / 16),
      marginRight: rhythm(1),
      marginLeft: rhythm(-1),
      borderRight: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginRight: rhythm(1),
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginRight: rhythm(1),
      },
      blockquote: {
        marginRight: rhythm(-3 / 4),
        marginLeft: 0,
        paddingRight: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontWeight: 200,
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#007acc',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
    '.sitename,.-lalezar': {
      fontFamily: 'Lalezar-Regular, sans-serif',
    },
    pre: {
      background: '#efefef',
      padding: '9px 16px',
      borderRadius: '8px',
      textAlign: 'left',
      direction: 'ltr',
    },
  }),
};
