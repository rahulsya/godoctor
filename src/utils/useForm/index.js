import {useState} from 'react';

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    (typeForm, setForm) => {
      return setValue({...value, [typeForm]: setForm});
    },
  ];
};
