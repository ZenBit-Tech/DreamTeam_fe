import { t } from 'i18next';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '@/components/Inputs/FormInput';
import { Popup } from '@/components/Popup';

export enum AdminFormTypes {
  Add = 'Add',
  Edit = 'Edit',
}

interface AdminFormProps {
  modalOpen: boolean;
  closeModal: () => void;
  type: AdminFormTypes;
}

export const AdminForm: React.FC<AdminFormProps> = ({
  modalOpen,
  closeModal,
  type,
}) => {
  const { handleSubmit, control } = useForm<{
    adminName?: string;
    email?: string;
  }>({});

  return (
    <Popup
      popupName={`${type} Admin`}
      modalOpen={modalOpen}
      handleCloseModal={closeModal}
      handleSubmit={handleSubmit}
    >
      <FormInput label={t('adminName')} control={control} type='name' />
      <FormInput label={t('email')} type='email' control={control} />
    </Popup>
  );
};
