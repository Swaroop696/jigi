
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

// const Login = ({ navigation, route }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [registeredCredentials, setRegisteredCredentials] = useState(null);

//   useEffect(() => {
//     if (route.params?.registeredCredentials) {
//       setRegisteredCredentials(route.params.registeredCredentials);
//       Alert.alert('Success', 'Registration successful!');
//     }
//   }, [route.params]);

//   const handleLogin = () => {
//     if (registeredCredentials && username === registeredCredentials.username && password === registeredCredentials.password) {
//       // Successful login, navigate to HomeScreen
//       navigation.navigate('HomeScreen');
//     } else {
//       // Show error alert for incorrect credentials
//       Alert.alert('Error', 'Incorrect username or password.');
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate('Registration');
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
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
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: 'black',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   registerButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Login;







// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

// const Login = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!username.trim() || !password.trim()) {
//       Alert.alert('Error', 'Please enter your username and password.');
//       return;
//     }

//     try {
//       const response = await fetch('https://949a-103-186-41-202.ngrok-free.app/userlogin/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       if (!response.ok ) {
//         throw new Error('Login failed.');
//       }

//       const data = await response.json();
//       // Handle successful login response
//       console.log('Login successful:', data);

//       navigation.navigate('HomeScreen'); // Navigate to HomeScreen after successful login
//     } catch (error) {
//       console.error('Error logging in:', error);
//       Alert.alert('Error', 'Failed to log in. Please try again later.');
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate('Registration');
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
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
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: 'black',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   registerButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Login;






import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter your username and password.');
      return;
    }

    try {
      const response = await fetch('https://949a-103-186-41-202.ngrok-free.app/userlogin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data && response.ok) {
        // Login successful (backend returns a boolean value indicating success)
        console.log('Login successful:', data);
        navigation.navigate('HomeScreen'); // Navigate to HomeScreen after successful login
      } else {
        // Login failed (backend returns a boolean value indicating failure)
        console.error('Login failed:', data);
        Alert.alert('Error', 'Incorrect username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to log in. Please try again later.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registration');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;






// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

// const Login = ({ navigation, route }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Check if route params contain the username
//   const initialUsername = route.params?.username || '';
//   if (initialUsername) {
//     setUsername(initialUsername);
//   }

//   const handleLogin = async () => {
//     if (!username.trim() || !password.trim()) {
//       Alert.alert('Error', 'Please enter your username and password.');
//       return;
//     }

//     try {
//       const response = await fetch('https://99fe-103-186-41-202.ngrok-free.app/userlogin/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (data && response.ok) {
//         // Login successful (backend returns a boolean value indicating success)
//         console.log('Login successful:', data);
//         navigation.navigate('HomeScreen', { username: username }); // Navigate to HomeScreen after successful login
//       } else {
//         // Login failed (backend returns a boolean value indicating failure)
//         console.error('Login failed:', data);
//         Alert.alert('Error', 'Incorrect username or password.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       Alert.alert('Error', 'Failed to log in. Please try again later.');
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate('Registration');
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg' }}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>Login</Text>
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
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: 'black',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   registerButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Login;

