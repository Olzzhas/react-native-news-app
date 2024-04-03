import { View, Text, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post';
import React from 'react';
import axios from 'axios'

export default function HomeScreen() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])

  const fetchPosts = () => {
    setIsLoading(true)+
    axios.get('https://660bf8a03a0766e85dbd0ef3.mockapi.io/posts').then((response) =>{
      setData(response.data)
    }).catch((err) => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  React.useEffect(fetchPosts, [])

  if (isLoading){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size='large' />
        <Text style={{marginTop: 15}}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <View style={{paddingTop: 65}}>
      <Post 
        title={'Olzhas Mukhanbetzhan'} 
        imageUrl={'https://avatar.iran.liara.run/public'}
        createdAt={'02/04/2024'}
      />

      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={[...data, ...data]}
        renderItem={
          ({item}) => 
            <TouchableOpacity>
              <Post
              title={item.title} 
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
            </TouchableOpacity>
        }
      />
    </View>
  );
}

