import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createCustomerGQL } from '../../../gql/customer';

interface ActivePwdIcon {
  password?: boolean;
  password_confirm?: boolean;
}

export interface InputDataCreateAccount {
  firstname: string;
  lastname: string;
  gender: number;
  dateOfBirth: string;
  country: string;
  cpf: string;
  telephone: string;
  email: string;
  subscribe: boolean;
  password: string;
  password_confirm?: string;
}

interface onValueChangeProps {
  id: string;
  itemActive: string;
}

const useCreateAccount = () => {
  const initialData = {
    firstname: '',
    lastname: '',
    gender: 0,
    dateOfBirth: '',
    country: '',
    cpf: '',
    telephone: '',
    email: '',
    subscribe: false,
    password: '',
    password_confirm: ''
  };
  const [inputData, setInputData] = useState<InputDataCreateAccount>(initialData);
  const initialPwd = { password: false, password_confirm: false };
  const [activePwdIcon, setActivePwdIcon] = useState<ActivePwdIcon>(initialPwd);

  const { query, variables } = createCustomerGQL({ data: inputData });

  const [createCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      setInputData(prevState => ({ ...prevState, [name]: value }));
    },
    [setInputData]
  );

  const handleCheck = useCallback(
    ({ target: { checked, name } }: ChangeEvent<HTMLInputElement>) => {
      setInputData(prevState => ({ ...prevState, [name]: checked }));
    },
    [setInputData]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }: ChangeEvent<HTMLInputElement>) =>
      (id === 'password' || id === 'password_confirm') &&
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const onValueChange = useCallback(
    ({ id, itemActive }: onValueChangeProps) =>
      setInputData(prevState => ({ ...prevState, [id]: itemActive })),
    [setInputData]
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    delete inputData.password_confirm;

    try {
      const response = await createCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleCheck,
    handleSubmit,
    handleClickPwd,
    onValueChange,
    inputData,
    activePwdIcon
  };
};

export default useCreateAccount;
