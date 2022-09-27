// Làm module quản lý sinh viên của trường đại học.
// Mỗi sinh viên có các thông tin sau: id, tên, tuổi, giới tính, điểm vào trường, điểm trung bình
// yêu cầu:
// - Phần mềm hoạt động và thao tác dựa trên terminal: hiển thị thông tin, nhập thông tin …v..v (gợi ý: có thể sử dụng thư viện readline-sync)
// - Hiển thị menu các chức năng, khi thực hiện xong 1 chức năng tiếp tục hiển thị menu để người dùng tiện sử dụng
// - Dữ liệu lưu lại được để những lần sau tiếp tục sử dụng (gợi ý có thể lưu dữ liệu dưới dạng file txt => sử dụng thư viện fs có sẵn của nodejs)
// - Phần mềm có các chức năng sau :
// + Hiển thị tất cả học sinh
// + Thêm mới học sinh
// + Xoá 1 học sinh theo id
// +  Xoá nhiều học sinh theo id
// + Edit thông tin học sinh
// + Tìm kiếm học sinh theo tên
// + Tìm kiếm học sinh thủ khoa vào trường
// + Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)
// + Sắp xếp học sinh theo bảng chữ cái
// + Sắp xếp học sinh theo điểm trung bình tăng dần
// +  Sắp xếp học sinh theo tuổi tăng dần
// +  Exit: thoát khỏi chương trình và không hiện menu nữa

var readlineSync = require('readline-sync');
var fs = require('fs');
const shortid = require('shortid');
var _ = require('lodash');

const showMenu = () => {
  console.log('            Student Manger             ');
  console.log('=======================================');
  console.log('1. Show all students');
  console.log('2. Add new student');
  console.log('3. Delete student');
  console.log('4. Delete multi students');
  console.log('5. Edit student');
  console.log('6. Find by name');
  console.log('7. Find by valedictorian');
  console.log('8. Show list studen has avg < 4');
  console.log('9. Sort by name');
  console.log('10. Sort by avg');
  console.log('11. Sort by age');
  console.log('12. Exit');
};

showMenu();
let studentStr = '';
let student = [];
var choise = parseInt(readlineSync.question('Your choise?'));
studentStr = fs.readFileSync('./data.txt', 'utf-8');
student = JSON.parse(studentStr);
// console.log(student);
let indexSex = ['male', 'female'];

const saveFile = () => {
  studentStr = JSON.stringify(student);
  fs.writeFileSync('./data.txt', studentStr, 'utf-8');
};
const addNewStudent = () => {
  let name = readlineSync.question('Insert name?');
  let age = parseInt(readlineSync.question('Insert age?'));
  let sex = readlineSync.keyInSelect(indexSex, 'sex? male/female: 0,1');
  if (sex != 0 || sex != 1) {
    console.log('Pleas insert valid sex');
    endFunction();
    return;
  }
  let id = shortid.generate();
  let score = parseFloat(readlineSync.question('Score?'));
  let avg = parseFloat(readlineSync.question('Avg?'));

  student.push({
    name,
    age,
    sex: indexSex[sex],
    id,
    score,
    avg,
  });
  saveFile();
  choise = 0;
};

const deleteStudent = () => {
  let idDelete = readlineSync.question('Insert id you need delete ?');
  //   let idDeleteIndex = student.findIndex((item) => {
  //     return (item.id = idDelete);
  //   });
  //   student.splice(idDeleteIndex, 1);

  let newArray = _.filter(student, (item) => {
    return item.id !== idDelete;
  });
  student = newArray;
  endFunction();
};
const endFunction = () => {
  saveFile();
  choise = 0;
};
const deleteMultiStudent = () => {
  let idDelete = readlineSync.question(
    'Insert id you need delete use , operator ?',
  );
  idDelete = idDelete.split(',');
  //   for (let i = 0; i < idDelete.length; i++) {
  //     student.forEach((item, index) => {
  //       if (item.id === idDelete[i]) {
  //         student.splice(index, 1);
  //       }
  //     });
  //   }
  _.remove(student, (item) => {
    return _.indexOf(idDelete, item.id) !== -1;
  });

  console.log(student);

  endFunction();
};
const editStudent = () => {
  let idEdit = readlineSync.question('Insert id you need edit ?');
  let name = readlineSync.question('Insert name?');
  let age = parseInt(readlineSync.question('Insert age?'));
  let sex = readlineSync.keyInSelect(indexSex, 'sex? male/female: 0,1');
  let id = idEdit;
  let score = parseFloat(readlineSync.question('Score?'));
  let avg = parseFloat(readlineSync.question('Avg?'));
  let idEditIndex = student.findIndex((item) => {
    return (item.id = idEdit);
  });
  let studentEdit = {
    name,
    age,
    sex: indexSex[sex],
    id,
    score,
    avg,
  };
  student.splice(idEditIndex, 1, studentEdit);
  endFunction();
};
const findStudentByName = () => {
  let nameInsert = readlineSync.question('Insert name you need find?');
  const result = _.find(student, (item) => item.name === nameInsert);
  console.log(result);
  endFunction();
};
const findStudentByValedictorian = () => {
  student.sort((a, b) => {
    return b.score - a.score;
  });
  console.log(student[0]);

  endFunction();
};
const showListStudentWarn = () => {
  let listStudentWarn = student.filter((item) => {
    return item.avg < 4;
  });
  console.log(listStudentWarn);
  endFunction();
};
const sortByName = () => {
  student.sort((a, b) => {
    return a.name - b.name;
  });
  console.log(student);
  endFunction();
};
const sortByAvg = () => {
  student.sort((a, b) => {
    return a.avg - b.avg;
  });
  console.log(student);
  endFunction();
};
const sortByAge = () => {
  student.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(student);
  endFunction();
};

while (true) {
  switch (choise) {
    case 0:
      showMenu();
      choise = parseInt(readlineSync.question('Yours choise?'));
      break;
    case 1:
      console.log(student);
      choise = 0;
      break;
    case 2:
      addNewStudent();
      break;
    case 3:
      deleteStudent();
      break;
    case 4:
      deleteMultiStudent();
      break;
    case 5:
      editStudent();
      break;
    case 6:
      findStudentByName();
      break;
    case 7:
      findStudentByValedictorian();
      break;
    case 8:
      showListStudentWarn();
      break;
    case 9:
      sortByName();
      break;
    case 10:
      sortByAvg();
      break;
    case 11:
      sortByAge();
      break;
    case 12:
      process.exit();
    default:
      console.log('You have to choise [1 - 12]');
      choise = 0;
      break;
  }
}
