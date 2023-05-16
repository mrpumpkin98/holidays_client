import { useState } from "react";
import * as S from "./myPageList.styles";
import Modal1 from "../../../commons/modals/editProFileModal/Modal/modal";
import Backdrop from "../../../commons/modals/editProFileModal/Backdrop/Backdrop";

export default function StaticRoutingPage() {
  const [listItems, setListItems] = useState([
    {
      name: "내가 만든 클래스",
      detailed: "내가 만든 클래스로 수익을 만들어보세요",
      src: "/myPage/presentation.png",
    },
    {
      name: "내가 신청한 클래스",
      detailed: "취향에 맞는 클래스를 추천해 드려요",
      src: "/myPage/basket.png",
    },
    {
      name: "위시리스트",
      detailed: "내가 픽한 클래스",
      src: "/myPage/love-heart.png",
    },
    {
      name: "내 사랑방 리스트",
      detailed: "내가 작성한 사랑방 리스트",
      src: "/myPage/options-list.png",
    },
    {
      name: "예약 관리",
      detailed: "클래스 예약 신청을 확인해주세요",
      src: "/myPage/user-options.png",
    },
    {
      name: "회원 탈퇴",
      detailed: "홀리데이즈 회원 탈퇴",
      src: "/myPage/emergency-exit.png",
    },
  ]);

  // 프로필 수정 모달기능

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <S.Wrapper>
      {showModal && <Modal1 onClose={handleModalClose} />}
      {showModal && <Backdrop onClick={handleModalClose} />}
      <S.MyBox>
        <S.WelcomeMessage>안녕하세요</S.WelcomeMessage>
        <S.UserName>홍길동님</S.UserName>
        <S.Labal>이메일</S.Labal>
        <S.Infor>sju4486@naver.com</S.Infor>
        <S.Labal>전화 번호</S.Labal>
        <S.Infor>01012341234</S.Infor>
        <S.Button onClick={handleModalOpen}>프로필 수정</S.Button>
      </S.MyBox>
      <S.Line />
      <S.MyPageList>
        {listItems.map((item, index) => (
          <S.MyPageListBox key={index}>
            <S.ListNameIconWrapper>
              <S.ListName>{item.name}</S.ListName>
              <S.Icon src={item.src} />
            </S.ListNameIconWrapper>
            <S.ListDetailed>{item.detailed}</S.ListDetailed>
          </S.MyPageListBox>
        ))}
      </S.MyPageList>
    </S.Wrapper>
  );
}