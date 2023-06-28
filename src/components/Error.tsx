import { View, Text } from "react-native";

import { styles } from './styles/Search'

const Error = () => {
    return (
      <View>
          <Text style={styles.txt}>User not found</Text>
      </View>
    );
  };
  
export default Error;
  