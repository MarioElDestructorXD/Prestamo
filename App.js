import { StatusBar, SafeAreaView, StyleSheet, Text, View,Button } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/form';
import React,{useState} from 'react';

export default function App() {
  
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);

  const calcular=()=>{
    console.log("cap -> "+capital);
    console.log("int -> " + interes);
    console.log("mes -> "+ meses);
  
  }

  return (
    <>
      <StatusBar barStyle='light-content'/>

        <SafeAreaView style={styles.safeArea} >
          <Text style={styles.titleApp}>Prestamos</Text>
          <View style={styles.background}></View>
          <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
          />
        </SafeAreaView>

        <View>
          <Text>Resultados</Text>
        </View>

        <View>
          <Text>FOOTER</Text>
          <Button title='Calcular'/>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    //backgroundColor: colors.PRIMARY_COLOR,
    height: 250,
    alignItems: 'center'
  },
  titleApp: {
    fontSize: 25,
    color: "#fff",
    fontWeight: 'bold',
    marginTop: 15
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    width:"100%",
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    position:"absolute",
    zIndex:-1
  }
});
