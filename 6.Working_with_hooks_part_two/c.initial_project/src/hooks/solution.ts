import { useEffect, useState } from "react";

export default function useValidation(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (Number(value) >= 1900 && Number(value) <= 2024) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return {
    value,
    setValue,
    isValid,
  };
}
