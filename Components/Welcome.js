import React from 'react';
import {
 View,
 Text,
 SafeAreaView,
 Image,
 StyleSheet,   
 TouchableOpacity,
 Button,
 Modal,
 TextInput
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import COLORS from '../Const/Colors';


 class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state={
            show:false,
            show2:false
        }
    }
    render(){

return(
    <SafeAreaView style={{
        flex:1,
        backgroundColor:COLORS.Lightblack
    }}>
        <View style={styles.imageContainer}>
            <Image source={ require('../assets/images/plant5.png')} style={{ resizeMode:'contain', flex:1, }}/>
        </View>        

        <View style={styles.detailsContainer}>
             <Text style={{ fontSize:38, textAlign:'center',color:'#FF3F57'}}>Welcome</Text>
         </View>
         <View style={{
             flex:0.15,
             justifyContent:'center',
             alignItems:'center'
         }}>
         <Text style={{ fontSize:19,color:COLORS.light}}>Lorem ipsum dolor sit amet,</Text> 
         <Text style={{ fontSize:19,color:COLORS.light}}>consectetur adipiscing elit,sed</Text> 
         <Text style={{ fontSize:19,color:COLORS.light}}>do eiusmod</Text>
     </View>      
        
      <View style={{ flex:0.50,marginTop:10}}>
            
      <Modal 
       transparent={true} 
       visible={ this.state.show }>

        <View style={{flex:1}}>
          <View style={{ backgroundColor:'#FFEAAA',marginTop:240,margin:15, borderRadius:25,flex:1 }}>
          
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end',marginLeft:20,marginTop:10}}>
        <View>
          <Text style={{ fontSize:16,color:'#040622',padding:2 }}>Hello...</Text>
          <Text style={{ fontSize:26,color:'#040622',fontWeight:'bold'}}>Register</Text>
         </View>
         
        <View style={{ marginRight:40}}> 
         <Entypo name="circle-with-cross" size={30} color="red" onPress={() => {this.setState({show:false})}}/>
       </View>      
    </View>                                     

        <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder="username/email" style={styles.input} />
                <AntDesign name="eyeo" size={20} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         
        
        <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder="course" style={styles.input} />
                <AntDesign name="eyeo" size={20} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         

       <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder='password' style={styles.input} />
                <EvilIcons name="lock" size={24} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         
            
        <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder="confirm password" style={styles.input} />
                <EvilIcons name="lock" size={24} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         
           
            <View style={styles.userbtn}>         
           <TouchableOpacity activeOpacity={0.8}>
              <Text style={{ color:"#FFEAAA", fontSize:20,}}>Register</Text>
               </TouchableOpacity>
        </View> 


             <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5,marginRight:10 }}>
                <Text style={{ fontSize:17 }}>Already have account?</Text>
                <TouchableOpacity onPress={() => {this.setState({show2:true})}}><Text style={{ fontSize:17,color:'#FF706D',padding:5 }}>Login</Text>
                </TouchableOpacity>              
            </View>
          </View>
        </View>   
      </Modal>            

      <View style={styles.borderBtn}>
                 <TouchableOpacity activeOpacity={0.7} onPress={() => {this.setState({show:true})}}>
              <Text style={{ color:"#1A1B40", fontSize:18,}}>Create Account</Text>  
             </TouchableOpacity>
             </View>                  
          
 <View>  
     <Modal 
       transparent={true} 
       visible={ this.state.show2 }>

        <View style={{flex:1}}>
          <View style={{ backgroundColor:'#FFEAAA',marginTop:350,margin:16,borderRadius:25,flex:1 }}>
          
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end',marginLeft:20,marginTop:15}}>
        <View>
          <Text style={{ fontSize:16,color:'#040622',padding:2 }}>WelcomeBack!!!</Text>
          <Text style={{ fontSize:26,color:'#040622',fontWeight:'bold'}}>Login</Text>
         </View>
         
        <View style={{ marginRight:40}}> 
         <Entypo name="circle-with-cross" size={30} color="red" onPress={() => {this.setState({show2:false})}}/>
       </View>      
    </View>                                     

        <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder="username/email" style={styles.input} />
                <AntDesign name="eyeo" size={20} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         
        
       <View style={ styles.Searchinput }>        
            <View style={ styles.Viewinput }>
                <TextInput placeholder='password' style={styles.input} />
                <EvilIcons name="lock" size={24} color="black" style={{ marginRight:10 }}/>
                </View>
            </View>         

     <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:10}}>  
        <View style={{ flexDirection:'row',marginLeft:18}}>
            <MaterialIcons name="radio-button-unchecked" size={22} color="white" />
            <Text style={{ fontSize:11}}>Remember me</Text>
         </View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ fontSize:11,marginRight:30 }}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        <View style={styles.userbtn}>         
           <TouchableOpacity activeOpacity={0.8}>
              <Text style={{ color:"#FFEAAA", fontSize:20,}}>Login</Text>
               </TouchableOpacity>
        </View> 

             <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5,marginRight:10 }}>
                <Text style={{ fontSize:17 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => {this.setState({ show:true })}}><Text style={{ fontSize:17,color:'#FF706D',padding:5 }}>Register</Text>
                </TouchableOpacity>              
            </View>
          </View>
        </View>   
      </Modal>    
         <View style={styles.borderBtn2}>
                 <TouchableOpacity activeOpacity={0.7} onPress={() => {this.setState({show2:true})}}>
              <Text style={{ color:"#FFDB69", fontSize:18,}}>Login</Text>  
             </TouchableOpacity>
             </View>            
        </View>
        
        </View>     
         
         <View style={{ marginBottom:15 }}>
             <Text style={{ fontSize:13,textAlign:'center',color:"#FFDB69"}}>All Right Reserved @2021</Text>
         </View>   
     
    </SafeAreaView>
 )
}
 }


const styles = StyleSheet.create({
    imageContainer:{
        flex:0.50,
        marginTop:35,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsContainer:{
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:30,
        marginTop:40,
        paddingTop:30
    },
    borderBtn:{
        borderColor:'#FFDB69',
        borderWidth:3,
        borderRadius:20,
        backgroundColor:"#FFDB69",
        justifyContent:'center',
        alignItems:'center',
        width:'75%',
        height:65,
        marginTop:25,
        marginHorizontal:50
    },
    borderBtn2:{
        borderColor:'#FFDB69',
        borderWidth:3,
        borderRadius:20,
        backgroundColor:"#040622",
        justifyContent:'center',
        alignItems:'center',
        width:'75%',
        height:65,
        marginTop:20,
        marginHorizontal:50
    },Searchinput:{
        flexDirection:'row',
        marginTop:30,
        borderWidth:1,
        borderBottomWidth:1,
        borderRadius:10,
        width:'85%',
        height:55,
        marginLeft:20
      },
      input:{
          borderBottomColor:'#199187',
          marginBottom:10,
          marginTop:20,
          marginLeft:10,
          fontSize:16,
          color:'#000',
          flex:1    
        },
        Viewinput:{
          height:50,
          flexDirection:'row',
          flex:1,
          alignItems:'center',
          borderRadius:10
        },
        userbtn:{
            borderWidth:1,
            height:60,
            width:'85%',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:15,
            backgroundColor:'#040622',   
            marginTop:25,
            marginLeft:20
           },     
})
export default WelcomeScreen;