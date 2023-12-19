import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import ButtonIcon from "../../../components/Button/ButtonIcon";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styles, { yellow } from "./styles";

function StarWarsDataScreen(){

  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(82);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setTotal(data.count);
      })
  }, []);

  const add = (num: number) => {
    if (count + num < 1)
      setCount(total + 1);
    else if (count + num > total + 1)
      setCount(1);
    else
      setCount(prevState => (prevState + num));
  }

  useEffect(() => {
    let id = count.toString();
    fetch('https://swapi.dev/api/people/' + id)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count])

  return(
    <View style={styles.container}>
      <Text>{JSON.stringify(starWarsData,null,2)}</Text>
      <View style={styles.containerButton}>
        <ButtonIcon icon={faAngleDoubleLeft} color={yellow} onPress={() => add(-1)}/>
        <ButtonIcon icon={faAngleDoubleRight} color={yellow} onPress={() => add(1)}/>
      </View>
    </View>
  )
}

export {StarWarsDataScreen}
