"use client";

import Main from "@/package/layout/Main";
import Content from "@/package/sections/content/Content";
import Footer from "@/package/sections/footer/Footer";
import TopNavigation from "@/package/sections/top_navigation/TopNavigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as styles from "./styles.css";
// images
import pay_print_help_3_000 from "@/assets/image/new/pay_print_help3_000.png";
import pay_print_help_3_001 from "@/assets/image/new/pay_print_help3_001.png";
import pay_print_help_3_002 from "@/assets/image/new/pay_print_help3_002.png";
import pay_print_help_3_003 from "@/assets/image/new/pay_print_help3_003.png";
import pay_print_help_3_004 from "@/assets/image/new/pay_print_help3_004.png";
import pay_print_help_3_005 from "@/assets/image/new/pay_print_help3_005.png";
import pay_print_btn0 from "@/assets/image/new/pay_print_btn0.png";
import pay_print_btn1_1 from "@/assets/image/new/pay_print_btn1-1.png";
import pay_print_btn1_2 from "@/assets/image/new/pay_print_btn1-2.png";
import pay_print_btn1_3 from "@/assets/image/new/pay_print_btn1-3.png";
import pay_print_btn2_1 from "@/assets/image/new/pay_print_btn2-1.png";
import pay_print_btn2_2 from "@/assets/image/new/pay_print_btn2-2.png";
import pay_print_btn2_3 from "@/assets/image/new/pay_print_btn2-3.png";
import pay_print_btn3_1 from "@/assets/image/new/pay_print_btn3-1.png";
import pay_print_btn3_2 from "@/assets/image/new/pay_print_btn3-2.png";
import pay_print_btn3_3 from "@/assets/image/new/pay_print_btn3-3.png";
import pay_print_btn4_1 from "@/assets/image/new/pay_print_btn4-1.png";
import pay_print_btn4_2 from "@/assets/image/new/pay_print_btn4-2.png";
import pay_print_btn4_3 from "@/assets/image/new/pay_print_btn4-3.png";
import pay_print_btn5_1 from "@/assets/image/new/pay_print_btn5-1.png";
import pay_print_btn5_2 from "@/assets/image/new/pay_print_btn5-2.png";
import pay_print_btn5_3 from "@/assets/image/new/pay_print_btn5-3.png";
import pay_print_ar0 from "@/assets/image/new/pay_print_ar0.png";
import pay_print_ar1 from "@/assets/image/new/pay_print_ar1.png";
import pay_print_ar2 from "@/assets/image/new/pay_print_ar2.png";
import pay_print_ar3 from "@/assets/image/new/pay_print_ar3.png";
import pay_print_help1 from "@/assets/image/title/pay_print_help1.png";
import printer from "@/assets/image/title/printer.gif";
import pay_print_help2 from "@/assets/image/title/pay_print_help2.png";
import pay_print_pre from "@/assets/image/new/pay_print_pre.gif";
import { descriptionImage } from "@/package/sections/subject_section/styles.css";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";

type Step =
  | "init"
  | "data-checking"
  | "data-downloading"
  | "printer-checking"
  | "printing"
  | "success";

