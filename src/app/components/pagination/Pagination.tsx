"use client";
import React from "react";
import { ButtonPage, NextButton, PreviousButton } from "./Button";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  const handlePreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    handlePageChange(currentPage + 1);
  };

  return (
    <section
      id="navigation"
      className="flex items-center justify-center space-x-4 p-2 col-span-1 md:col-span-2 lg:col-span-2 text-lg text-bold  md:mb-[16px]  lg:mb-[72px] order-3"
    >
      <PreviousButton
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      {[...Array(totalPages)].map((_, index) => (
        <ButtonPage
          key={index}
          text={`${index + 1}`}
          onClick={() => handlePageChange(index + 1)}
          active={currentPage === index + 1}
          disabled={currentPage === index + 1}
        />
      ))}
      <NextButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />
    </section>
  );
}
