import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import RadioForm from "react-native-simple-radio-button";

export default function App() {
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [promilles, setPromilles] = useState(0);


  const amountList = [
    { label: "1 bottles", value: 1 },
    { label: "2 bottles", value: 2 },
    { label: "3 bottles", value: 3 },
    { label: "4 bottles", value: 4 },
    { label: "5 bottles", value: 5 },
    { label: "6 bottles", value: 6 },
    { label: "7 bottles", value: 7 },
    { label: "8 bottles", value: 8 },
    { label: "9 bottles", value: 9 },
    { label: "10 bottles", value: 10 },
    { label: "11 bottles", value: 11 },
    { label: "12 bottles", value: 12 },
    { label: "13 bottles", value: 13 },
    { label: "14 bottles", value: 14 },
    { label: "15 bottles", value: 15 },
    { label: "16 bottles", value: 16 },
    { label: "17 bottles", value: 17 },
    { label: "18 bottles", value: 18 },
    { label: "19 bottles", value: 19 },
    { label: "20 bottles", value: 20 },
    { label: "21 bottles", value: 21 },
    { label: "22 bottles", value: 22 },
    { label: "23 bottles", value: 23 },
    { label: "24 bottles", value: 24 }
  ];
  const hoursList = [
    { label: "1 hours", value: 1 },
    { label: "2 hours", value: 2 },
    { label: "3 hours", value: 3 },
    { label: "4 hours", value: 4 },
    { label: "5 hours", value: 5 },
    { label: "6 hours", value: 6 },
    { label: "7 hours", value: 7 },
    { label: "8 hours", value: 8 },
    { label: "9 hours", value: 9 },
    { label: "10 hours", value: 10 },
    { label: "11 hours", value: 11 },
    { label: "12 hours", value: 12 },
    { label: "13 hours", value: 13 },
    { label: "14 hours", value: 14 },
    { label: "15 hours", value: 15 },
    { label: "16 hours", value: 16 },
    { label: "17 hours", value: 17 },
    { label: "18 hours", value: 18 },
    { label: "19 hours", value: 19 },
    { label: "20 hours", value: 20 },
    { label: "21 hours", value: 21 },
    { label: "22 hours", value: 22 },
    { label: "23 hours", value: 23 },
    { label: "24 hours", value: 24 }
  ];
  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" }
  ];

  function calculate() {
    if (weight === "" || weight == 0) {
      alert ("Before calculating insert your weight!");
    }
    else {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burningtime = weight / 10;
    let gramsleft = grams - burningtime * time;
    if (gender === "male") {
      result = gramsleft / (weight * 0.7);
      if (result < 0 ) {
        result = 0.00;
      }
      setPromilles(result)
    } else {
      result = gramsleft / (weight * 0.6);
      if (result < 0 ) {
        result = 0.00;
      }
      setPromilles(result)
    }
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.header}>Weight</Text>
        <TextInput style={styles.text}
          placeholder="Your weight in kilograms"
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />
        <Text>Bottles</Text>
        <DropDownPicker
          items={amountList}
          containerStyle={{height: 40}}
          zIndex={5000}
          placeholder="Select amount of bottles"
          labelStyle={{
            fontSize: 14,
            textAlign: 'center',
            color: '#000'
        }}
          onChangeItem={(item) => setBottles(item.value)}
        />
        <Text>Time</Text>
        <DropDownPicker
          items={hoursList}
          zIndex={4000}
          labelStyle={{
            fontSize: 14,
            textAlign: 'center',
            color: '#000'
        }}
          placeholder="Time since first drink"
          containerStyle={{height: 40}}
          onChangeItem={(item) => setTime(item.value)}
        />
        <Text>Gender</Text>
        <RadioForm
          buttonSize={10}
          style={styles.radio}
          radio_props={genders}
          initial={0}
          onPress={(value) => {
            setGender(value);
          }}
        />
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  field: {
    margin: 10,
    width: 300,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center"
  },
  text: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    borderBottomWidth: 1
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },
});
