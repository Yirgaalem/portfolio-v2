import React from "react";
import "./DropdownMenuItem.css";

export type DropdownMenuItemProps = {
  text: string
}

export default function DropdownMenuItem(props: DropdownMenuItemProps) {
  return (
    <div className="menuItem">
      {props.text}
    </div>
  );
}