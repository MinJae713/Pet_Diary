import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export const ButtonType = {
  DAY: "DAY",
  DUMY: "DUMY",
};

const DateSelectButton = ({
  buttonType,
  handleDateSelection,
  year,
  month,
  day,
  defaultString,
  firstDayOfWeek,
}) => {
  const date = `${year}년 ${month}월 ${day}일`;
  return (
    <Pressable
      onPressOut={() => {
        if (buttonType == ButtonType.DAY) handleDateSelection(date);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: "#FFFFFF",
        },
        pressed && {
          backgroundColor: buttonType == ButtonType.DAY ? "#E1D5C6" : "#FFFFFF",
        },
      ]}
    >
      <View key={day} style={styles.buttonStyle}>
        <Text style={{ color: firstDayOfWeek == 0 ? "red" : "black" }}>
          {buttonType == ButtonType.DAY ? day : defaultString}
        </Text>
      </View>
    </Pressable>
  );
};

DateSelectButton.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(ButtonType)),
  handleDateSelection: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  defaultString: PropTypes.string.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 54,
    height: 43,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#745757",
  },
});

export default DateSelectButton;
