const data1 = document.getElementById("data1");
data1.focus();
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const select = document.getElementById("selector");

for (let i = 0; i <= 100; i++) {
  if (i == 0) {
    let text = document.createTextNode("");
    let option = document.createElement("option");
    option.appendChild(text);
    select.appendChild(option);
  } else {
    text = document.createTextNode(Number(i));
    option = document.createElement("option");
    option.appendChild(text);
    select.appendChild(option);
  }
}
function find_date(){
  if (data1.value != "" && data2.value != "") {
    const data1milli = new Date(data1.value).getTime();
    const data2milli = new Date(data2.value).getTime();
    const data3milli = new Date();
    const differenza = data2milli - data1milli;
    const percentuale = Number(select.value) / 100;
    const output = data1milli + differenza * percentuale;
    data3milli.setTime(output);
    let endlinedate = 0;

    if (data3milli.getMonth() + 1 < 10) {
      if (data3milli.getDate() < 10) {
        endlinedate =
          "0" +
          data3milli.getDate().toString() +
          "/0" +
          (data3milli.getMonth() + 1).toString() +
          "/" +
          data3milli.getFullYear().toString();
      } else {
        endlinedate =
          data3milli.getDate().toString() +
          "/0" +
          (data3milli.getMonth() + 1).toString() +
          "/" +
          data3milli.getFullYear().toString();
      }
    } else {
      if (data3milli.getDate() < 10) {
        endlinedate =
          "0" +
          data3milli.getDate().toString() +
          "/" +
          (data3milli.getMonth() + 1).toString() +
          "/" +
          data3milli.getFullYear().toString();
      } else {
        endlinedate =
          data3milli.getDate().toString() +
          "/" +
          (data3milli.getMonth() + 1).toString() +
          "/" +
          data3milli.getFullYear().toString();
      }
    }

    data3.value = endlinedate;
  } else {
    alert("Compile both datepicker and choose percentage");
    data3.value = select.value = "";
  }
}

select.addEventListener('change', find_date);
