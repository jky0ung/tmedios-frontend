"use client";

import Image from "next/image";
import * as styles from "./styles.css";
import Main from "@/package/layout/Main";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// image
import main_toptext from "../../assets/image/main_toptext.png";
import main_btn00_1 from "../../assets/image/btn/main_btn00-1.png";
import main_btn00_2 from "../../assets/image/btn/main_btn00-2.png";
import main_btn01_1 from "../../assets/image/btn/main_btn01-1.png";
import main_btn01_2 from "../../assets/image/btn/main_btn01-2.png";
import main_btn02_1 from "../../assets/image/btn/main_btn02-1.png";
import main_btn02_2 from "../../assets/image/btn/main_btn02-2.png";
import Button from "@/package/components/button/Button";

const MainPage = () => {
  const [managerAuthorizeCode, setManagerAuthorizeCode] = useState<number[]>(
    []
  );
  const onClickManagerButton = (number: number) => {
    if (number == 1) {
      setManagerAuthorizeCode([1]);
      return;
    }
    if (managerAuthorizeCode.length < 5) {
      setManagerAuthorizeCode((prev) => [...prev, number]);
    } else {
      setManagerAuthorizeCode([number]);
    }
  };

  const equals = (a: number[], b: number[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  useEffect(() => {
    console.log("manager authorize code: ", managerAuthorizeCode);
    if (equals(managerAuthorizeCode, [1, 2, 3, 2, 3])) {
      console.log("manager authorize code correct");
    }
  }, [managerAuthorizeCode]);

  const router = useRouter();

  return (
    <Main>
      <section className={styles.mainTop}>
        <Image src={main_toptext} alt="logo" className={styles.mainTopImage} />
      </section>
      <section className={styles.mainMid}>
        <Button
          images={{
            normal: main_btn00_1,
            actived: main_btn00_2,
          }}
          className={styles.mainMidButton1}
          onClick={() => router.push("/pay_search")}
        />
        <Button
          images={{
            normal: main_btn01_1,
            actived: main_btn01_2,
          }}
          className={styles.mainMidButton2}
          onClick={() => router.push("/pay_search")}
        />

        <Button
          images={{
            normal: main_btn02_1,
            actived: main_btn02_2,
          }}
          className={styles.mainMidButton3}
          onClick={() => router.push("/pay_search")}
        />
      </section>
      <section className={styles.mainBottom}>
        <button
          className={styles.mainBottomButton}
          onClick={() => onClickManagerButton(1)}
        />
        <button
          className={styles.mainBottomButton}
          onClick={() => onClickManagerButton(2)}
        />
        <button
          className={styles.mainBottomButton}
          onClick={() => onClickManagerButton(3)}
        />
      </section>
    </Main>
  );
};

export default MainPage;
