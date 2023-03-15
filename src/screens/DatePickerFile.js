import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'


const DatePickerFile = () => {

    // const moment = require("moment");
    let previousYear = new Date().getFullYear() - 100
    const [date, setDate] = useState(new Date(`1-1-${previousYear}`))
    const [open, setOpen] = useState(false)

    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const day = new Date().getDate()
    //const [startDate, setEndDate] = useState(new Date())

    //console.log(date)

    return (
        <SafeAreaView>

            <View>
                <Text>DatePickerFile</Text>
                <Button
                    title='Open DatePicker'
                    onPress={() => setOpen(true)}
                />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        console.log('date :: ', date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                        console.log('cancel Pressed...')
                    }}
                    fadeToColor='red'
                    onDateChange={(selectedDate) => { setDate(selectedDate) }}
                    maximumDate={new Date(year - 18, month, day)}
                    minimumDate={new Date(year - 100, month, day)}
                    androidVariant={'iosClone'}
                    mode={'date'}

                    textColor='red'
                    minuteInterval={5}
                    dividerHeight={5}
                    is24hourSource='locale'
                    title='Date & Time'
                    //confirmText='Confirm Text'
                    cancelText='Cancel Text'
                    theme='dark'

                //locale='fr'

                />

                <DatePicker
                    fadeToColor='green'
                    date={date}
                    onDateChange={setDate}
                />
            </View>
        </SafeAreaView>
    )
}

export default DatePickerFile

const styles = StyleSheet.create({})