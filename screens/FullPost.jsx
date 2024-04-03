import { View, Image, Text, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post';
import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Loading from '../components/Loading';

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-right: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export default function FullPostScreen() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState()

  const fetchPosts = () => {
    setIsLoading(true)+
    axios.get('https://660bf8a03a0766e85dbd0ef3.mockapi.io/posts/1').then((response) =>{
      setData(response.data)
    }).catch((err) => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статью')
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  React.useEffect(fetchPosts, [])

  if (true){
    return <Loading/>
  }

  return (
    <View style={{padding: 20, paddingTop:80}}>
        <PostImage source={{uri: 'https://habrastorage.org/webt/kd/fy/ba/kdfyba1_xpknr4vvhcohumdobu8.jpeg'}}/>
        <PostText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eum aliquam, praesentium suscipit debitis tenetur eius delectus obcaecati adipisci nobis, atque odit? Necessitatibus et perferendis facere tempore cum laboriosam iure!</PostText>
    </View>
  );
}

