import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { testReqeustAction, TEST_REQUEST, TEST_SUCCESS } from '../redux/actions';

const indexPage: FC = () => {

  const dispatch = useDispatch();
  const { success } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(testReqeustAction());
  }, []);

  useEffect(() => {
    if (success.type.includes(TEST_SUCCESS)) {
      console.log(success.response[TEST_SUCCESS]);
    }
  }, [success]);

  return (
    <div>
      <img src="/images/HeaderLogo.svg" alt="로고" />
    </div>
  );
};

export default indexPage;
