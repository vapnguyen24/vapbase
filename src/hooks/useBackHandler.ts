import { useFocusEffect } from 'expo-router';
import {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';

type IParams = {
  callback: () => void;
};

export const useBackHandler = ({callback}: IParams) => {
  useFocusEffect(useCallback(() => {
    const backHandler = () => {
      callback();
      return true;
    };
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [callback]));
};
