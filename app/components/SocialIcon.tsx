import { useState } from "react";

const colors = {
  aqua: '0EB6BF',
  dark: '2D2E2D',
  light: 'E6E6E6',
}
type Color = keyof typeof colors;

const icons = {
  github: {
    path: 'M11.996 0a11.828 11.828 0 00-7.774 2.935 12.385 12.385 0 00-4.067 7.4 12.566 12.566 0 001.576 8.337 12.063 12.063 0 006.47 5.305c.596.114.82-.267.82-.59 0-.324-.012-1.264-.016-2.29-3.338.743-4.043-1.453-4.043-1.453-.545-1.426-1.332-1.801-1.332-1.801-1.089-.762.082-.748.082-.748 1.206.088 1.84 1.27 1.84 1.27 1.069 1.88 2.808 1.336 3.491 1.018.107-.796.42-1.338.763-1.646-2.667-.31-5.468-1.365-5.468-6.08a4.834 4.834 0 011.236-3.302c-.124-.31-.535-1.56.117-3.26 0 0 1.007-.33 3.3 1.261a11.12 11.12 0 016.01 0c2.29-1.59 3.296-1.26 3.296-1.26.654 1.694.243 2.945.12 3.26a4.823 4.823 0 011.237 3.306c0 4.724-2.807 5.765-5.478 6.069.43.383.813 1.13.813 2.28 0 1.646-.014 2.97-.014 3.376 0 .328.216.71.824.59a12.062 12.062 0 006.47-5.305 12.565 12.565 0 001.576-8.34 12.384 12.384 0 00-4.07-7.399A11.828 11.828 0 0012 0h-.004z',
    width: '24',
    height: '24',
  },
  youtube: {
    path: 'M28.2201 1.60043C28.6826 2.06586 29.0147 2.64459 29.1832 3.27871C29.8065 5.61919 29.8065 10.5 29.8065 10.5C29.8065 10.5 29.8065 15.3808 29.1832 17.7213C29.0147 18.3554 28.6826 18.9341 28.2201 19.3996C27.7577 19.865 27.1811 20.2008 26.5481 20.3734C24.2177 21 14.9032 21 14.9032 21C14.9032 21 5.58871 21 3.25839 20.3734C2.62537 20.2008 2.04877 19.865 1.58631 19.3996C1.12385 18.9341 0.791741 18.3554 0.623226 17.7213C0 15.3808 0 10.5 0 10.5C0 10.5 0 5.61919 0.623226 3.27871C0.791741 2.64459 1.12385 2.06586 1.58631 1.60043C2.04877 1.13499 2.62537 0.799187 3.25839 0.626613C5.58871 0 14.9032 0 14.9032 0C14.9032 0 24.2177 0 26.5481 0.626613C27.1811 0.799187 27.7577 1.13499 28.2201 1.60043ZM19.6453 10.5L11.855 6.06801V14.932L19.6453 10.5Z',
    width: '30',
    height: '21',
  },
  linkedin: {
    path: 'M22.6116 0H1.80283C0.806025 0 0 0.786948 0 1.7599V22.6546C0 23.6275 0.806025 24.4192 1.80283 24.4192H22.6116C23.6084 24.4192 24.4192 23.6275 24.4192 22.6593V1.7599C24.4192 0.786948 23.6084 0 22.6116 0ZM7.24469 20.8088H3.61996V9.15244H7.24469V20.8088ZM5.43232 7.56424C4.2686 7.56424 3.32903 6.62467 3.32903 5.46571C3.32903 4.30675 4.2686 3.36718 5.43232 3.36718C6.59128 3.36718 7.53085 4.30675 7.53085 5.46571C7.53085 6.6199 6.59128 7.56424 5.43232 7.56424ZM20.8088 20.8088H17.1888V15.1428C17.1888 13.793 17.165 12.0522 15.3049 12.0522C13.421 12.0522 13.1349 13.526 13.1349 15.0474V20.8088H9.51968V9.15244H12.9918V10.7454H13.0395C13.5212 9.82969 14.704 8.86151 16.4639 8.86151C20.1316 8.86151 20.8088 11.2748 20.8088 14.4131V20.8088Z',
    width: '24',
    height: '24',
  },
  twitter: {
    path: 'M7.55016 20C16.6045 20 21.5583 12.3046 21.5583 5.63322C21.5583 5.41688 21.5536 5.19574 21.5442 4.9794C22.5079 4.26466 23.3395 3.37935 24 2.36507C23.1025 2.7746 22.1496 3.04206 21.1739 3.15831C22.2013 2.52672 22.9705 1.53451 23.3391 0.365627C22.3726 0.953083 21.3156 1.36748 20.2134 1.59106C19.4708 0.78181 18.489 0.24599 17.4197 0.0664421C16.3504 -0.113105 15.2532 0.0736207 14.2977 0.597751C13.3423 1.12188 12.5818 1.95422 12.1338 2.96609C11.6859 3.97796 11.5754 5.11299 11.8195 6.1957C9.86249 6.09498 7.94794 5.57358 6.19998 4.6653C4.45203 3.75702 2.90969 2.48213 1.67297 0.923299C1.0444 2.03477 0.852057 3.35001 1.13503 4.6017C1.418 5.85339 2.15506 6.94762 3.19641 7.66199C2.41463 7.63654 1.64998 7.42066 0.965625 7.03221V7.09471C0.964925 8.26111 1.3581 9.39178 2.07831 10.2945C2.79852 11.1972 3.80132 11.8163 4.91625 12.0464C4.19206 12.2497 3.43198 12.2793 2.69484 12.133C3.00945 13.1361 3.62157 14.0135 4.44577 14.6426C5.26997 15.2718 6.26512 15.6213 7.29234 15.6425C5.54842 17.0474 3.39417 17.8095 1.17656 17.8058C0.783287 17.8052 0.390399 17.7805 0 17.7318C2.25286 19.2141 4.87353 20.0014 7.55016 20Z',
    width: '24',
    height: '20',
  },
}
type Icon = keyof typeof icons

type IconProps = {
  color: Color;
  icon: Icon;
  width?: string | undefined;
  height?: string | undefined;
  href?: string;
  target?: string;
  hover?: boolean;
}

const Svg = (iconProps: IconProps) => {
  const {color, icon, width, height, hover} = iconProps;

  // Set icon color and transparency for hover 
  const initialColor = `#${colors[color]}`
  const hoverColor = hover === false ? `#${colors[color]}` : `#${colors[color]}80`

  const [iconColor, setIconColor] = useState(initialColor);
  const iconPath = icons[icon].path;
  return (
    <svg
      onMouseOver={() => setIconColor(hoverColor)}
      onMouseOut={() => setIconColor(initialColor)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        fill={iconColor}
        fillRule="evenodd"
        d={iconPath}
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

const SocialIcon = (iconProps: IconProps) => {
  const icon = icons[iconProps.icon];

  const width = iconProps.width 
    ? iconProps.width 
    : icon.width;

  const height = iconProps.height 
    ? iconProps.height 
    : icon.height;

  if(iconProps.href) {
    // Return with anchor
    return (
      <a className="flex items-center" href={iconProps.href} target={iconProps.target || "_blank"}>
        <Svg 
          hover={true}
          icon={iconProps.icon}
          color={iconProps.color} 
          width={width} 
          height={height} 
        />
      </a>
    )
  }
  
  //Return just svg
  return (
    <Svg 
      hover={false}
      icon={iconProps.icon}
      color={iconProps.color} 
      width={width} 
      height={height} 
    />
  )

}



export default SocialIcon;