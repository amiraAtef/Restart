import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = {
    verificationSquare:{
  backgroundColor: '#FDE9E5',
  width: responsiveWidth(15), height: responsiveHeight(10),
margin: "2%"

    },
    Center:{
        alignSelf: 'center',
        fontSize: responsiveFontSize(1.7)
    }
}