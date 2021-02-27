import React from 'react';
import { View, Text, StatusBar,} from 'react-native';

import Routes from './src/routes';

// import Login from './src/screens/Login';
// import Tarefas from './src/screens/tarefas'

function App() {

  return (
    <View>
      <StatusBar/>

      <Routes />

    </View>
  )
}

export default App;



