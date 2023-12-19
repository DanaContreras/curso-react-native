import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles, {l_green} from './styles';
import ButtonIcon from '../../../components/Button/ButtonIcon';
import {faSubtract, faAdd} from '@fortawesome/free-solid-svg-icons';
import {Text} from 'react-native-elements';

const CounterScreen = () => {

  const [count, setCount] = useState(0);
	const [textSize, setTextSize] = useState(20);

  const add = (num: number) => {
    setCount(prevState => prevState + num);
  };

  useEffect(() => {
    setTextSize(50 - count.toString().length * 1.5);
  }, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={[styles.counter, {fontSize: textSize}]}>{count}</Text>
      </View>
      <View style={styles.containerButton}>
        <ButtonIcon
          icon={faSubtract}
          style={styles.button}
          color={l_green}
          onPress={() => add(-1)}
        />
        <ButtonIcon
          icon={faAdd}
          style={styles.button}
          color={l_green}
          onPress={() => add(1)}
        />
      </View>
    </View>
  );
};

export default CounterScreen;
