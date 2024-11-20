import { t } from 'i18next';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Popup } from '@/components/Popup';

export enum CompanyFormTypes {
  Add = 'Add',
  Edit = 'Edit',
}
interface CompanyFormProps {
  modalOpen: boolean;
  closeModal: () => void;
}
export const CompanyDeleteForm = ({
  modalOpen,
  closeModal,
}: CompanyFormProps): React.ReactNode => {
  const { handleSubmit } = useForm();
  return (
    <Popup
      popupName={`${t('delete')} ${t('Company')}`}
      modalOpen={modalOpen}
      handleCloseModal={closeModal}
      handleSubmit={handleSubmit}
      isDelete
    />
  );
};
