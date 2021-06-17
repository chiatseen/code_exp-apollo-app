import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  var newProfile = {
    name: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    dob: "",
    blood: "",
    smoke: "",
    chol: "",
    hyper: "",
    fat: "",
    injury: "",
  };

  return (
    <ScrollView style={styles.profilePrompts}>
      <Text style={styles.text}>Name (full name as shown in NRIC):</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.name = text;
        }}
      />
      <Text style={styles.text}>Age:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.age = text;
        }}
      />
      <Text style={styles.text}>Sex (Male/Female):</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.sex = text;
        }}
      />
      <Text style={styles.text}>Height (in cm):</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(text) => {
          newProfile.height = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Weight (to nearest kg):</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(text) => {
          newProfile.weight = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Date of Birth (DD/MM/YYYY):</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.dob = text;
        }}
        maxLength={10}
      />
      <Text style={styles.text}>Blood Type:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.blood = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Do you Smoke? (Yes/No)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.smoke = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Do you have high cholesterol? (Yes/No)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.chol = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Do you have hypertension? (Yes/No)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.hyper = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Are you overweight? (Yes/No)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.fat = text;
        }}
        maxLength={3}
      />
      <Text style={styles.text}>Have you suffered an injury? (Yes/No)</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          newProfile.injury = text;
        }}
        maxLength={3}
      />
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Profile", { newProfile });
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#eb637a" }}>
          Submit
        </Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#eb637a" }}>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text>{"\n\n"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profilePrompts: {
    paddingTop: 30,
    flex: 1,
    paddingLeft: 30,
  },
  textInput: {
    borderColor: "black",
    borderRadius: 10,
    padding: 7,
    backgroundColor: "white",
    marginTop: 3,
    width: "92%",
  },
  button: {
    width: "60%",
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: "31%",
  },
  text: {
    paddingTop: 17,
    paddingBottom: 2,
    fontSize: 17,
  },
});
