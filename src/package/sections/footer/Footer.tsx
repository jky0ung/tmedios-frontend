import * as styles from "./styles.css";
import Button from "@/package/components/button/Button";
// images
import backButton from "../../../assets/image/btn/no_btn.png";
import submitButton from "../../../assets/image/btn/ok_btn.png";
import { StaticImageData } from "next/image";

interface FooterProps {
  onClickBackButton?: () => void;
  onClickSubmitButton?: () => void;
  submitButtonImage?: StaticImageData;
}

const Footer = ({
  onClickBackButton,
  onClickSubmitButton,
  submitButtonImage,
}: FooterProps) => {
  return (
    <section className={styles.footerContainer}>
      {onClickBackButton && (
        <Button
          onClick={onClickBackButton}
          images={{
            normal: backButton,
          }}
        />
      )}

      {onClickSubmitButton && (
        <Button
          onClick={onClickSubmitButton}
          images={{
            normal: submitButtonImage || submitButton,
          }}
        />
      )}
    </section>
  );
};

export default Footer;
