import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { UseFormHandleSubmit, FieldValues } from 'react-hook-form';

import { CloseButton } from './styles';

import { COLORS } from '@/assets/styles/constants/colors';
import { IconType } from '@/assets/styles/types';
import { BodyBase, Heading } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';

interface PopupProps {
  popupName: string;
  modalOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  children?: React.ReactNode | React.ReactNode[] | string;
  isDelete?: boolean;
}

export const Popup = ({
  popupName,
  modalOpen,
  children = '',
  isDelete = false,
  handleCloseModal,
  handleSubmit,
}: PopupProps): React.ReactNode => {
  return (
    <Dialog
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: COLORS.popupBackground,
          },
        },
      }}
      open={modalOpen}
      onClose={handleCloseModal}
      PaperProps={{
        component: 'form',
        sx: {
          width: '714px',
          borderRadius: '12px',
          overflow: 'unset',
        },
        onSubmit: handleSubmit((data) => {
          handleCloseModal();
        }),
      }}
    >
      <DialogTitle>
        <Heading>{popupName}</Heading>
      </DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        {children}
        {isDelete && (
          <BodyBase
            sx={{ color: COLORS.onSecondaryContainer, margin: '24px 0px' }}
          >
            {t('deleteWarning')}
          </BodyBase>
        )}

        <DialogActions sx={{ padding: '4px 0px' }}>
          <UniversalButton
            variant='secondaryOutline'
            size='mediumSmall'
            onClick={handleCloseModal}
          >
            {t('cancel')}
          </UniversalButton>
          {isDelete ? (
            <UniversalButton size='mediumSmall' variant='error'>
              {t('delete')}
            </UniversalButton>
          ) : (
            <UniversalButton size='mediumSmall'>{t('submit')}</UniversalButton>
          )}
        </DialogActions>
      </DialogContent>
      <CloseButton onClick={handleCloseModal}>
        <IconSet iconType={IconType.CloseBlack} size={12} />
      </CloseButton>
    </Dialog>
  );
};
