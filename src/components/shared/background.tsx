type Props = {
  children?: React.ReactNode;
};

export default function Background(props: Props) {
  return (
    <div className="relative isolate overflow-hidden bg-[#F5C8BD]">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-[#222831]/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={180}
            height={180}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      {props.children}
    </div>
  );
}
