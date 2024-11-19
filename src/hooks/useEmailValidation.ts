import { useState } from 'react';

interface UseEmailValidationReturn {
  email: string;
  emailError: string;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useEmailValidation = (): UseEmailValidationReturn => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (mail: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setEmailError(
      validateEmail(inputEmail) ? '' : 'Please enter a valid email address'
    );
  };

  return {
    email,
    emailError,
    handleEmailChange,
  };
};
