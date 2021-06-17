import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";

export default function SearchDropDownStack(props) {
  const { dataSource } = props;
  const { navigation } = props;
  const { polyclinic } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {dataSource.length ? (
          dataSource.map((item) => {
            return (
              <View style={styles.itemView} key={item}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("QuestionScreen", {
                      item,
                      polyclinic,
                    });
                  }}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <View style={styles.noResultView}>
            <Text style={styles.noResultText}>No search items matched</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
  subContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    marginHorizontal: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexWrap: "wrap",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  itemView: {
    // marginHorizontal: '10%',
    height: 30,
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#eb637a",
    padding: 10,
    borderRadius: 7,
    height: 40,
  },
  itemText: {
    color: "white",
    // fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
  },
  noResultView: {
    alignSelf: "center",
    // margin: 20,
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  noResultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
