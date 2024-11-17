import { t } from 'i18next';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '@/components/Inputs/FormInput';
import { Popup } from '@/components/Popup';

export enum CompanyFormTypes {
  Add = 'Add',
  Edit = 'Edit',
}

interface CompanyFormProps {
  modalOpen: boolean;
  closeModal: () => void;
  type: CompanyFormTypes;
}

export const CompanyForm = ({
  modalOpen,
  type,
  closeModal,
}: CompanyFormProps): React.ReactNode => {
  const { handleSubmit, control } = useForm();
  return (
    <Popup
      popupName={`${type} ${t('Company')}`}
      modalOpen={modalOpen}
      handleCloseModal={closeModal}
      handleSubmit={handleSubmit}
    >
      <FormInput label={t('organizationName')} control={control} type='name' />
      <FormInput label={t('clientName')} control={control} type='name' />
      <FormInput label={t('emailLabel')} control={control} type='email' />
    </Popup>
  );
};
