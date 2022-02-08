import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';
import colors from '../utils/colors';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function footer(props) {
    const { calcular } = props;
  return (
    <View styles={styles.ViewFooter}>
        <TouchableOpacity styles={styles.buttonCalc} onPress={calcular}>
            <Text style={style.calculate}>Calcular</Text>
        </TouchableOpacity>
      <Text>Este es mi componente FOOTER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    ViewFooter:{
        position: "absolute",
        bottom: "0",
        width: "100%",
        backgroundColor:colors,
        height: 100,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems: "center",
        justifyContent: "center"

    },
    calculate:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    },
    buttonCalc:{
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
    }
});
