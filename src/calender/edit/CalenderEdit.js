import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "../GridCalender";

export default function CalendarEdit({ navigation }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState("");
  const [todos, setTodos] = useState(Array(5).fill(""));
  const [updatedTodos, setUpdatedTodos] = useState([]);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1); // 해당 연도의 1월 1일로 자동 선택
    setSelectedDate("");
    setTodos(Array(5).fill(""));
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
    setSelectedDate("");
    setTodos(Array(5).fill(""));
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setUpdatedTodos(Array(5).fill(""));
  };

  const handleTodoChange = (text, index) => {
    const updatedTodos = [...updatedTodos];
    updatedTodos[index] = text;
    setUpdatedTodos(updatedTodos);
  };
  // 조회창 전환
  const navigateBackScreen = () => {
    navigation.navigate("Retrieve");
  };
  const addTodo = () => {
    console.log("할 일 추가s");
  };
  const saveTodo = () => {
    console.log("저장s");
  };

  const renderTodoInputs = () => {
    const todoInputs = todos.map((todo, index) => (
      <Text key={index} style={styles.todoTexts}>
        할일 {index + 1} {updatedTodos[index] || todo}
      </Text>
    ));
    return (
      <View style={{ flex: 5 }}>
        <Text style={styles.todoTitle}>할 일들</Text>
        {todoInputs}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calender</Text>
      </View>
      <View style={styles.calView}>
        <GridCalender
          selectedDate={selectedDate}
          year={year}
          month={month}
          handleDateSelection={handleDateSelection}
        />
      </View>
      <View style={styles.contentView}>
        <ContentHeader
          selectedDate={selectedDate}
          backButtonOperate={navigateBackScreen}
          addButtonOperate={addTodo}
          saveButtonOperate={saveTodo}
        />
        {renderTodoInputs()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 40,
    color: "#745757",
  },
  header: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calView: {
    flex: 3,
    borderWidth: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  contentView: {
    flex: 5,
    borderWidth: 1,
  },
  todoTitle: {
    fontWeight: "bold",
    color: "#745757",
    marginBottom: 20,
  },
  todoTexts: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#745757",
  },
});