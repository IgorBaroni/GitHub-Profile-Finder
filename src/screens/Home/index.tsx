import { ScrollView, View } from 'react-native';
import { useState } from 'react';


import { UserProps } from '../../types/user';
import { styles } from './styles';
import Error from '../../components/Error';
import User from '../../components/User';
import Search from '../../components/Search';

export default function App() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { name, avatar_url, bio, login, location, followers, following } = data;

    const userData: UserProps = {
      name,
      avatar_url,
      bio,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error />}
      </View>
    </ScrollView>
  );
}


