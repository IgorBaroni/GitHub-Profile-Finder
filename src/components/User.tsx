import { View, Text, Image } from "react-native";
import { UserProps } from "../types/user";
import { styles } from './styles/User';

const User = ({ name, login, bio, avatar_url, followers, following, location }: UserProps) => {
  return (
    <View style={styles.user}>
            <Image style={styles.img} source={{uri: avatar_url}} alt={login} />
            <Text style={styles.login}>{login}</Text>
            <Text style={styles.name}>{name}</Text>
            {bio && (<Text style={styles.bio}>"{bio}"</Text>)}
            {location && (<Text style={styles.location}>
                📍
                <Text>{location}</Text>
            </Text>)}
            
            <View style={styles.stats}>
                <View>
                    <Text style={styles.statsText}>Followers</Text>
                    <Text style={styles.number1}>{followers}</Text>
                </View>
                <View>
                    <Text style={styles.statsText}>Following</Text>
                    <Text style={styles.number2}>{following}</Text>
                </View>
            </View>
        </View>
  )
}

export default User