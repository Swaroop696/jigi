

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

// const Registration = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleRegister = () => {
//     if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     // Simulated registration process, replace with your actual registration logic
//     const registeredCredentials = { username, password };
//     navigation.navigate('Login', { registeredCredentials });
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Register</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           onChangeText={setUsername}
//           value={username}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           onChangeText={setPassword}
//           value={password}
//           secureTextEntry
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           onChangeText={setConfirmPassword}
//           value={confirmPassword}
//           secureTextEntry
//         />
//         <Button title="Register" onPress={handleRegister} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default Registration;





// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

// const Registration = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleRegister = async () => {
//     if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await fetch('https://9162-103-186-41-202.ngrok-free.app/createnewuser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Registration failed.');
//       }

//       const data = await response.json();
//       // Handle successful registration response
//       console.log('Registration successful:', data);

//       navigation.navigate('Login'); // Navigate to Login screen
//     } catch (error) {
//       console.error('Error registering:', error);
//       Alert.alert('Error', 'Failed to register. Please try again later.');
//     }
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Register</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           onChangeText={setUsername}
//           value={username}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           onChangeText={setPassword}
//           value={password}
//           secureTextEntry
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           onChangeText={setConfirmPassword}
//           value={confirmPassword}
//           secureTextEntry
//         />
//         <Button title="Register" onPress={handleRegister} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default Registration;






import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const Registration = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('https://99fe-103-186-41-202.ngrok-free.app/createnewuser/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      const data = await response.json();
      // Handle successful registration response
      console.log('Registration successful:', data);
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('Login'); // Navigate to Login screen
    } catch (error) {
      console.error('Error registering:', error);
      const errorMessage = error.message || 'Failed to register. Please try again later.';
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Registration;




