"use client";

import Main from "@/package/layout/Main";
import Content from "@/package/sections/content/Content";
import SubjectSection from "@/package/sections/subject_section/SubjectSection";
import TopNavigation from "@/package/sections/top_navigation/TopNavigation";
import Image from "next/image";
import * as styles from "./styles.css";
import Numpad from "@/package/components/numpad/Numpad";
import { useEffect, useState } from "react";
import Footer from "@/package/sections/footer/Footer";
import { useRouter } from "next/navigation";
import numInputImage from "../../assets/image/title/pay_search_inputimg.png";
import toast from "react-hot-toast";
import { atom, useAtom } from "jotai";
import { patientInfoAtom } from "./atom";

const numbersToRegistrationNumberString = (numbers: number[]) => {
  let result = "";
  numbers.map((number, index) => {
    if (index == 6) {
      result += `-*`;
    } else if (index > 6) {
      result += "*";
    } else {
      result += number;
    }
  });
  return result;
};

const PaySearchPage = () => {
  const [originalNumbers, setOriginalNumbers] = useState<number[]>([]);
  const [numberInput, setNumberInput] = useState("");

  const onClickNumber = (number: number) => {
    originalNumbers.length < 13 &&
      setOriginalNumbers((prev) => [...prev, number]);
  };

  const onClickDelete = () => {
    setOriginalNumbers((prev) => {
      const deepCopy = [...prev];
      deepCopy.pop();
      return deepCopy;
    });
  };

  const onClickDeleteAll = () => setOriginalNumbers([]);

  const [_, setPatientInfo] = useAtom(patientInfoAtom);

  const onClickSubmitButton = async () => {
    console.log("submit registration number");
    let params = "";
    originalNumbers.forEach((number) => (params += number));
    if (params.length != 13) {
      toast.error("주민등록번호를 확인해주세요.", {
        id: "CHECK_REGISTRATION_NUMBER",
      });
      return;
    }
    // router.push("/pay_search_ok");
    const bridge = window.chrome.webview.hostObjects.bridge;
    const result = await bridge.Func(params);
    const resultToJson = JSON.parse(result);
    toast.success(resultToJson.result, {
      id: "SUCCESS_REGISTRATION_NUMBER",
    });
    console.log("result from c#: ", resultToJson);
    if (resultToJson.success == true) {
      setPatientInfo({
        name: resultToJson.patientName,
        number: resultToJson.patientNumber,
      });
      router.push("/pay_search_ok");
    }
  };

  useEffect(() => {
    setNumberInput(numbersToRegistrationNumberString(originalNumbers));
  }, [originalNumbers]);

  const router = useRouter();

  return (
    <Main>
      <TopNavigation index={0} />
      <SubjectSection index={0} />
      <Content>
        <Image
          src={numInputImage}
          alt={"numinput"}
          className={styles.numInput}
        />
        <input
          type="text"
          placeholder="입력해주세요."
          readOnly
          className={styles.input}
          value={numberInput}
        />
        <div
          style={{
            position: "absolute",
            width: 1080,
            height: 200,
            top: 160,
          }}
        >
          <Numpad
            onClickNumber={onClickNumber}
            onClickDelete={onClickDelete}
            onClickDeleteAll={onClickDeleteAll}
          />
        </div>
      </Content>
      <Footer
        onClickBackButton={() => router.push("/main")}
        onClickSubmitButton={onClickSubmitButton}
      />
    </Main>
  );
};

export default PaySearchPage;
