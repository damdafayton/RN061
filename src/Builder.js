import React from 'react';

import {ScrollView, Text as TextRN, View} from 'react-native';
import {
  Button,
  Accordion,
  Avatar,
  TextArea,
  BarCharts,
  BasicAreaChart,
  BottomTab,
  Breadcrumbs,
  CalendarBasic,
  CalendarEvent,
  CalendarInput,
  Cards,
  CheckBox,
  Chips,
  ContextMenu,
  DataTable,
  DateRangeCalender,
  DropDown,
  FormBottomBar,
  FormHeader,
  FullCalendarClass,
  GradientBottomTab,
  LinearGradientComponent,
  Header,
  Input,
  ListItem,
  SideMenuList,
  Map,
  MobileCarousel,
  SideMenu,
  SystemMsg,
  NavBar,
  Pagination,
  PieCharts,
  Popover,
  PopoverConfirmCompt,
  PopoverInputCompt,
  ProgressIndicator,
  RadioButton,
  SegmentedControl,
  SplineAreaChart,
  Steps,
  TableBarChart,
  Text,
  TextButton,
  Toast,
  Toggle,
  View as BuilderView,
} from '@builder/component-library';
import * as BuilderComponents from '@builder/component-library';
console.log({BuilderComponents});
export function Builder() {
  return (
    <View>
      <TextRN>HELLO FROM BUILDER</TextRN>

      <Button text="hi from builder button" />
      <Avatar />
      <CalendarInput />
      <CalendarBasic />
    </View>
  );
}
