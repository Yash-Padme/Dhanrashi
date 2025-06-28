import dotenv from 'dotenv';
dotenv.config();
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'plaid-client-id': process.env.PLAID_CLIENT_ID,
      'plaid-secret': process.env.PLAID_SECRET,
    }
  }
}) 

export const plaidClient = new PlaidApi(configuration);