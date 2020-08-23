import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";


const getFonts = () => Font.loadAsync({
  'Kanit-Black' : require('./assets/fonts/Kanit-Black.ttf'),
  'Lobster-Regular' : require('./assets/fonts/Lobster-Regular.ttf'),
  'KronaOne-Regular' : require('./assets/fonts/KronaOne-Regular.ttf')
});

export default function App() {
  const [fontsLoaded,setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator/> 
    )
  } else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
}