const PayPrintPage = () => {
  const router = useRouter();

  useEffect(() => {
    window.chrome.webview?.postMessage("print");
  }, []);

  useEffect(() => {
    window.chrome.webview?.addEventListener("message", (event: any) => {
      console.log("event from c#: ", event.data);
      setStep(event.data);
      if (event.data == "success") {
        setTimeout(() => router.push("/main"), 5000);
      }
    });
  }, [router]);

  const [step, setStep] = useState<Step>("data-checking");

  return (
    <Main>
      <TopNavigation index={4} hideHomeButton />
      <div
        style={{
          position: "absolute",
          width: 1080,
          top: 562,
        }}
      >
        <Image
          src={match(step)
            .with("init", () => pay_print_help_3_000)
            .with("data-checking", () => pay_print_help_3_001)
            .with("data-downloading", () => pay_print_help_3_002)
            .with("printer-checking", () => pay_print_help_3_003)
            .with("printing", () => pay_print_help_3_004)
            .with("success", () => pay_print_help_3_005)
            .exhaustive()}
          alt="pe_title_img1"
          style={{
            position: "absolute",
            left: 65,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn1_2)
            .with("data-checking", () => pay_print_btn0)
            .with("data-downloading", () => pay_print_btn1_3)
            .with("printer-checking", () => pay_print_btn1_3)
            .with("printing", () => pay_print_btn1_3)
            .with("success", () => pay_print_btn1_3)
            .exhaustive()}
          alt="pri_img_1"
          style={{
            position: "absolute",
            left: 105,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn1_2)
            .with("data-checking", () => pay_print_btn1_1)
            .with("data-downloading", () => pay_print_btn1_3)
            .with("printer-checking", () => pay_print_btn1_3)
            .with("printing", () => pay_print_btn1_3)
            .with("success", () => pay_print_btn1_3)
            .exhaustive()}
          alt="pri_img_1r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 105,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar0)
            .with("data-downloading", () => pay_print_ar3)
            .with("printer-checking", () => pay_print_ar3)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar1"
          style={{
            position: "absolute",
            left: 242,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar1)
            .with("data-checking", () => pay_print_ar1)
            .with("data-downloading", () => pay_print_ar3)
            .with("printer-checking", () => pay_print_ar3)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar1r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 242,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn2_2)
            .with("data-checking", () => pay_print_btn2_2)
            .with("data-downloading", () => pay_print_btn0)
            .with("printer-checking", () => pay_print_btn2_3)
            .with("printing", () => pay_print_btn2_3)
            .with("success", () => pay_print_btn2_3)
            .exhaustive()}
          alt="pri_img_2"
          style={{
            position: "absolute",
            left: 290,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn2_2)
            .with("data-checking", () => pay_print_btn2_2)
            .with("data-downloading", () => pay_print_btn2_1)
            .with("printer-checking", () => pay_print_btn2_3)
            .with("printing", () => pay_print_btn2_3)
            .with("success", () => pay_print_btn2_3)
            .exhaustive()}
          alt="pri_img_2r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 290,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar3)
            .with("printer-checking", () => pay_print_ar3)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar2"
          style={{
            position: "absolute",
            left: 427,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar1)
            .with("printer-checking", () => pay_print_ar3)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar2r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 427,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn3_2)
            .with("data-checking", () => pay_print_btn3_2)
            .with("data-downloading", () => pay_print_btn3_2)
            .with("printer-checking", () => pay_print_btn0)
            .with("printing", () => pay_print_btn3_3)
            .with("success", () => pay_print_btn3_3)
            .exhaustive()}
          alt="pri_img_3"
          style={{
            position: "absolute",
            left: 475,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn3_2)
            .with("data-checking", () => pay_print_btn3_2)
            .with("data-downloading", () => pay_print_btn3_2)
            .with("printer-checking", () => pay_print_btn3_1)
            .with("printing", () => pay_print_btn3_3)
            .with("success", () => pay_print_btn3_3)
            .exhaustive()}
          alt="pri_img_3r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 475,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar2)
            .with("printer-checking", () => pay_print_ar0)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar3"
          style={{
            position: "absolute",
            left: 612,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar2)
            .with("printer-checking", () => pay_print_ar1)
            .with("printing", () => pay_print_ar3)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar3r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 612,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn4_2)
            .with("data-checking", () => pay_print_btn4_2)
            .with("data-downloading", () => pay_print_btn4_2)
            .with("printer-checking", () => pay_print_btn4_2)
            .with("printing", () => pay_print_btn0)
            .with("success", () => pay_print_btn4_3)
            .exhaustive()}
          alt="pri_img_4"
          style={{
            position: "absolute",
            left: 660,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn4_2)
            .with("data-checking", () => pay_print_btn4_2)
            .with("data-downloading", () => pay_print_btn4_2)
            .with("printer-checking", () => pay_print_btn4_2)
            .with("printing", () => pay_print_btn4_1)
            .with("success", () => pay_print_btn4_3)
            .exhaustive()}
          alt="pri_img_4r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 660,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar2)
            .with("printer-checking", () => pay_print_ar2)
            .with("printing", () => pay_print_ar0)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar4"
          style={{
            position: "absolute",
            left: 797,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_ar2)
            .with("data-checking", () => pay_print_ar2)
            .with("data-downloading", () => pay_print_ar2)
            .with("printer-checking", () => pay_print_ar2)
            .with("printing", () => pay_print_ar1)
            .with("success", () => pay_print_ar3)
            .exhaustive()}
          alt="pri_img_ar4r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 797,
            top: 275,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn5_2)
            .with("data-checking", () => pay_print_btn5_2)
            .with("data-downloading", () => pay_print_btn5_2)
            .with("printer-checking", () => pay_print_btn5_2)
            .with("printing", () => pay_print_btn5_2)
            .with("success", () => pay_print_btn0)
            .exhaustive()}
          alt="pri_img_5"
          style={{
            position: "absolute",
            left: 845,
            top: 204,
          }}
        />
        <Image
          src={match(step)
            .with("init", () => pay_print_btn5_2)
            .with("data-checking", () => pay_print_btn5_2)
            .with("data-downloading", () => pay_print_btn5_2)
            .with("printer-checking", () => pay_print_btn5_2)
            .with("printing", () => pay_print_btn5_2)
            .with("success", () => pay_print_btn5_1)
            .exhaustive()}
          alt="pri_img_5r"
          className={styles.printStepImageAnimation}
          style={{
            position: "absolute",
            left: 845,
            top: 204,
          }}
        />
        <Image
          src={pay_print_btn5_2}
          alt="pay_print_btn5_2"
          style={{
            position: "absolute",
            left: 845,
            top: 204,
          }}
        />
        <Image
          className={descriptionImage}
          src={pay_print_help1}
          alt="pay_print_help1"
          style={{
            position: "absolute",
            left: 114,
            top: 554,
          }}
        />
        <Image
          src={printer}
          alt="printer"
          style={{
            position: "absolute",
            left: 137,
            top: 716,
            width: 810,
            height: 291,
          }}
        />
        <Image
          className={styles.payPrintDescriptionImage}
          src={pay_print_help2}
          alt="pay_print_help2"
        />
        <Image
          src={pay_print_pre}
          alt="pay_print_pre"
          style={{
            position: "absolute",
            top: 130,
            left: 413,
          }}
        />
      </div>
    </Main>
  );
};

export default PayPrintPage;
