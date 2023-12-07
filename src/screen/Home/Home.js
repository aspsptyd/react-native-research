import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

  const [form, setForm] = useState({
    nama_lengkap: '',
    wa: '',
    address: '',
    education: '',
    id_ktp: '',
  });

  const showData = () => {
    console.info('cekdisini: ', form)
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TextInput
            style={styles.textInputBasic}
            placeholder="Nama Lengkap"
            onChangeText={val => setForm({ ...form, nama_lengkap: val })}
            defaultValue={form?.nama_lengkap}
          />
          <TextInput
            style={styles.textInputBasic}
            placeholder="No. WhatsApp"
            onChangeText={val => setForm({ ...form, wa: val })}
            defaultValue={form?.wa}
          />
          <TextInput
            style={styles.textInputBasic}
            placeholder="Alamat Sekarang"
            onChangeText={val => setForm({ ...form, address: val })}
            defaultValue={form?.address}
          />
          <TextInput
            style={styles.textInputBasic}
            placeholder="Pendidikan Terakhir"
            onChangeText={val => setForm({ ...form, education: val })}
            defaultValue={form?.education}
          />
          <TextInput
            style={styles.textInputBasic}
            placeholder="No. KTP"
            onChangeText={val => setForm({ ...form, id_ktp: val })}
            defaultValue={form?.id_ktp}
          />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity 
              style={[styles.buttonPrimary, { flex: 1, backgroundColor: '#042a69' }]} 
              onPress={showData}
            >
              <Text style={styles.textButtonLight}>Simpan</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.buttonPrimary, { flex: 1.5, backgroundColor: '#a6abb3', marginLeft: 10 }]} 
              onPress={showData}
            >
              <Text style={styles.textButtonLight}>Batalkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white'
  },
  textInputBasic: {
    height: 40, 
    fontWeight: 'bold',
    borderWidth: 1.5, 
    marginBottom: 10, 
    paddingLeft: 20, 
    paddingRight: 20,
    borderRadius: 5,
    borderColor: '#c0c6cf',
    color: 'black',
  },
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  textButtonLight: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Home;