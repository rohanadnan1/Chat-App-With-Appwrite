import { Client, Account, Databases } from 'appwrite';

export const DATABASE_ID = process.env.DATABASE_ID 
export const COLLOCTION_ID = process.env.COLLOCTION_ID
export const PROJECT_ID = process.env.PROJECT_ID
export const client = new Client();

client
    .setEndpoint(process.env.ENDPOINT_KEY)
    .setProject(process.env.API_KEY); 

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from 'appwrite';