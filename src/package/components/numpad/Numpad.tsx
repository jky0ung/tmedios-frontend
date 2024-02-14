import Image from "next/image";
import * as styles from "./styles.css";
// images
import num0 from "../../../assets/image/num/0.png";
import num1 from "../../../assets/image/num/1.png";
import num2 from "../../../assets/image/num/2.png";
import num3 from "../../../assets/image/num/3.png";
import num4 from "../../../assets/image/num/4.png";
import num5 from "../../../assets/image/num/5.png";
import num6 from "../../../assets/image/num/6.png";
import num7 from "../../../assets/image/num/7.png";
import num8 from "../../../assets/image/num/8.png";
import num9 from "../../../assets/image/num/9.png";
import del from "../../../assets/image/num/del.png";
import delAll from "../../../assets/image/num/del_all.png";
import Button from "../button/Button";

interface NumpadProps {
  onClickNumber: (number: number) => void;
  onClickDelete: () => void;
  onClickDeleteAll: () => void;
}

const numImages = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

const Numpad = ({
  onClickNumber,
  onClickDelete,
  onClickDeleteAll,
}: NumpadProps) => {
  return (
    <div className={styles.numpadContainer}>
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <Button
            key={i}
            onClick={() => onClickNumber(i + 1)}
            images={{
              normal: numImages[i],
            }}
          >
            <Image src={numImages[i]} alt={`num-${i + 1}`} />
          </Button>
        ))}
      <Button
        onClick={onClickDelete}
        images={{
          normal: del,
        }}
      />
      <Button
        onClick={() => onClickNumber(0)}
        images={{
          normal: num0,
        }}
      />
      <Button
        onClick={onClickDeleteAll}
        images={{
          normal: delAll,
        }}
      />
    </div>
  );
};

export default Numpad;
