import Image from "next/image";
import * as styles from "./styles.css";
// images
import Button from "@/package/components/button/Button";
import home_btn from "../../../assets/image/btn/home_btn.png";
import home_btn_r from "../../../assets/image/btn/home_btn_r.png";
import menu_01_n from "../../../assets/image/top_btn/menu_01_n.png";
import menu_01_r from "../../../assets/image/top_btn/menu_01_r.png";
import menu_01_y from "../../../assets/image/top_btn/menu_01_y.png";
import menu_02_n from "../../../assets/image/top_btn/menu_02_n.png";
import menu_02_r from "../../../assets/image/top_btn/menu_02_r.png";
import menu_02_y from "../../../assets/image/top_btn/menu_02_y.png";
import menu_03_n from "../../../assets/image/top_btn/menu_03_n.png";
import menu_03_r from "../../../assets/image/top_btn/menu_03_r.png";
import menu_03_y from "../../../assets/image/top_btn/menu_03_y.png";
import menu_04_n from "../../../assets/image/top_btn/menu_04_n.png";
import menu_04_r from "../../../assets/image/top_btn/menu_04_r.png";
import menu_04_y from "../../../assets/image/top_btn/menu_04_y.png";
import menu_05_n from "../../../assets/image/top_btn/menu_05_n.png";
import menu_05_r from "../../../assets/image/top_btn/menu_05_r.png";
import menu_05_y from "../../../assets/image/top_btn/menu_05_y.png";
import toptext from "../../../assets/image/toptext.png";
import { useRouter } from "next/navigation";

const menuNormalImages = [
  menu_01_n,
  menu_02_n,
  menu_03_n,
  menu_04_n,
  menu_05_n,
];

const menuReverseImages = [
  menu_01_r,
  menu_02_r,
  menu_03_r,
  menu_04_r,
  menu_05_r,
];

const menuSelectedImages = [
  menu_01_y,
  menu_02_y,
  menu_03_y,
  menu_04_y,
  menu_05_y,
];

interface TopNavigationProps {
  index: number;
  hideHomeButton?: boolean;
}

const TopNavigation = ({ index, hideHomeButton }: TopNavigationProps) => {
  const menusLeft = [159, 310, 461, 612, 763];
  const router = useRouter();
  return (
    <section className={styles.topNavigationContainer}>
      <Image src={toptext} alt="toptext" className={styles.topText} />
      {!hideHomeButton && (
        <Button
          className={styles.homeButton}
          images={{
            normal: home_btn,
            actived: home_btn_r,
          }}
          onClick={() => router.push("/main")}
        />
      )}

      {menusLeft.map((left, i) => (
        <Image
          key={i}
          src={i < index ? menuReverseImages[i] : menuNormalImages[i]}
          alt={`menu_0${i + 1}`}
          style={{
            left,
            position: "absolute",
          }}
        />
      ))}
      <Image
        src={menuSelectedImages[index]}
        alt={"menu_ing"}
        className={styles.activeMenu}
      />
    </section>
  );
};

export default TopNavigation;
