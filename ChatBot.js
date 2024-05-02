// // //'AIzaSyCdJoZQBX9iiNJOA5wLvPg6JYJLNiDl2qc'

// import { MaterialIcons } from '@expo/vector-icons';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import * as ImagePicker from 'expo-image-picker';
// import * as Speech from 'expo-speech';
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, Alert, Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
// import { IconButton } from 'react-native-paper';


// const API_KEY = 'AIzaSyCdJoZQBX9iiNJOA5wLvPg6JYJLNiDl2qc'; // Replace with your actual API key
// const genAI = new GoogleGenerativeAI(API_KEY);

// const ChatBotScreen = () => {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [speaking, setSpeaking] = useState(false);

//   useEffect(() => {
//     // Initialize any setup logic here if needed
//   }, []);
  
//   const handlePromptChange = (text) => {
//     setPrompt(text);
//   };

//   const handleImagePicker = async () => {
//     // Add permission checks here if needed
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//       });

//       if (!result.cancelled && result.assets.length > 0 && result.assets[0].uri) {
//         setSelectedImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error picking image:', error);
//       Alert.alert('Error', 'Failed to pick image. Please try again later.');
//     }
//   };

 

//   const handleGenerateResponse = async () => {
//     setLoading(true);
//     try {
//       let content;
//       let modelType;
  
//       if (selectedImage) {
//         const base64ImageData = await imageToBase64(selectedImage);
//         content = [{ inlineData: { data: base64ImageData, mimeType: "image/jpeg" } }, prompt];
//         modelType = "gemini-pro-vision";
//       } else {
//         content = [prompt];
//         modelType = "gemini-pro";
//       }
  
//       const model = genAI.getGenerativeModel({ model: modelType });
//       const result = await model.generateContent(content);
//       const response = await result.response;
//       const text = await response.text();
  
//       setResponse(text);
//       // speakResponse(text); // Convert text to speech
//       setPrompt('');
//       saveToChatHistory(prompt, selectedImage, text); // Save chat to history
//       setSelectedImage(null); // Clear selected image
//     } catch (error) {
//       console.error('Error generating response:', error);
//       Alert.alert('Error', 'Failed to generate response. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };


//   // const handleGenerateResponse = async () => {
//   //   setLoading(true); // Set loading state to true while waiting for the response
//   //   try {
//   //     const requestBody = {
//   //       // username: 'YOUR_USERNAME', // Replace with your actual username
//   //       // prompt: prompt,
//   //       // model: 'aristotle', // Specify the model here
//   //       "model":"aristotle",
//   // "prompt":prompt,
//   // "stream":false,
//   // "options":{
//   //   "num_ctx":2048
//   // }
//   //     };
  
//   //     if (selectedImage) {
//   //       const base64ImageData = await imageToBase64(selectedImage);
//   //       requestBody.images = base64ImageData;
//   //     }
  
//   //     // Make a POST request to your backend server using axios
//   //     const response = await axios.post('https://92b9-103-186-41-248.ngrok-free.app/api/generate', requestBody, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });
  
//   //     const responseData = response.data;
//   //     const text = responseData.response;
  
//   //     setResponse(text); // Set the response received from the server
//   //     speakResponse(text); // Convert text to speech
//   //     setPrompt(''); // Clear the input prompt
//   //     saveToChatHistory(prompt, selectedImage, text); // Save chat to history
//   //     setSelectedImage(null); // Clear selected image
//   //   } catch (error) {
//   //     console.error('Error generating response:', error);
//   //     Alert.alert('Error', 'Failed to generate response. Please try again later.'); // Show an alert for error handling
//   //   } finally {
//   //     setLoading(false); // Set loading state back to false after the request is completed
//   //   }
//   // };

  
//   const imageToBase64 = async (imageUri) => {
//     try {
//       const base64ImageData = await fetch(imageUri)
//         .then(response => response.blob())
//         .then(blob => new Promise((resolve, reject) => {
//           const reader = new FileReader();
//           reader.onloadend = () => resolve(reader.result);
//           reader.onerror = reject;
//           reader.readAsDataURL(blob);
//         }))
//         .then(dataUrl => dataUrl.replace(/^data:image\/\w+;base64,/, ''));

//       return base64ImageData;
//     } catch (error) {
//       console.error('Error converting image to Base64:', error);
//       throw error;
//     }
//   };

//   const saveToChatHistory = (prompt, image, response) => {
//     const chatEntry = { prompt, image, response, timestamp: new Date().toISOString() };
//     setChatHistory([chatEntry, ...chatHistory]); // Add new entry to the beginning of the array
//   };

//   const speakResponse = async (text) => {
//     try {
//       await Speech.speak(text, { language: 'en', pitch: 1, onDone: () => setSpeaking(false)}); // You can specify the language here
//       // setSpeaking(false);
//     } catch (error) {
//       console.error('Error speaking text:', error);
//       Alert.alert('Error', 'Failed to speak text.');
//     }
//   };

//   const toggleSpeak = () =>{
//     if(speaking)
//     {
//       Speech.stop();
//     }

//     else
//     {
//       speakResponse(response);
//     }

//     setSpeaking(!speaking);
//   }

