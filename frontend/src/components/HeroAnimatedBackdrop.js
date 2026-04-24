import { FULL_BLEED_DARK_OVERLAY_STYLE, FULL_BLEED_LIGHT_OVERLAY_STYLE } from "../lib/heroFullBleed";

/**
 * Full-bleed hero media: slow “AI showcase” motion (Ken Burns) + subtle digital pulse.
 * Respects prefers-reduced-motion via CSS.
 */
export default function HeroAnimatedBackdrop({ image, video, bgDark = true }) {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none absolute left-1/2 top-1/2 min-h-full min-w-full w-auto h-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center select-none brightness-[1.15] contrast-[1.05]"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt=""
            draggable={false}
            className="hero-anim-img pointer-events-none absolute left-1/2 top-1/2 min-h-[115%] min-w-[115%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center select-none"
          />
        )}
      </div>
      <div className="hero-ai-pulse pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div
        className="absolute inset-0 z-[2]"
        style={bgDark ? FULL_BLEED_DARK_OVERLAY_STYLE : FULL_BLEED_LIGHT_OVERLAY_STYLE}
      />
    </>
  );
}
