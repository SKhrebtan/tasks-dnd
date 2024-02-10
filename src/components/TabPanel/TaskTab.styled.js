import styled from 'styled-components'
import { Tabs } from 'react-tabs';
export const StyledTabs = styled(Tabs)`
/* .react-tabs__tab-list{
    border-bottom: 1px solid rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.04);
}
.react-tabs__tab--selected{
    border-color: rgba(0, 0, 0, 0.38);    
    border-radius: 5px 5px -5px -5px;
}
.react-tabs__tab-list{
    display: flex;
}
.react-tabs__tab{
width: 87px;
font-weight: 700;
font-size: 12px;
color: rgba(0, 0, 0, 0.6);
height:24px;
display:flex;
flex-direction: row;
align-items: center;
gap:5px;
padding-left:7px;
} */

.span{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-left: 7.5px;
       gap:5px;
   height: 100%;
   width: 100%;
}
.react-tabs__tab-list{
    border-bottom: 1px solid rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.04);
}
.react-tabs__tab--selected{
    border-color: rgba(0, 0, 0, 0.38);    
    border-radius: 5px 5px -5px -5px;
    
     .span{
       
   &:before, &:after{
position: absolute;
  bottom: -1px;
  width: 5px;
  height: 5px;
  content: " ";
  }
&:after, &:before {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
&:before {
  border-bottom-right-radius: 3px;
  border-width: 0 1px 1px 0;
  left:-6px;
  bottom: 0.3px;
}
&:after {
  border-bottom-left-radius: 3px;
  border-width: 0 0 1px 1px;
  right:-6px;
  bottom: 0.3px;
}
&:before {
  box-shadow: 2px 2px 0 white;
}
&:after {
  box-shadow: -2px 2px 0 white;
}
}  

}
.react-tabs__tab-list{
    display: flex;
}
.react-tabs__tab{
width: 94px;
font-weight: 700;
font-size: 12px;
color: rgba(0, 0, 0, 0.6);
height:24px;
display:flex;
flex-direction: row;
align-items: center;
gap:5px;
padding:0;
  position: relative;
  z-index: 0;
}




`

// .react-tabs__tab-list{
//     border-bottom: 1px solid rgba(0, 0, 0, 0.38);
//     background-color: rgba(0, 0, 0, 0.04);
// }
// .react-tabs__tab--selected{
//     border-color: rgba(0, 0, 0, 0.38);    
//     border-radius: 5px 5px -5px -5px;
//     z-index: 5;
//     &::after, &::before, & > span:after, & > span:before{
//         content:'';
//     }

//     /* &:before, &:after {
//     background-color: rgba(0, 0, 0, 0.04);
//     z-index:1;
// } */
// & > span:after, & > span:before{
//     background-color: rgba(0, 0, 0, 0.04);
// }
// &:first-child span:before,
// &:last-child span:after{
// background-color:rgba(0, 0, 0, 0.04);
// }
// }
// .react-tabs__tab-list{
//     display: flex;
// }
// .span{
//     width: 100%;
//     height: 100%;
// }
// .react-tabs__tab{
// width: 87px;
// font-weight: 700;
// font-size: 12px;
// color: rgba(0, 0, 0, 0.6);
// height:24px;
// display:flex;
// flex-direction: row;
// align-items: center;
// gap:5px;
// padding: 0px;
 
// position: relative;
// &:last-child::after, &:last-child span:after,
// &:first-child::before, &:first-child span:before{
//     content:'';
// }
// &::before, &::after, & > span:before, & > span:after {
//     position: absolute;
//     bottom:0;
// }

// /* &:before, &:after {
//     background-color: rgba(0, 0, 0, 0.04);
//     width: 10px;
//     height: 10px;
// } */
// &:before {
//     left: -10px;
// }
// &:after {
//     right: -10px;
// }
// & > span:after, & > span:before{
//     width: 20px;
//     height: 20px;
//     border-radius: 10px;
//     border: 1px solid rgba(0, 0, 0, 0.6);
//     background-color: white;
//     z-index: 2;
// }
// & > span:after {
// right: -6px;
// bottom: -11px;
// }
// & > span:before{
//     left: -6px;
//     bottom: -11px;
// }
// }