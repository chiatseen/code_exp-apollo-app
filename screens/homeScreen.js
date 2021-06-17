import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ClinicsScreen from "./clinicsScreen";
import TriageScreen from "./triageScreen";
import AppointmentScreen from "./appointmentScreen";
import { filterClinic } from "../controllers/clinicController";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import QuestionScreen from "./questionScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function HomeScreen({ navigation }) {
  const [postalcode, onChangepostal] = React.useState(null);
  const params = {
    //parameters for api request
    region: "SG",
    locate: `${postalcode}`,
    auth: "83021026041920553581x50989",
    json: "1",
  };

  const [userloc, setuserloc] = useState(null);
  const [locError, setlocError] = useState(null);

  useEffect(() => {
    if (`${postalcode}`.length !== 6) setlocError(null);
    else {
      setlocError("filled");
      axios
        .get("https://geocode.xyz", { params })
        .then((response) => {
          if (typeof response.data.error !== "undefined") {
            switch (response.data.error.code) {
              case "002":
                console.warn("geolocation api out of credits");
                setlocError("002"); //auth ran out of credits
                break;
              case "003":
                setlocError("003"); //auth not found
                break;
              case "008":
                setlocError("008"); // request has no results
                break;
              default:
                setlocError(null);
                break;
            }
          } else {
            setuserloc(response.data);
            //if this works, the long lat shld be in the format userloc.longt and userlog.latt
            setlocError("noError");
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [postalcode]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.logo}
        source={require("../assets/adaptive-icon.png")}
      />
      <Text style={styles.text}>Enter your postal code below:</Text>
      <View style={styles.container}>
        <FontAwesome
          name={"location-arrow"}
          size={20}
          color={"grey"}
          style={styles.icon}
        />
        <TextInput
          style={{
            flex: 9,
            height: "auto",
            width: "auto",
            fontSize: 20,
            textAlign: "center",
          }}
          label="Postal Code"
          keyboardType="numeric"
          onChangeText={onChangepostal}
          value={postalcode}
          placeholder="e.g. 123456"
          maxLength={6}
        />
        <View style={{ flex: 1 }}></View>
      </View>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          if (locError === null || locError === "008") {
            alert("Please enter a valid postal code");
          } else if (
            filterClinic(userloc).length === 0 &&
            locError === "filled"
          ) {
            alert("Connection error: please try again");
          } else
            navigation.navigate("ClinicsScreen", {
              filter: filterClinic(userloc),
            });
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#eb637a" }}>
          Find Clinics
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicsScreen"
        component={ClinicsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TriageScreen"
        component={TriageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

//fetches the long/lat using postal code from geoxyz api

//styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "50%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
  },
  icon: {
    flex: 1,
  },
  buttons: {
    flex: 0,
    width: 150,
    height: 40,
    fontSize: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
