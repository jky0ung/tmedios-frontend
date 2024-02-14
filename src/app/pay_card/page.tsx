"use client";

import Main from "@/package/layout/Main";
import Content from "@/package/sections/content/Content";
import Footer from "@/package/sections/footer/Footer";
import SubjectSection from "@/package/sections/subject_section/SubjectSection";
import TopNavigation from "@/package/sections/top_navigation/TopNavigation";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./styles.css";
// images
import pay_card_cost from "@/assets/image/title/pay_card_cost.png";
import pay_card_help2 from "@/assets/image/title/pay_card_help2.png";
import pay_card_bottom_img from "@/assets/image/title/pay_card_bottom_img.png";
import payment_btn from "@/assets/image/btn/payment_btn.png";
import { Suspense } from "react";

const Price = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");

  return (
    <input
      value={price ? parseInt(price).toLocaleString() : 0}
      readOnly
      style={{
        position: "fixed",
        top: 610,
        left: 120,
        textAlign: "right",
        fontSize: "4rem",
        fontWeight: 500,
        zIndex: 99,
      }}
    />
  );
};

const PayCardPage = () => {
  const router = useRouter();
  return (
    <Main>
      <TopNavigation index={3} />
      <SubjectSection index={3} hideDescription />
      <Content>
        <Suspense fallback={<div>loading</div>}>
          <Price />
        </Suspense>
        <Image
          src={pay_card_cost}
          alt="pay_card_cost"
          className={styles.payCostInputImage}
        />
        <Image
          src={pay_card_help2}
          alt="pay_card_help2"
          className={styles.payCardDescriptionImage}
        />
        <Image
          src={pay_card_bottom_img}
          alt="pay_card_bottom_img"
          className={styles.payCardBottomImage}
        />
      </Content>
      <Footer
        onClickBackButton={() => router.push("/pay_list")}
        onClickSubmitButton={() => router.push("/pay_print")}
        submitButtonImage={payment_btn}
      />
    </Main>
  );
};

export default PayCardPage;
