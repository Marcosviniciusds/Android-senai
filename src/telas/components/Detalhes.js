import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../components/Texto";
import logo from "../../../assets/logo.png"

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda direto para
            sua cozinha.
        </Texto>
        <Texto style={estilos.preco}> R$ 40,00</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>botaooo</Texto>
        </TouchableOpacity>
    </>
}


const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold'

    },
    textoBotao: {
        textAlign: "center",
        color:"#FFFFFF",
        fontSize: 16, 
        lineHeight:26,
        fontWeight:'bold'
    },
    botao: {
    marginTop:16,
    backgroundColor:'#2A9F85',
    paddingVertical: 16,
    borderRadius: 6
    }
})