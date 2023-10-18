let student1 = {
    firstName: 'John',
    gender: 'male',
    english: 'English'
};

let student2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

const getInfo = ({firstName ="Quan", degree ="N/A" }) => {
    const student ={
        firstName,
        degree
    }
    console.log (student)
}

getInfo(student1);
getInfo(student2);
