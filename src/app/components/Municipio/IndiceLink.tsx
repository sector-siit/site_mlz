import React from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  href: string;
}

export default function IndiceLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className=" mt-4 flex  gap-2 hover:underline items-center font-semibold text-muni-primary-600 text-lg"
    >
      <BookmarkBorderOutlinedIcon fontSize="large" className="mr-2" />
      {children}
    </a>
  );
}
