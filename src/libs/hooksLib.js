import { useState } from 'react';

export function useFormFields(initialState) {
  const [fieldValues, setFieldValues] = useState(initialState);

  return [
    fieldValues,
    function (event) {
      setFieldValues({
        ...fieldValues,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
