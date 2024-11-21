import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
} from './styles';

import { Paragraph } from '@/assets/styles/typography.ts';
import { NameBaige } from '@/components/Baige/NameBaige.tsx';
import { Pagination } from '@/components/Pagination';
import { Tooltip, TooltipContainer } from '@/components/Tooltip/styles.ts';
import { useGetOrdersQuery } from '@/redux/apiSlice';
import { OrderStatus } from '@/types.ts';
import { StatusBadge } from '@/utils/statusBadgeUtils.ts';

const OrdersTable: React.FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const {
    data: ordersData,
    error,
    isLoading,
  } = useGetOrdersQuery({ page, limit: 10 });

  if (isLoading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('errorFetchingOrders')}</div>;

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
              <th>{t('collectionDate')}</th>
              <th>{t('collectionTime')}</th>
              <th>{t('collectionAddress')}</th>
              <th>{t('luggageSize')}</th>
              <th>{t('client')}</th>
              <th>{t('status')}</th>
              <th>{t('route')}</th>
            </tr>
          </TableHeader>
          <tbody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Paragraph>
                    {new Date(order.collection_date).toLocaleDateString()}
                  </Paragraph>
                </TableCell>
                <TableCell>
                  <Paragraph>{t('orderTime')}</Paragraph>
                </TableCell>
                <TableCell>
                  <TooltipContainer>
                    <Paragraph>{order.collection_address}</Paragraph>
                    <Tooltip>{order.collection_address}</Tooltip>
                  </TooltipContainer>
                </TableCell>
                <TableCell>
                  <Paragraph>
                    {order.luggage && order.luggage.length > 0
                      ? `${order.luggage[0].luggage_size}, ${order.luggage[0].luggage_weight}kg`
                      : t('noLuggageData')}
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
                        {order.customer.email && (
                          <div>{order.customer.email}</div>
                        )}
                      </Tooltip>
                    </TooltipContainer>
                  ) : (
                    t('noCustomerData')
                  )}
                </TableCell>
                <TableCell>
                  <Paragraph>
                    <StatusBadge status={order.status as OrderStatus}>
                      {t(`orderStatus.${order.status}`, {
                        defaultValue: order.status,
                      })}
                    </StatusBadge>
                  </Paragraph>
                </TableCell>
                <TableCell>
                  <Paragraph>
                    {order.route ? order.route.id : t('noRoute')}
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
