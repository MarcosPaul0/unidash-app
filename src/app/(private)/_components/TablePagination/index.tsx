"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@unidash/components/Pagination";
import { TablePaginationProps } from "./tablePagination.interface";
import { useSearchParams } from "next/navigation";

export function TablePagination({ totalPages }: TablePaginationProps) {
  const params = useSearchParams();

  const currentPage = params.get("page") ? Number(params.get("page")) : 1;

  if (totalPages <= 1) return null;

  const previousPageIsDisabled = currentPage <= 0;
  const nextPageIsDisabled = currentPage >= totalPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem aria-disabled={previousPageIsDisabled}>
          <PaginationPrevious href={`?page=${currentPage - 1}`} />
        </PaginationItem>

        <span>{currentPage}</span>

        <PaginationItem aria-disabled={nextPageIsDisabled}>
          <PaginationNext href={`?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
