let todoList = ["Go to school at 7am", "Read book at 12pm"];
while (true) {
  let userInput = prompt("Nhập vào C/R/U/D/E").toUpperCase();
  if (userInput === "C") {
    let newTask = prompt("Nhập vào nội dung công việc");
    todoList.push(newTask);
    console.log("Danh sách công việc sau khi thêm:");
    console.log(todoList);
  } else if (userInput === "R") {
    console.log("Danh sách công việc:");
    console.log(todoList);
  } else if (userInput === "U") {
    let index = prompt("Nhập vào vị trí công việc muốn cập nhật:") - 1;
    if (index >= 0 && index < todoList.length) {
      let updateTask = prompt("Nhập nội dung muốn cập nhật:");
      todoList[index] = updateTask;
      console.log("Danh sách công việc sau khi cập nhận:");
      console.log(todoList);
    } else {
      console.log("Vị trí công việc không hợp lệ!");
    }
  } else if (userInput === "D") {
    let index = prompt("Nhập vị trí công việc muốn xoá:") - 1;
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
      console.log("Danh sách công việc sau khi xoá:");
      console.log(todoList);
    } else {
      console.log("Vị trí công việc không hợp lệ!");
    }
  } else if (userInput === "E") {
    console.log("Ứng dụng Todo List đã kết thúc.");
    break;
  } else {
    console.log("Lựa chọn không hợp lệ!");
  }
}
