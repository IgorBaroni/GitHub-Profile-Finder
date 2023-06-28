type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { styles } from './styles/Search';

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>GitHub Profile Finder</Text>
            <View style={styles.container2}>
                <Text style={styles.container2txt}>Search for an user:</Text>
                <Text style={styles.container2txt2}>Discover people from around the world</Text>
                <View style={styles.inpubtn}>
                    <TextInput style={styles.txtinput} placeholder="Enter an username" onChangeText={setUserName} ></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={() => loadUser(userName)}><Text>🔍</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Search

