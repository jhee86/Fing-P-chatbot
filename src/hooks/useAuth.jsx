import { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext.jsx';

export const useAuth = () => useContext(AuthContext);