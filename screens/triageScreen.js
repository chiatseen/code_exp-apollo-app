import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import SearchDropDown from "../shared/SearchDropDown";
import Quiz from "../shared/quiz";

export default function TriageScreen({ navigation, route }) {
  const { selectedName } = route.params;
  const [dataSource] = useState([
    "Vomiting",
    "Coughing",
    "Rash",
    "Eye Pain",
    "Stomach ache",
    "Facial pain",
    "Fatigue",
    "Fear of dying",
    "Fear of obesity",
    "Feeling detached from your body ",
    "Female infertility",
    "Fever",
    "Flaccid dysarthria",
    "Foamy urine",
    "Forearm pain",
    "Frequent urination",
  ]);
  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);
  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = dataSource.filter((item) => {
        if (item.toLowerCase().match(temp)) return item;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.prompt}>
          What symptom would you like to get checked?
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Search symptoms"
        placeholderTextColor="lightgray"
        onChangeText={onSearch}
      />
      <Text style={styles.subheading}>
        If you have more than one, select the symptom which is bothering you the
        most.
      </Text>
      {searching && (
        <SearchDropDown
          dataSource={filtered}
          navigation={navigation}
          polyclinic={selectedName}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "5%",
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
  heading: {
    width: "80%",
    paddingVertical: 14,
  },
  prompt: {
    // fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
  },
  subheading: {
    // fontFamily: "Roboto",
    fontSize: 16,
    width: "80%",
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    borderColor: "#eb637a",
    borderWidth: 1,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

/* 
  - Loads on to triage screen
  - what are you here for
    - chronic disease (diabetes, hypertension checkup)
    - acute disease (URTI / acute disease)
  - for chronic, skip symptom checking and immediately schedule appointment
  - for acute, launch symptom checker
  - key in first symptom (dropdown)
*/
