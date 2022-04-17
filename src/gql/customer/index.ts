import { generateMutationOp } from '../../../generated';
import { InputDataCreateAccount } from '../../lib/services/talons/useCreateAccount';
import { InputDataSignIn } from '../../lib/services/talons/useSignIn';

interface CreateCustomerData {
  data: InputDataCreateAccount;
}

interface SignInData {
  data: InputDataSignIn;
}

export const createCustomerGQL = ({ data }: CreateCustomerData) =>
  generateMutationOp({
    createCustomer: [{ data }, { customer: { id: true, email: true, firstname: true } }]
  });

export const signInCustomerGQL = ({ data }: SignInData) =>
  generateMutationOp({
    signInCustomer: [{ data }, { token: true }]
  });
