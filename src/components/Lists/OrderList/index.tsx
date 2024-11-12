import React, { useState } from "react";
import { useGetOrdersQuery } from "@/redux/apiSlice";
import {
    TableContainer,
    StyledTable,
    TableHeader,
    TableRow,
    TableCell,
} from "./styles";
import { NameBaige } from "@/components/Baige/NameBaige.tsx";
import { formatCollectionTime } from "@/utils/timeUtils.ts";
import { Paragraph } from "@/assets/styles/typography.ts";
import { Tooltip, TooltipContainer } from "@/components/Tooltip/styles.ts";
import {Pagination} from "@/components/Pagination";
import {OrderStatus} from "@/assets/styles/types.ts";
import {StatusBadge} from "@/utils/statusBadgeUtils.ts";

const OrdersTable: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const { data: ordersData, error, isLoading } = useGetOrdersQuery({ page, limit: 10 });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching orders</div>;

    const orders = ordersData?.data || [];
    const total = ordersData?.total || 0;
    const totalPages = Math.ceil(total / 10);

    const selectedOrdersCount = (page - 1) * 10 + orders.length;

    return (
        <>
            <TableContainer>
                <StyledTable>
                    <TableHeader>
                        <tr>
                            <th>COLLECTION DATE</th>
                            <th>COLLECTION TIME</th>
                            <th>COLLECTION ADDRESS</th>
                            <th>LUGGAGE, SIZE</th>
                            <th>CLIENT</th>
                            <th>STATUS</th>
                            <th>ROUTE</th>
                        </tr>
                    </TableHeader>
                    <tbody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>
                                <Paragraph>{new Date(order.collection_date).toLocaleDateString()}</Paragraph>
                            </TableCell>
                            <TableCell>
                                <Paragraph>{formatCollectionTime(order.collection_date)}</Paragraph>
                            </TableCell>
                            <TableCell>
                                <TooltipContainer>
                                    <Paragraph>{order.collection_address}</Paragraph>
                                    <Tooltip>{order.collection_address}</Tooltip>
                                </TooltipContainer>
                            </TableCell>
                            <TableCell>
                                <Paragraph>
                                    {order.luggage && order.luggage.length > 0 ? (
                                        `${order.luggage[0].luggage_size}, ${order.luggage[0].luggage_weight}kg`
                                    ) : (
                                        'No luggage data'
                                    )}
                                </Paragraph>
                            </TableCell>
                            <TableCell>
                                {order.customer ? (
                                    <TooltipContainer>
                                        <NameBaige
                                            companyName={order.customer.full_name}
                                            email={order.customer.phone_number}
                                        />
                                        <Tooltip>
                                            <div>{order.customer.full_name}</div>
                                            <div>{order.customer.phone_number}</div>
                                            {order.customer.email && <div>{order.customer.email}</div>}
                                        </Tooltip>
                                    </TooltipContainer>
                                ) : (
                                    'No customer data'
                                )}
                            </TableCell>
                            <TableCell>
                                <Paragraph>
                                    <StatusBadge status={order.status as OrderStatus}>
                                        {order.status}
                                    </StatusBadge>
                                </Paragraph>
                            </TableCell>
                            <TableCell>
                                <Paragraph>
                                    {order.route ? order.route.id : 'No route'}
                                </Paragraph>
                            </TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
            <Pagination
                page={page}
                totalPages={totalPages}
                selectedOrdersCount={selectedOrdersCount}
                totalOrders={total}
                setPage={setPage}
            />
        </>
    );
};

export default OrdersTable;
