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
import { Heading } from '@/assets/styles/typography';
import { IconSet } from '@/components/Button/Icons';
import { UniversalButton } from '@/components/Button/UniversalButton';

interface PopupProps {
  popupName: string;
  modalOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  children: React.ReactNode[];
}

export const Popup = ({
  popupName,
  modalOpen,
  children,
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
        onSubmit: handleSubmit(() => {
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
        {...children}

        <DialogActions sx={{ padding: '4px 0px' }}>
          <UniversalButton
            variant='secondaryOutline'
            size='mediumSmall'
            onClick={handleCloseModal}
          >
            {t('cancel')}
          </UniversalButton>
          <UniversalButton size='mediumSmall'>{t('submit')}</UniversalButton>
        </DialogActions>
      </DialogContent>
      <CloseButton onClick={handleCloseModal}>
        <IconSet iconType={IconType.CloseBlack} size={12} />
      </CloseButton>
    </Dialog>
  );
};