//   const renderChatItem = ({ item }) => (
//     <View style={styles.chatItem}>
//       <Text style={styles.userText}>You: {item.prompt}</Text>
//       {item.image && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: item.image }} style={styles.chatImage} />
//           <Text style={styles.aristotleText}>ARISTOTLE: {item.response}</Text>
//         </View>
//       )}
//       {!item.image && (
//         <Text style={styles.aristotleText}>ARISTOTLE: {item.response}</Text>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={chatHistory}
//         renderItem={renderChatItem}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.chatList}
//         contentContainerStyle={{ flexGrow: 1 }}
//         inverted // Start from the bottom
//       />
//       <View style={styles.inputContainer}>
//         {selectedImage && (
//           <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
//         )}
//         <TextInput
//           placeholder="Type your message here..."
//           placeholderTextColor={'white'}
//           style={styles.input}
//           onChangeText={handlePromptChange}
//           value={prompt}
//         />
//         <Button
//           title="Send"
//           onPress={handleGenerateResponse}
//           disabled={!prompt || loading}
//         />
//         <Button
//           title={speaking ? "Stop" : 'Speak'}
//           onPress={toggleSpeak}
//         />

//         <IconButton
//         icon={() => <MaterialIcons name="attach-file" size={24} color="white" />} // Change icon color to white
//         onPress={handleImagePicker}
//         style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Add background color with some transparency
//         />
//       </View>
//       {loading && <ActivityIndicator style={styles.loader} size="large" color="#007bff" />}
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: 'white',
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     color: 'white',
//     borderColor: 'white',
//   },
//   loader: {
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   chatList: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//   },
//   chatItem: {
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 5,
//     padding: 10,
//   },
//   userText: {
//     color: 'white',
//     marginBottom: 5,
//   },
//   aristotleText: {
//     color: 'white',
//     marginBottom: 5,
//     fontStyle: 'italic',
//   },
//   imageContainer: {
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   chatImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   imagePrompt: {
//     color: 'white',
//     marginTop: 5,
//   },
//   selectedImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
// });

// export default ChatBotScreen;








import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Speech from 'expo-speech';
import { MaterialIcons } from '@expo/vector-icons';

// Function to fetch chat history based on username from the backend API
const fetchChatHistory = async (username) => {
  try {
    const response = await fetch('https://a04c-103-186-41-202.ngrok-free.app/fetchchathistory/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    if (!response.ok) {
      // Handle the case where the chat history is not found for the user
      console.log('Chat history not found for user:', username);
      // You can return an empty array or handle this case based on your application logic
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error;
  }
};


const ChatBotScreen = ({ route }) => {
  const { username } = route.params; // Get the username from route params
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState('');
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    // Fetch chat history based on the username when the component mounts
    const fetchUserChatHistory = async () => {
      setLoading(true);
      try {
        const history = await fetchChatHistory(username);
        setChatHistory(history);
      } catch (error) {
        console.error('Error fetching chat history:', error);
        Alert.alert('Error', 'Failed to fetch chat history. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserChatHistory();
  }, [username]); // Re-fetch chat history when the username changes

  // Function to handle text input change
  const handlePromptChange = (text) => {
    setPrompt(text);
  };

  // Function to handle image picker
  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled && result.assets.length > 0 && result.assets[0].uri) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again later.');
    }
  };

  // Function to handle generating response
  const handleGenerateResponse = async () => {
    setLoading(true);
    try {
      // Your logic for generating response goes here
      // Update chat history, set response, etc.
    } catch (error) {
      console.error('Error generating response:', error);
      Alert.alert('Error', 'Failed to generate response. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to speak response
  const speakResponse = async (text) => {
    try {
      await Speech.speak(text, { language: 'en', pitch: 1, onDone: () => setSpeaking(false) });
    } catch (error) {
      console.error('Error speaking text:', error);
      Alert.alert('Error', 'Failed to speak text.');
    }
  };

  // Function to toggle speaking
  const toggleSpeak = () => {
    if (speaking) {
      Speech.stop();
    } else {
      speakResponse(response);
    }
    setSpeaking(!speaking);
  };

  // Function to render chat item
  const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Text style={styles.userText}>You: {item.prompt}</Text>
      {item.image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.chatImage} />
          <Text style={styles.aristotleText}>ARISTOTLE: {item.response}</Text>
        </View>
      )}
      {!item.image && (
        <Text style={styles.aristotleText}>ARISTOTLE: {item.response}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatHistory}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.chatList}
        contentContainerStyle={{ flexGrow: 1 }}
        inverted // Start from the bottom
      />
      <View style={styles.inputContainer}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}
        <TextInput
          placeholder="Type your message here..."
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={handlePromptChange}
          value={prompt}
        />
        <Button
          title="Send"
          onPress={handleGenerateResponse}
          disabled={!prompt || loading}
        />
        <Button
          title={speaking ? "Stop" : 'Speak'}
          onPress={toggleSpeak}
        />
        <IconButton
          icon={() => <MaterialIcons name="attach-file" size={24} color="white" />}
          onPress={handleImagePicker}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
      </View>
      {loading && <ActivityIndicator style={styles.loader} size="large" color="#007bff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'white',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'white',
    borderColor: 'white',
  },
  loader: {
    alignSelf: 'center',
    marginTop: 20,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  chatItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  userText: {
    color: 'white',
    marginBottom: 5,
  },
  aristotleText: {
    color: 'white',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  chatImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ChatBotScreen;
