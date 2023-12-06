import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    let estilo = estilos.Texto
    if (style.fonWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MonstserratRegular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})