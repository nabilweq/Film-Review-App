import React, { useState } from "react";
import {StyleSheet,View,Text,StatusBar,FlatList, TouchableOpacity,Modal, 
    TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles } from "../styles/global";
import Card from '../shared/card';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm';


export default function Home({navigation}){

    const [modalOpen,setModalOpen] = useState(false);

    const [reviews, setreviews] = useState([
        {title: 'Zelda, Breath of fresh', rating: 5, body: 'lorem lipsum', key: '1'},
        {title: 'Pursuit of Happyness', rating: 4, body: 'lorem lipsum', key: '2'},
        {title: 'The quiet place', rating: 3, body: 'lorem lipsum', key: '3'}
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setreviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }


    return (
        <View style={globalStyles.container}>

          <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style={styles.modalContent}  >
                <MaterialIcons
                    name='close'
                    size={24}
                    style={{...styles.modalToggl,...styles.modalClose}}
                    onPress={()=> setModalOpen(false)}
                
                />
                <ReviewForm addReview={addReview} />
            
            </View>
          </TouchableWithoutFeedback>      
          </Modal>  
          
          <MaterialIcons
                    name='add'
                    size={24}
                    style={styles.modalToggl}
                    onPress={()=> setModalOpen(true)}
          />


          <FlatList
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress= {() => navigation.navigate('ReviewDetails', item)} >
                    <Card>
                        <Text style={ globalStyles.titletext } >{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}
            
          />
          <StatusBar backgroundColor= '#a3210a'/>
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggl: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    }, 
    modalContent: {
        flex: 1,
        
    }
})
