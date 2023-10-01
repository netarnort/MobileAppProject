import React from 'react';
import Splash from './screen/Splash'; 
import Home from './screen/Home'
import Arc from './screen/Arc';
import Aero from './screen/Aero';
import Bas from './screen/Bas';
import Cyc from './screen/Cyc';
import Dance from './screen/Dance';
import Run from './screen/Run';
import Skip from './screen/Skip';
import Swim from './screen/Swim';
import Weight from './screen/Weight';
import Yoga from './screen/Yoga';
import Dev from './screen/Dev';
import Reason from './screen/Reason';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Hello Everyone 👋' }}
          />
          <Stack.Screen
            name='Arc'
            component={Arc}
            options={{ title: 'Archery' }}
          />
          <Stack.Screen
            name='Aero'
            component={Aero}
            options={{ title: 'Aerobics' }}
          />
          <Stack.Screen
            name='Bas'
            component={Bas}
            options={{ title: 'Basketball' }}
          />
          <Stack.Screen
            name='Cyc'
            component={Cyc}
            options={{ title: 'Cycling' }}
          />
          <Stack.Screen
            name='Dance'
            component={Dance}
            options={{ title: 'Danceing' }}
          />
          <Stack.Screen
            name='Run'
            component={Run}
            options={{ title: 'Running' }}
          />
          <Stack.Screen
            name='Skip'
            component={Skip}
            options={{ title: 'Skipping' }}
          />
          <Stack.Screen
            name='Swim'
            component={Swim}
            options={{ title: 'Swimming' }}
          />
          <Stack.Screen
            name='Weight'
            component={Weight}
            options={{ title: 'Weightlifting' }}
          />
          <Stack.Screen
            name='Yoga'
            component={Yoga}
            options={{ title: 'Yoga' }}
          />
          <Stack.Screen
            name='Dev'
            component={Dev}
            options={{ title: 'คณะผู้จัดทำ' }}
          />
          <Stack.Screen
            name='Reason'
            component={Reason}
            options={{ title: 'จุดประสงค์' }}
          />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
