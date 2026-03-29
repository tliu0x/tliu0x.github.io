import { ImageResponse } from "next/og";
import { person } from "@/resources";

export const runtime = "nodejs";
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <img
        src={person.avatar}
        width="48"
        height="48"
        style={{ borderRadius: "50%" }}
      />
    ),
    { ...size },
  );
}
