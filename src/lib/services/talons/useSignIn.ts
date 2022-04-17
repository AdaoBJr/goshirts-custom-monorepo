import { useState, useCallback, ChangeEvent, SyntheticEvent } from 'react';
import { useMutation, gql } from '@apollo/client';
import { signInCustomerGQL } from '../../../gql/customer';

interface ActivePwdIcon {
  password: boolean;
}

export interface InputDataSignIn {
  email: string;
  password: string;
}

const useSignIn = () => {
  const initialData = { email: '', password: '' };
  const [inputData, setInputData] = useState<InputDataSignIn>(initialData);
  const [activePwdIcon, setActivePwdIcon] = useState<ActivePwdIcon>({ password: false });

  const { query, variables } = signInCustomerGQL({ data: inputData });

  const [signInCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      setInputData(prevState => ({ ...prevState, [name]: value }));
    },
    [setInputData]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }: ChangeEvent<HTMLInputElement>) =>
      id === 'password' &&
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await signInCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleClickPwd,
    inputData,
    activePwdIcon
  };
};

export default useSignIn;
