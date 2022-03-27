import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


class Panga extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
                        <View style={styles.formContainer}>
                            <View style={{ textAlign: 'center', marginBottom: 20, paddingBottom: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue', textAlign: 'center' }}>Kapalzy</Text>
                            </View>
                            <View>
                                <View >
                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}
                                        label="Pelabuhan Awal"
                                        editable={false}
                                        placeholder="Pilih Pelabuhan Awal"

                                        />
                                </View>
                            </View>
                            <View>
                                <View >

                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}
                                        label="Pelabuhan Tujuan"
                                        editable={false}
                                        placeholder="Pilih Pelabuhan Tujuan"

                                        />

                                </View>
                            </View>
                            <View>
                                <View >

                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}
                                        label="Kelas Layanan"
                                        editable={false}
                                        placeholder="Pilih Layanan"

                                        />

                                </View>
                            </View>
                            <View>
                                <View >

                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}
                                        label="Tanggal Masuk Pelabuhan"
                                        editable={false}
                                        placeholder="Pilih Tanggal Masuk"

                                        />

                                </View>
                            </View>
                            <View>
                                <View >
                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}
                                        label="Jam Masuk Pelabuhan"
                                        editable={false}
                                        placeholder="Pilih Jam Masuk"

                                       />
                                </View>
                            </View>
                            <View>
                                <View >

                                    <Input
                                        style={{
                                            height: 30,
                                            margin: 10,
                                            borderWidth: 1,
                                            padding: 5,


                                        }}

                                        editable={false}
                                        placeholder="Jumlah"

                                    />
                                </View>
                            </View>
                            <View >

                                <TouchableOpacity
                                    style={styles.button}

                                >
                                    <Text style={styles.textButton}>
                                        Buat Tiket</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', shadowColor: 'black', shadowRadius: 3, shadowOpacity: 0.3, position: 'relative' }}>

                    <View style={{ flex: 1, alignItems: 'center', marginTop: 5, }}>
                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../assets/beranda.png')} style={{ width: 28, height: 28, }} />



                        </View>
                        <Text style={styles.botbar}>Beranda</Text>
                    </View>



                    <View style={{ flex: 1, alignItems: 'center', marginTop: 5, }}>
                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../assets/pesanansaya.png')} style={{ width: 28, height: 28, }} />



                        </View>
                        <Text style={styles.botbar}>Pesanan Saya</Text>
                    </View>






                    <View style={{ flex: 1, alignItems: 'center', marginTop: 5, }}>
                        <View style={{ width: 26, height: 26, }}>
                            <Image source={require('../assets/pembatalan.png')} style={{ width: 28, height: 28, }} />
                        </View>
                        <Text style={styles.botbar}>Pembatalan</Text>
                    </View>



                    <View style={{ flex: 1, alignItems: 'center', marginTop: 5, }}>
                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../assets/lainnya.png')} style={{ width: 28, height: 28, }} />


                        </View>
                        <Text style={styles.botbar}>Lainnya</Text>
                    </View>








                </View >

            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    botbar: {
        color: '#87CEFA',
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 12,
    },
    container: {
        backgroundColor: '#88b454',
    },

    formContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        flex: 1,
    },
    fieldContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingTop: 2,
    },
    button: {
        backgroundColor: 'orange',
        color: 'orange',
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Panga;