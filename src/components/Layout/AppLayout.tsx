import React, { FC, ReactElement } from 'react';

interface IProps {
  children: ReactElement | ReactElement[];
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AppLayout;
