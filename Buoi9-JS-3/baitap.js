// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”
// thuật toán:
// chuyển về viết thường
// tìm những ký tự đầu tiên và viết hoa nó
const normalizeName = (name) => {
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (i === 0 || name.charAt(i - 1) === ' ') {
      console.log(
        `lần ${i + 1} `,
        name.slice(0, i),
        name.charAt(i).toUpperCase(),
        name.slice(i + 1),
      );
      name =
        name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
    }
  }
  return name;
};
console.log(normalizeName('NguyeN THI tho tHu hA'));
// nguyen thi tho thu ha
