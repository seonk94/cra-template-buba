// Example
import { User } from '../../models';
import client from '../api';

export const getUser = () => client.get('/users');

export const updateUser = (user: User) => client.patch('/users', { user });
