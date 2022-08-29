import Login from './src/pages/Login/index'
import Home from './src/pages/Home/index'
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <Home></Home>
    //<Login></Login>
  );
}