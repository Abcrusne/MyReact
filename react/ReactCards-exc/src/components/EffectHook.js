import React, { useEffect, useState } from 'react';
import useForm from './UseForm';
import useFetch from './useFetch';

export default function EffectHook() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstname: '',
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]); // stored in local storage
  //   useEffect(() => {
  //     const onMouseMove = (e) => {
  //       console.log(e);
  //     };
  //     window.addEventListener('mousemove', onMouseMove);

  //     return () => {
  //       window.removeEventListener('mousemove', onMouseMove);
  //     };
  //   }, []);

  return (
    <>
      <input
        name="firstName"
        placeholder="Firstname"
        value={values.firstname}
        onChange={handleChange}
      />
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
}
