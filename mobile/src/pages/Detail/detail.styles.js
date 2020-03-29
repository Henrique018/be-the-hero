import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 18
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414b",
    fontWeight: "bold",
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380"
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#13131a",
    lineHeight: 25
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },

  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor : '#e02041',
    borderRadius: 8,
    height: 43,
    width: '48%',
    justifyContent: 'center',
    alignItems:'center',
  },

  actionText: {
    color: "#fff",
  }
});
