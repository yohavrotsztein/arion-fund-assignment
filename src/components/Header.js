// @mui
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import DatePickerComponent from './DatePicker';
// styles
import "../App.css"

const MyContainer = styled(Container)({
  paddingTop: "120px",
  marginLeft: "0px",
  paddingLeft: "30px",
});

const MyTitle = styled(Typography)({ 
  color: "#8F8F8F",
  paddingBottom: "20px",
});

const Header = () => {
  return (
    <MyContainer>
      <MyTitle variant="h5">Arion Fund Assignment <span class='by-me'>by Yohav Rotsztein</span></MyTitle>
      <DatePickerComponent />
    </MyContainer>
  );
}

export default Header;