import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes, MouseEvent, useState } from "react";
import * as styles from "./styles.css";

interface StaticImages {
  normal: StaticImageData;
  disabled?: StaticImageData;
  actived?: StaticImageData;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  images: StaticImages;
}

const Button = ({ images, className, ...rest }: ButtonProps) => {
  const [actived, setActived] = useState(false);
  return (
    <button
      {...rest}
      onMouseDown={() => setActived(true)}
      onMouseUp={() => setActived(false)}
      onMouseLeave={() => setActived(false)}
      onTouchStart={() => setActived(true)}
      onTouchEnd={() => setActived(false)}
      onTouchCancel={() => setActived(false)}
      className={className || styles.button}
    >
      <Image
        src={
          rest.disabled
            ? images.disabled || images.normal
            : actived
            ? images.actived || images.normal
            : images.normal
        }
        alt="button"
      />
    </button>
  );
};

export default Button;
