import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const[OuputNumber, SetOutputNumber] = useState("0");
  const[numarr, setnumarr] = useState("");
  const[currentState, setcurrentState] = useState(0);
  const[Operators, setoperator] = useState("");
  const[previousState, setpreviousState] = useState(0);


  

  const addnums = (vall) =>{
    setnumarr(numarr+vall);
    SetOutputNumber(numarr);
  }

  const applyoperator = (op) =>{
    setpreviousState(Number(OuputNumber));
    SetOutputNumber("");
    setnumarr("");
    setoperator(op);
  }

  const reset = () =>{
    SetOutputNumber("0")
    setnumarr("")
    setoperator("")
    setcurrentState(0)
    setpreviousState(0)
  }

  const setoff =() =>{
    SetOutputNumber("")
    setnumarr("")
    setoperator("")
    setcurrentState(0)
    setpreviousState(0)
  }


  const result = () =>{
    setcurrentState(Number(OuputNumber));
    setnumarr("");
    SetOutputNumber("");
    if(Operators == "/"){
      var ans = previousState/currentState
      var ans2 = ans.toString();
      SetOutputNumber(ans2);
    }
    if(Operators == "x"){
       ans = previousState*currentState
       ans2 = ans.toString();
      SetOutputNumber(ans2);
    }
    if(Operators == "-"){
       ans = previousState-currentState
       ans2 = ans.toString();
      SetOutputNumber(ans2);
    }
    if(Operators == "+"){
       ans = previousState+currentState
       ans2 = ans.toString();
      SetOutputNumber(ans2);
    }

    

  }

  return (
    <View style={styles.container}>
    
    <View style = {styles.numView}>
    <TextInput style = {styles.numstyle} value = {OuputNumber}/>
    <View style = {styles.rowStyle}>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress ={()=>reset()}>
    <Text style = {styles.buttonStyle}>AC</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress ={()=>setoff()}>
    <Text style = {styles.buttonStyle}>off</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}}>
    <Text style = {styles.buttonStyle2}>%</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>applyoperator("/")}>
    <Text style = {styles.buttonStyle3}>/</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.rowStyle}>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('7')}>
    <Text style = {styles.buttonStyle4}>7</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('8')}>
    <Text style = {styles.buttonStyle4}>8</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('9')}>
    <Text style = {styles.buttonStyle4}>9</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>applyoperator("x")}>
    <Text style = {styles.buttonStyle3}>x</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.rowStyle}>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('4')}>
    <Text style = {styles.buttonStyle4}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('5')}>
    <Text style = {styles.buttonStyle4}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('6')}>
    <Text style = {styles.buttonStyle4}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>applyoperator("-")}>
    <Text style = {styles.buttonStyle3}>-</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.rowStyle}>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('1')}>
    <Text style = {styles.buttonStyle4}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('2')}>
    <Text style = {styles.buttonStyle4}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('3')}>
    <Text style = {styles.buttonStyle4}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>applyoperator("+")}>
    <Text style = {styles.buttonStyle3}>+</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.rowStyle2}>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>addnums('0')}>
    <Text style = {styles.buttonStyle5}>0</Text>
    </TouchableOpacity>

    <TouchableOpacity style = {{alignItems : 'center'}}>
    <Text style = {styles.buttonStyle7}>.</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {{alignItems : 'center'}} onPress = {()=>result()}>
    <Text style = {styles.buttonStyle8}>=</Text>
    </TouchableOpacity>
    </View>
    
    


    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  buttonStyle5 : {
    width : 150,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'dimgrey',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    paddingStart : 20,
    color : 'white'
  },

  buttonStyle7 : {
    width : 60,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'dimgrey',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    textAlign : 'center',
    flex : 0.25,
    color: 'white'
     },

  buttonStyle8 : {
    width : 60,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'orange',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    textAlign : 'center',
    color : 'white'
  },


  rowStyle:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 15,
    
  },
  rowStyle2:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    flex: 1,
    marginTop : 15,
    
  },
  container: {
    backgroundColor : 'black',
    height : '100%',
    width : '100%'
    
  },
  numstyle:{
    color : 'white',
    marginTop: 100,
    textAlign: 'right',
    fontSize : 50
  },
  numView:{
    width : '95%',
    padding : 10,
  },

  buttonStyle : {
    alignSelf : 'center',
    justifyContent : 'center',
    borderRadius : 50,
    backgroundColor : 'lightgrey',
    padding : 10,
    textAlign : 'center',
    fontSize : 30,
  },

  buttonStyle2 : {
    width : 60,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'lightgrey',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    textAlign : 'center'
  },

  buttonStyle3 : {
    width : 60,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'orange',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    textAlign : 'center',
    color : 'white',
  },

buttonStyle4 : {
    width : 60,
    alignSelf :'center',
    borderRadius : 50,
    backgroundColor :'dimgrey',
    justifyContent : 'center',
    padding :10,
    fontSize : 30,
    textAlign : 'center',
    color : 'white',
  },
});
