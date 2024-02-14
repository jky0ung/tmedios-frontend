import Image from "next/image";
import * as styles from "./styles.css";
import { match } from "ts-pattern";
// images
import pay_search_title from "@/assets/image/title/pay_search_title.png";
import pay_search_ok_title from "@/assets/image/title/pay_search_ok_title.png";
import pay_list_title from "@/assets/image/title/pay_list_title.png";
import pay_card_title from "@/assets/image/title/pay_card_title.png";
import pay_search_help from "@/assets/image/title/pay_search_help.png";
import pay_search_ok_help from "@/assets/image/title/pay_search_ok_help.png";
import pay_list_help from "@/assets/image/title/pay_list_help.png";
import pay_card_cost from "@/assets/image/title/pay_card_cost.png";

const titleImages = [
  pay_search_title,
  pay_search_ok_title,
  pay_list_title,
  pay_card_title,
];
const descriptionImages = [
  pay_search_help,
  pay_search_ok_help,
  pay_list_help,
  pay_card_cost,
];

interface SubjectSectionProps {
  index: number;
  hideDescription?: boolean;
}

const SubjectSection = ({ index, hideDescription }: SubjectSectionProps) => {
  return (
    <section className={styles.subjectSectionContainer}>
      <Image src={titleImages[index]} alt="subject" />
      {!hideDescription && (
        <Image
          src={descriptionImages[index]}
          alt="description"
          className={styles.descriptionImage}
        />
      )}
    </section>
  );
};

export default SubjectSection;
