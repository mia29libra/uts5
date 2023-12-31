import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddSaldo, IconGetPoint, IconPulsa, IconMakanan, IconTiket, IconTagihan, IconRute, IconDiskon } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title, type}) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconAddSaldo />

        if (title === "Get Point") return <IconGetPoint />

        if (title === "Pulsa") return <IconPulsa />

        if (title === "Makanan") return <IconMakanan />

        if (title === "Tiket") return <IconTiket />

        if (title === "Tagihan") return <IconTagihan />

        if (title === "Rute") return <IconRute />

        if (title === "Diskon") return <IconDiskon />

        return <IconAddSaldo />
    }

    return (
        <TouchableOpacity>
            <View style={styles.button(type)}>
              <Icon  />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon;

const styles = StyleSheet.create({
   
    button : (type) => ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10,
    }),
    text: {
        fontSize: 10,
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center'
    },
});