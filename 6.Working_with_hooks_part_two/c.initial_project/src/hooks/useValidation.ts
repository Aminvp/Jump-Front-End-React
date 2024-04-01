import { useEffect, useState } from "react";

export default function useValidation(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const numericValue = Number(value);
    const isValidValue = numericValue > 1900 && numericValue < 2024;

    setValue(value); // This line is unnecessary; remove it

    setIsValid(isValidValue);
  }, [value]);

  return {
    value,
    setValue,
    isValid,
  };
}
