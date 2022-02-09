import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import React, { useState } from "react";
import Footer from "./src/components/Footer";
import Results from "./src/components/Results";

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorM, setErrorM] = useState('')

  const calcular = () => {
    /**
     *  console.log("cap -> "+capital);
     * console.log("int -> " + interes);
     * console.log("mes -> "+ meses);
     *
     *  */

    if (!capital) {
      setErrorM("Ingresa el capital");
    } else if (!interes) {
      setErrorM("Ingresa el interes");
    } else if (!meses) {
      setErrorM("Seleccione los meses");
    } else {
      const inte = interes / 100;
      const pagos = capital / ((1 - Math.pow(inte + 1, -meses)) / inte);
      console.log(pagos.toFixed(2));
      console.log((pagos*meses).toFixed(2))
      
      setTotal({
        pagoMes: pagos.toFixed(2),
        pagoTotal: (pagos*meses).toFixed(2)
      })
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Prestamos</Text>
        <View style={styles.background}></View>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>

      <Results errorM={errorM}/>
      <Footer calcular={calcular} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    //backgroundColor: colors.PRIMARY_COLOR,
    height: 250,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
});
