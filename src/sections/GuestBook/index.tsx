import Button from "@/components/Button";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";

export default function GuestBook() {
  return (
    <GsapSection>
      <SectionTitle
        title="MESSAGE"
        descFirst="저희 둘에게 따뜻한 방명록을 남겨주세요"
        bgColor="brandLight"
      >
        <Button
          title="메시지 남기기"
          onClick={() => {
            console.log("TODO: 모달 작업 예정");
          }}
        />
      </SectionTitle>
    </GsapSection>
  );
}
