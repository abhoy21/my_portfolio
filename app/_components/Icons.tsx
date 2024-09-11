import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TwitterIcon: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      viewBox='0 0 50 50'
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path d='M11 4a7 7 0 0 0-7 7v28a7 7 0 0 0 7 7h28a7 7 0 0 0 7-7V11a7 7 0 0 0-7-7H11zm2.086 9h7.937l5.637 8.01L33.5 13H36l-8.21 9.613L37.913 37H29.98l-6.541-9.293L15.5 37H13l9.309-10.896L13.086 13zm3.828 2 14.107 20h3.065L19.979 15h-3.065z' />
    </svg>
  );
};

export const GithubIcon: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      viewBox='0 0 72 72'
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path d='M36 12c13.255 0 24 10.745 24 24 0 10.656-6.948 19.685-16.559 22.818l.007-.022s-1.62-.759-1.586-2.114c.038-1.491 0-4.971 0-6.248 0-2.193-1.388-3.747-1.388-3.747s10.884.122 10.884-11.491c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-.426-6.812c-1.856-.2-5.18 1.774-6.6 2.697 0 0-2.25-.922-5.991-.922-3.742 0-5.991.922-5.991.922-1.419-.922-4.744-2.897-6.6-2.697-1.656 2.029-.426 6.812-.426 6.812s-2.342 2.332-2.342 6.812c0 11.613 10.884 11.491 10.884 11.491s-1.097 1.239-1.336 3.061c-.76.258-1.877.576-2.78.576-2.362 0-4.159-2.296-4.817-3.358-.649-1.048-1.98-1.927-3.221-1.927-.817 0-1.216.409-1.216.876s1.146.793 1.902 1.659c1.594 1.826 1.565 5.933 7.245 5.933.617 0 1.876-.152 2.823-.279-.006 1.293-.007 2.657.013 3.454.034 1.355-1.586 2.114-1.586 2.114l.007.022C18.948 55.685 12 46.656 12 36c0-13.255 10.745-24 24-24z' />
    </svg>
  );
};

export const LinkedinIcon: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      viewBox='0 0 50 50'
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path d='M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z' />
    </svg>
  );
};

export const LinkArrow: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      viewBox='0 0 48 48'
      {...rest}
      className={`w-full h-auto ${className}`}
      fill='#fff'
    >
      <path d='M40.96 4.98a2 2 0 0 0-.22.02H28a2 2 0 1 0 0 4h8.172L22.586 22.586a2 2 0 1 0 2.828 2.828L39 11.828V20a2 2 0 1 0 4 0V7.246a2 2 0 0 0-2.04-2.266zM12.5 8C8.383 8 5 11.383 5 15.5v20c0 4.117 3.383 7.5 7.5 7.5h20c4.117 0 7.5-3.383 7.5-7.5V26a2 2 0 1 0-4 0v9.5c0 1.947-1.553 3.5-3.5 3.5h-20A3.483 3.483 0 0 1 9 35.5v-20c0-1.947 1.553-3.5 3.5-3.5H22a2 2 0 1 0 0-4h-9.5z' />
    </svg>
  );
};

export const ContactIcon: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      viewBox='0 0 50 50'
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path d='M14 4C8.489 4 4 8.489 4 14v22c0 5.511 4.489 10 10 10h22c5.511 0 10-4.489 10-10V14c0-5.511-4.489-10-10-10H14zm-1 12h24c.18 0 .35.02.51.07l-9.83 9.82a3.801 3.801 0 0 1-5.37 0l-9.82-9.82c.16-.05.33-.07.51-.07zm-1.93 1.49L18.59 25l-7.52 7.51c-.05-.16-.07-.33-.07-.51V18c0-.18.02-.35.07-.51zm27.86 0c.05.16.07.33.07.51v14c0 .18-.02.35-.07.51L31.4 25l7.53-7.51zM20 26.41l.89.9a5.782 5.782 0 0 0 4.1 1.69c1.49 0 2.97-.56 4.1-1.69l.9-.9 7.52 7.52c-.16.05-.33.07-.51.07H13c-.18 0-.35-.02-.51-.07L20 26.41z' />
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={100}
      height={100}
      viewBox='0 0 48 48'
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path
        fill='#199be2'
        d='m35.983 32.448-3.536 3.536 7.87 7.87a.5.5 0 0 0 .707 0l2.828-2.828a.5.5 0 0 0 0-.707l-7.869-7.871z'
      />
      <radialGradient
        id='a'
        cx={20.024}
        cy={20.096}
        r={19.604}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.693} stopColor='#006185' />
        <stop offset={0.921} stopColor='#35c1f1' />
      </radialGradient>
      <path
        fill='url(#a)'
        d='m31.601 28.065-3.536 3.536 4.383 4.382 3.535-3.535z'
      />
      <linearGradient
        id='b'
        x1={8.911}
        x2={31.339}
        y1={8.911}
        y2={31.339}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#a3ffff' />
        <stop offset={0.223} stopColor='#9dfbff' />
        <stop offset={0.53} stopColor='#8bf1ff' />
        <stop offset={0.885} stopColor='#6ee0ff' />
        <stop offset={1} stopColor='#63daff' />
      </linearGradient>
      <circle cx={20} cy={20} r={16} fill='url(#b)' />
    </svg>
  );
};
