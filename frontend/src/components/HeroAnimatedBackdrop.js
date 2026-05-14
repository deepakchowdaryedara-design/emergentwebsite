import { FULL_BLEED_DARK_OVERLAY_STYLE, FULL_BLEED_LIGHT_OVERLAY_STYLE } from "../lib/heroFullBleed";

/**
 * Full-bleed hero media: slow “AI showcase” motion (Ken Burns) + subtle digital pulse.
 * Respects prefers-reduced-motion via CSS.
 */
export default function HeroAnimatedBackdrop({ image, video, bgDark = true }) {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F0F4F8]" aria-hidden>
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-bottom select-none"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-bottom select-none"
          />
        )}
      </div>
    </>
  );
}
