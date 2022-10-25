import { useState } from "react";

function useInputs(initialFrom) {
  const [form, setForm] = useState(initialFrom);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const reset = () => setForm(initialFrom);

  return [form, onChange, reset];
}

export default useInputs;
