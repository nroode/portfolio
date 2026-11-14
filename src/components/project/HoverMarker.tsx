export default function HoverMarker() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-full top-0 h-[1lh] flex items-center mr-2 not-italic opacity-0 transition-opacity duration-(--motion-fast) group-hover:opacity-60 group-focus-visible:opacity-60 group-has-focus-visible:opacity-60"
    >
      <span className="text-[0.4em]">✦</span>
    </span>
  );
}
