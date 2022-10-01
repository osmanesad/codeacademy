import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';


const App = () => {
  const [name, setName] = useState('');

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}
    >
      <Text style={{ marginVertical: 16 }}>
        { name ? 'Hi ${name}' : 'What?' }
      </Text>

      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName(text)}
      />
    </View>
  );
};

export default App;
