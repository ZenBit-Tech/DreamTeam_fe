import React from "react";
import { PaginationButton, PaginationContainer } from "@/components/Pagination/styles.ts";
import { ParagraphSmall } from "@/assets/styles/typography.ts";
import { PaginationProps } from "@/types.ts";

export const Pagination: React.FC<PaginationProps> = ({
                                                          page,
                                                          totalPages,
                                                          selectedOrdersCount,
                                                          totalOrders,
                                                          setPage,
                                                      }) => (
    <PaginationContainer>
        <ParagraphSmall>
            Selected {selectedOrdersCount} of {totalOrders} orders
        </ParagraphSmall>
        <div>
            <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </PaginationButton>
            {[...Array(totalPages)].map((_, index) => (
                <PaginationButton
                    key={index + 1}
                    active={page === index + 1 ? "true" : "false"}
                    onClick={() => setPage(index + 1)}
                >
                    {index + 1}
                </PaginationButton>
            ))}
            <PaginationButton onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
            </PaginationButton>
        </div>
    </PaginationContainer>
);
