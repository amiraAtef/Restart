import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');
console.log(height)
export const GlobalStyles={

Row:{ flex: 1, flexDirection: 'row'},
Row_alignItems_baseline:{ flex: 1, flexDirection: 'row',alignItems: 'baseline'},
Row_JustifyContent_Center:{ flex: 1, flexDirection: 'row', justifyContent:'center'},
Row_JustifyContent_spaceBetween:{ flex: 1, flexDirection: 'row',justifyContent: "space-between" },

button: {
  alignItems: 'center',
  backgroundColor: '#EA8685',
color:'white',
borderRadius:10,
height:45 ,
},
ScrollHeight:{
},
buttonText:{
    color: "white",
    fontSize: 18,
    padding:"3%",
    fontFamily: 'Oxygen-Regular',
 
},
title:{
   fontSize: 16, fontWeight: "bold", color: "black" ,
   fontFamily: 'Oxygen-bold',

},
description:{
  fontSize: 10,
   fontFamily: 'Oxygen-Regular',
  color: "white"
},
subtitle:{
  fontSize: 12,
  color: "white",
  fontFamily: 'Oxygen-Regular',
},
h2:{
  fontSize: 18,
  // color: "black" ,
  fontWeight: 'bold',
   fontFamily: 'Oxygen-Regular',

},
h3:{
  fontSize: 16,
   fontFamily: 'Oxygen-Regular',
  // color: "black" 
},
h3Bold:{
  fontSize: 16,
  color: "black" ,
   fontFamily: 'Oxygen-Regular',
  fontWeight: 'bold',

},
lableStyle:{
   fontFamily: 'Oxygen-Regular',
  fontSize: 16,fontWeight: "bold",color:'black'},
error:{
    fontSize:12, fontWeight: 'bold'
}
,
Top_AlginmentCMP:{padding:"2%",
fontFamily: 'Oxygen-Regular',},
H1:{fontSize: 30,color:"#EA8685",fontWeight: "bold", marginTop:"10%",
fontFamily: 'Oxygen-Regular',},
H2:{fontSize: 18,color:'black',
fontFamily: 'Oxygen-Regular',},
H3:{fontSize: 16,fontWeight: "bold",  color: "black",
fontFamily: 'Oxygen-Regular',},
Maincolor:{color: "#EA8685"}

}