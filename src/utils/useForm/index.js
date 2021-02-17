import {useState} from 'react';

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    (typeForm, setForm) => {
      if (typeForm === 'reset') {
        return setValue(initialValue);
      }
      return setValue({...value, [typeForm]: setForm});
    },
  ];
};
