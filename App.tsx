import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/routes/index.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const ACCOUNTS_KEY = "@accountsChart:accounts";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
