"use client";

import Main from "@/package/layout/Main";
import Content from "@/package/sections/content/Content";
import Footer from "@/package/sections/footer/Footer";
import SubjectSection from "@/package/sections/subject_section/SubjectSection";
import TopNavigation from "@/package/sections/top_navigation/TopNavigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// images
import Button from "@/package/components/button/Button";
import down_btn from "../../assets/image/btn/down_btn.png";
import down_btn_n from "../../assets/image/btn/down_btn_n.png";
import up_btn from "../../assets/image/btn/up_btn.png";
import up_btn_n from "../../assets/image/btn/up_btn_n.png";
import doc_back02 from "../../assets/image/doc_back02.png";
import select_btn from "../../assets/image/btn/doc_sbtn.png";
import select_btn_r from "../../assets/image/btn/doc_sbtn_r.png";

interface PaymentInfo {
  department: string;
  doctorName: string;
  nursingPrice: number;
  patientPrice: number;
  alreadyPaidPrice: number;
  reductionPrice: number;
  totalPrice: number;
}

const PayListPage = () => {
  const [paymentInfos, setPaymentInfos] = useState<PaymentInfo[]>([
    {
      department: "안과",
      doctorName: "테스트1",
      nursingPrice: 50000,
      patientPrice: 30000,
      alreadyPaidPrice: 0,
      reductionPrice: 10000,
      totalPrice: 123500,
    },
    {
      department: "피부과",
      doctorName: "테스트2",
      nursingPrice: 50000,
      patientPrice: 30000,
      alreadyPaidPrice: 0,
      reductionPrice: 10000,
      totalPrice: 96700,
    },
    {
      department: "내과",
      doctorName: "테스트3",
      nursingPrice: 20000,
      patientPrice: 30000,
      alreadyPaidPrice: 0,
      reductionPrice: 10000,
      totalPrice: 360000,
    },
    {
      department: "이비인후과",
      doctorName: "테스트3",
      nursingPrice: 100,
      patientPrice: 30000,
      alreadyPaidPrice: 0,
      reductionPrice: 10000,
      totalPrice: 40000,
    },
    {
      department: "신경과",
      doctorName: "테스트4",
      nursingPrice: 300,
      patientPrice: 100,
      alreadyPaidPrice: 0,
      reductionPrice: 300,
      totalPrice: 2700,
    },
    {
      department: "비뇨기과",
      doctorName: "테스트5",
      nursingPrice: 50000,
      patientPrice: 30000,
      alreadyPaidPrice: 0,
      reductionPrice: 10000,
      totalPrice: 50000,
    },
  ]);
  const [page, setPage] = useState(1);
  const limit = 2;
  const offset = (page - 1) * limit;
  const totalPage = Math.ceil(paymentInfos.length / 2);
  const router = useRouter();

  return (
    <Main>
      <TopNavigation index={2} />
      <SubjectSection index={2} />
      <Content>
        <div
          style={{
            position: "absolute",
            color: "white",
            left: 956,
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {page} / {totalPage}
        </div>
        <div
          style={{
            width: 879,
            height: 875,
            marginTop: 104,
            marginLeft: 36,
          }}
        >
          {paymentInfos.slice(offset, offset + limit).map((paymentInfo, i) => (
            <div key={i} style={{ position: "relative" }}>
              <Image src={doc_back02} alt="payment_background" />
              <input
                style={{
                  position: "absolute",
                  top: 45,
                  left: 150,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.department}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 94,
                  left: 150,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.doctorName}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 145,
                  left: 136,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.nursingPrice}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 194,
                  left: 136,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.totalPrice}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 45,
                  left: 460,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.patientPrice}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 94,
                  left: 460,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.alreadyPaidPrice}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 145,
                  left: 460,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.reductionPrice}
                readOnly
              />
              <input
                style={{
                  position: "absolute",
                  top: 194,
                  left: 460,
                  color: "black",
                  textAlign: "right",
                }}
                value={paymentInfo.totalPrice - paymentInfo.reductionPrice}
                readOnly
              />
              <Button
                images={{
                  normal: select_btn,
                  actived: select_btn_r,
                }}
                style={{
                  position: "absolute",
                  left: 690,
                  top: 54,
                }}
                onClick={() => {
                  router.push(
                    `/pay_card?price=${
                      paymentInfo.totalPrice - paymentInfo.reductionPrice
                    }`
                  );
                }}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            position: "fixed",
            width: 100,
            height: 500,
            top: 955,
            left: 935,
          }}
        >
          <Button
            images={{
              normal: up_btn,
              disabled: up_btn_n,
            }}
            disabled={offset == 0}
            onClick={() => setPage((prev) => prev - 1)}
          />
          <Button
            images={{
              normal: down_btn,
              disabled: down_btn_n,
            }}
            disabled={page == totalPage}
            onClick={() => setPage((prev) => prev + 1)}
          />
        </div>
      </Content>
      <Footer onClickBackButton={() => router.push("/pay_search_ok")} />
    </Main>
  );
};

export default PayListPage;
