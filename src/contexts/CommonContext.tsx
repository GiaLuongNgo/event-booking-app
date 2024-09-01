import React, { createContext, useState } from 'react';
import Alert from '@/components/commons/Alert';

type AlertType = 'success' | 'error' | '';

type CommonContextType = {
  showAlert: (type: AlertType, message: string) => void;
};

export const CommonContext = createContext<CommonContextType>({ showAlert: () => { } });

export const CommonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlertState] = useState({ type: '' as AlertType, message: '' });

  const showAlert = (type: AlertType, message: string) => {
    setAlertState({ type, message });
  };

  const closeAlert = () => {
    setAlertState({ type: '', message: '' });
  };

  return (
    <CommonContext.Provider value={{ showAlert }}>
      {children}
      {alert.message && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
    </CommonContext.Provider>
  );
};

export function useCommonContext() {
  const context = React.useContext(CommonContext);
  if (!context) {
    throw new Error('useCommonContext must be used within an CommonProvider');
  }
  return context;
}