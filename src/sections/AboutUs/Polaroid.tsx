import {
  BRIDE_FATHER,
  BRIDE_FULL,
  BRIDE_MOTHER,
  GROOM_FATHER,
  GROOM_FULL,
  GROOM_MOTHER,
} from "@/config/config";
import brideProfile from "@/assets/Images/bride-profile.png";
import groomProfile from "@/assets/Images/groom-profile.png";
import type { IPolaroid, TPolaroidMode } from "@/@Interface";

export default function Polaroid({ mode, birthDate, tagline }: IPolaroid) {
  const labelMap: Record<TPolaroidMode, string> = {
    bride: "신부",
    groom: "신랑",
  };

  const nameMap: Record<TPolaroidMode, string> = {
    bride: BRIDE_FULL,
    groom: GROOM_FULL,
  };

  const parentsNameMap: Record<TPolaroidMode, string> = {
    bride: `${BRIDE_FATHER} · ${BRIDE_MOTHER}의 아들`,
    groom: `${GROOM_FATHER} · ${GROOM_MOTHER}의 딸`,
  };

  const profileMap: Record<TPolaroidMode, string> = {
    bride: brideProfile,
    groom: groomProfile,
  };

  return (
    <div className="gsap-item flex flex-col items-center bg-white rounded-xl shadow-md p-8 space-y-4 w-full h-full text-sm">
      {/* 이미지 */}
      <div className="w-full h-auto aspect-square overflow-hidden rounded-xl shadow-md relative flex-shrink-0 pb-2">
        <img
          alt="cover_image"
          fetchPriority="high"
          decoding="async"
          data-nimg="fill"
          className="absolute object-cover w-full h-full md:rounded-t-3xl filter brightness-75"
          src={profileMap[mode]}
          style={{ inset: "0px", color: "transparent" }}
        ></img>
      </div>

      {/* 이름 */}
      <div className="w-full h-auto flex-shrink-0">
        <span className="mr-1 font-semibold !text-[rgb(107,153,176)]">
          {labelMap[mode]}
        </span>
        <span>{nameMap[mode]}</span>
      </div>

      {/* 특징 */}
      <div className="w-full flex-grow whitespace-pre-wrap text-center">
        <p>{parentsNameMap[mode]}</p>
        <p>{birthDate}</p>
        <p>{tagline}</p>
      </div>
    </div>
  );
}
