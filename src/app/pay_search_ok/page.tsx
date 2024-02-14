"use client";

import Main from "@/package/layout/Main";
import Content from "@/package/sections/content/Content";
import Footer from "@/package/sections/footer/Footer";
import SubjectSection from "@/package/sections/subject_section/SubjectSection";
import TopNavigation from "@/package/sections/top_navigation/TopNavigation";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { patientInfoAtom } from "../pay_search/atom";

const PaySearchOkPage = () => {
  const router = useRouter();
  const [patientInfo] = useAtom(patientInfoAtom);
  return (
    <Main>
      <TopNavigation index={1} />
      <SubjectSection index={1} />
      <Content>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            padding: "4rem",
          }}
        >
          <input
            value={patientInfo?.name}
            readOnly
            style={{
              position: "absolute",
              top: 120,
              left: 380,
              textAlign: "right",
              fontSize: "3rem",
            }}
          />
          <Image
            src="/image/title/pay_search_ok_name_box.png"
            alt="name_box"
            width={825}
            height={180}
          />
          <input
            value={patientInfo?.number}
            readOnly
            style={{
              position: "absolute",
              top: 368,
              left: 380,
              textAlign: "right",
              fontSize: "3rem",
            }}
          />
          <Image
            src="/image/title/pay_search_ok_num_box.png"
            alt="num_box"
            width={825}
            height={180}
          />
        </div>
      </Content>
      <Footer
        onClickBackButton={() => router.push("/pay_search")}
        onClickSubmitButton={() => router.push("/pay_list")}
      />
    </Main>
  );
};

export default PaySearchOkPage;
