import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Platform,
  View,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import { EmptyContent } from '../components/EmptyContent';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills([...mySkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(mySkills.filter((skill)=> skill.id !== id ))
  }

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good afternoon');
    } else {
      setGreetings('Good night');
    }
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Jean</Text>
      <Text style={styles.greetings}>{greetings}</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={setNewSkill}
      />
      <Button title="Add skill" onPress={handleAddNewSkill}  />

      <Text style={[styles.title, {marginVertical: 24}]}>My Skills</Text>

      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <SkillCard skill={item.name} onPress={()=> handleRemoveSkill(item.id)}/>}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyContent />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
    borderColor: '#1F1E25',
    borderWidth: 2,
  },
  inputFocused: {
    borderColor: '#A370F7',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 4,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  greetings: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
