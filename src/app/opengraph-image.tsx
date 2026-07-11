import { ImageResponse } from "next/og";

export const alt = "Lumora — Digital growth, designed to compound";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div tw="h-full w-full flex flex-col justify-between p-20" style={{ background: "linear-gradient(135deg, #0f172a 0%, #172554 55%, #4c1d95 100%)", color: "white" }}><div tw="flex text-3xl font-bold tracking-tight">LUMORA<span style={{ color: "#22d3ee" }}>.</span></div><div tw="flex flex-col"><div tw="text-7xl font-bold tracking-tight">Growth, designed<br />to compound.</div><div tw="mt-8 text-3xl" style={{ color: "#bfdbfe" }}>Strategy · Creative · Performance</div></div><div tw="text-xl" style={{ color: "#cbd5e1" }}>Digital growth agency for ambitious brands</div></div>, size);
}
