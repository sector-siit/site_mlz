"use client";
import React from "react";
import { ArrowRightIcon } from "../Icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../Icons/ArrowLeftIcon";

interface Props {
  text: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

export function ButtonPage({ text, onClick, active, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
      flex items-center justify-center w-10 h-10  border  rounded-md border-[#236999] text-[#236999] hover:bg-cards-muni-azul hover:text-white 
      ${active && "bg-cards-muni-azul text-white"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

interface ActionsButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function NextButton({ onClick, disabled }: ActionsButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10  border  rounded-md border-[#236999] text-[#236999] hover:bg-cards-muni-azul hover:text-white ${
        disabled &&
        "cursor-not-allowed bg-gray-400 text-white border-white hover:bg-gray-400 hover:text-white"
      }`}
    >
      <ArrowRightIcon />
    </button>
  );
}

export function PreviousButton({ onClick, disabled }: ActionsButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10  border  rounded-md border-[#236999] text-[#236999] hover:bg-cards-muni-azul hover:text-white ${
        disabled &&
        "cursor-not-allowed bg-gray-400 text-white border-white hover:bg-gray-400 hover:text-white"
      }`}
    >
      <ArrowLeftIcon />
    </button>
  );
}
