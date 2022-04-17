import React from 'react';
import {
  Button,
  Dropdown,
  Icon,
  InputText,
  Label,
  Form,
  useStyle
} from '@goshirts-react-custom/core';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import defaultClasses from './createAccount.css';
import { useCreateAccount } from '../../services/talons';

const gender = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 }
];

const country = [
  { key: 1, label: 'Brasil', value: 'Brasil' },
  { key: 2, label: 'Chile', value: 'Chile' },
  { key: 3, label: 'Espanha', value: 'Espanha' },
  { key: 4, label: 'Estados Unidos', value: 'Estados Unidos' },
  { key: 5, label: 'Inglaterra', value: 'Inglaterra' }
];

interface createAccountProps {
  classes?: Object;
}

const createAccount: React.FC<createAccountProps> = props => {
  const classes = useStyle({ defaultClasses, classes: props.classes });
  const {
    handleChange,
    handleCheck,
    handleSubmit,
    handleClickPwd,
    onValueChange,
    activePwdIcon
  } = useCreateAccount();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Cadastrar</h1>
        <Form onSubmit={handleSubmit} classes={{ form: classes.form }}>
          <InputText
            id="firstname"
            type="text"
            name="firstname"
            label="Nome*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <InputText
            id="lastname"
            type="text"
            name="lastname"
            label="Sobrenome*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <div className={classes.genderBirth}>
            <Dropdown
              id="gender"
              label="Gênero*"
              items={gender}
              onValueChange={onValueChange}
            />
            <InputText
              id="dateOfBirth"
              type="text"
              name="dateOfBirth"
              label="Data de Nascimento*"
              autoComplete="off"
              onBlur={handleChange}
            />
          </div>
          <Dropdown
            id="country"
            label="País*"
            items={country}
            onValueChange={onValueChange}
            classes={{
              items: classes.dropCountryItems,
              itemsActive: classes.dropCountryItemsActive
            }}
          />
          <div className={classes.cpfPhone}>
            <InputText
              id="cpf"
              type="text"
              name="cpf"
              label="CPF*"
              autoComplete="off"
              onBlur={handleChange}
            />
            <InputText
              id="telephone"
              type="text"
              name="telephone"
              label="Telefone Celular*"
              autoComplete="off"
              onBlur={handleChange}
            />
          </div>
          <InputText
            id="email"
            type="e-mail"
            name="email"
            label="E-mail*"
            autoComplete="off"
            onBlur={handleChange}
          />
          <InputText
            id="newsletter"
            type="checkbox"
            name="subscribe"
            label="Quero receber a newsletter"
            autoComplete="off"
            classes={{
              root: classes.checkNewsletter,
              label: classes.checkNewsletterLabel,
              input: classes.checkNewsletterInput,
              textVisible: classes.checkNewsletterTextVisible,
              textInvisible: classes.checkNewsletterTextInvisible
            }}
            onChange={handleCheck}
          />
          <div className={classes.passwordContainer}>
            <Label id="password" label="Senha*" />
            <div className={classes.passwordContent}>
              <InputText
                id="password"
                type={activePwdIcon.password ? 'text' : 'password'}
                name="password"
                autoComplete="off"
                classes={{ root: classes.rootPassword, input: classes.inputPassword }}
                onBlur={handleChange}
              />
              <div className={classes.passwordIcon}>
                <Icon
                  id="password"
                  onClick={handleClickPwd}
                  icon={activePwdIcon.password ? FiEyeOff : FiEye}
                  size={28}
                  classes={{ icon: classes.iconPassword }}
                />
              </div>
            </div>
          </div>
          <div className={classes.passwordContainer}>
            <Label id="password_confirm" label="Confirme senha*" />
            <div className={classes.passwordContent}>
              <InputText
                id="password_confirm"
                type={activePwdIcon.password_confirm ? 'text' : 'password'}
                name="password_confirm"
                autoComplete="off"
                classes={{ root: classes.rootPassword, input: classes.inputPassword }}
                onBlur={handleChange}
              />
              <div className={classes.passwordIcon}>
                <Icon
                  id="password_confirm"
                  onClick={handleClickPwd}
                  icon={activePwdIcon.password_confirm ? FiEyeOff : FiEye}
                  size={28}
                  classes={{ icon: classes.iconPassword }}
                />
              </div>
            </div>
          </div>
          <Button type="submit" id="register" classes={{ button: classes.buttonSubmit }}>
            Cadastre-se
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default createAccount;
