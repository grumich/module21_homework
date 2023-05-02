const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const result = {list: []};
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");

studentNode.forEach((element) => {
  const student = new Object();
  const nameNode = element.querySelector('name');
  const firstNode = element.querySelector('first');
  const secondNode = element.querySelector('second');
  const fullName = firstNode.textContent + " " + secondNode.textContent;
  const profNode = element.querySelector('prof');
  const ageNode = element.querySelector('age');
  const categoryAttr = nameNode.getAttribute('lang');
    
  student.name = fullName,
  student.age = Number(ageNode.textContent),
  student.prof = profNode.textContent,
  student.lang = categoryAttr
  
  result.list.push(student);
   
  
});


console.log(result);