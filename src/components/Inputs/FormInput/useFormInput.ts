import { underlineJoin } from '@/utils/stringUtils';

type RuleType = {
  nameRules: {
    required: string;
    maxLength: number;
  };
  emailRules: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
};

export const useFormInput = (
  label: string
): { name: string; rules: RuleType } => {
  const rules = {
    nameRules: {
      required: `${label} is required`,
      maxLength: 100,
    },
    emailRules: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Invalid email format',
      },
    },
  };
  const name = underlineJoin(label);
  return { name, rules };
};
