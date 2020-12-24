import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconBackDark } from '../../../assets'

export default function IconOnly({onPress,icon}) {
    const Icon=()=>{
        if (icon==='back-dark') {
            return <IconBackDark/>
        }
        if (Icon==="back-light") {
            return <IconBackDark/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
