import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioRecord = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRecorderPlayer.setSubscriptionDuration(0.1);
  }, []);

  const startRecording = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    console.log(result);
  };

  const stopRecording = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    console.log(result);
  };

  const startPlaying = async () => {
    const result = await audioRecorderPlayer.startPlayer();
    setIsPlaying(true);
    audioRecorderPlayer.addPlayBackListener((e) => {
      console.log('e', e);
      if (e.duration === e.currentPosition) {
        setIsPlaying(false);
      }
    });
    console.log(result);
  };

  const stopPlaying = async () => {
    const result = await audioRecorderPlayer.stopPlayer();
    setIsPlaying(false);
    console.log(result);
  };

  let pressTimeout;

  const handlePressIn = () => {
    pressTimeout = setTimeout(() => {
      if (!isRecording) {
        startRecording();
      }
    }, 300); // Adjust the delay as needed (e.g., 500 milliseconds)
  };

  const handlePressOut = () => {
    clearTimeout(pressTimeout);
    if (isRecording) {
      stopRecording();
    }
  };

  const handlePress = () => {
    if (!isRecording) {
      console.log('Please hold to record.');
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        style={{
          backgroundColor: isRecording ? 'red' : 'green',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>
          {isRecording ? 'Recording...' : 'Tap and Hold to Record'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={isPlaying ? stopPlaying : startPlaying}
        style={{
          backgroundColor: isPlaying ? 'red' : 'green',
          padding: 16,
          borderRadius: 8,
          marginTop: 16,
        }}
      >
        <Text style={{ color: 'white' }}>
          {isPlaying ? 'Stop Playing' : 'Start Playing'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AudioRecord;
