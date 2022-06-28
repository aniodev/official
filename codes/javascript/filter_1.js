const data = [

    {
        name: "ayesha", city: "ahmedabad", occupation: "teacher", age: 32, mobile: "vivo", gender: "female",
    },
    {
        name: "arzoo", city: "rajkot", occupation: "lawyer", age: 33, mobile: "oppo", gender: "female",
    },
    {
        name: "arush", city: "mumbai", occupation: "student", age: 22, mobile: "vivo", gender: "male",
    },
    {
        name: "gaurav", city: "banglore", occupation: "student", age: 21, mobile: "realme", gender: "male",
    },
    {
        name: "janvi", city: "ahmedabad", occupation: "student", age: 22, mobile: "vivo", gender: "female",
    },
    {
        name: "ramesh", city: "rajkot", occupation: "lawyer", age: 33, mobile: "nokia", gender: "male",
    },
    {
        name: "ishrat", city: "surat", occupation: "student", age: 21, mobile: "realme", gender: "female",
    },
    {
        name: "manish", city: "mumbai", occupation: "doctor", age: 33, mobile: "iphone", gender: "male",
    },
    {
        name: "surya", city: "banglore", occupation: "teacher", age: 32, mobile: "iphone", gender: "male",
    },
    {
        name: "anamika", city: "surat", occupation: "nurse", age: 25, mobile: "oppo", gender: "female",
    },
    {
        name: "raju", city: "ahmedabad", occupation: "teacher", age: 25, mobile: "vivo", gender: "male",
    },
    {
        name: "nafisa", city: "mumbai", occupation: "doctor", age: 29, mobile: "nokia", gender: "female",
    }

];

console.log("================= Data Filter ================")

data.map((a) => {
    console.log("Name : ", a.name);
    console.log("Age : ", a.age);
    console.log("City : ", a.city);
    console.log("Occupation : ", a.occupation)
    console.log("Mobile : ", a.mobile);
    console.log("Gender : ", a.gender)
    console.log("=============================")
})

console.log("============== Only Female Filtered Data =========")

data.map((a) => {
    if (a.gender === 'female') {
        console.log("Name : ", a.name);
        console.log("Age : ", a.age);
        console.log("City : ", a.city);
        console.log("Occupation : ", a.occupation)
        console.log("Mobile : ", a.mobile);
        console.log("Gender : ", a.gender)
        console.log("=============================")
    }
})

console.log("=================== Only Vivo Mobile Filtered Data =====")

data.map((a) => {
    if (a.mobile === "vivo") {
        console.log("Name : ", a.name);
        console.log("Age : ", a.age);
        console.log("City : ", a.city);
        console.log("Occupation : ", a.occupation)
        console.log("Mobile : ", a.mobile);
        console.log("Gender : ", a.gender)
        console.log("=============================")
    }
})

console.log("============ Age more than 30 Filtered Data ======= ")

data.map((a) => {
    if (a.age > 30) {
        console.log("Name : ", a.name);
        console.log("Age : ", a.age);
        console.log("City : ", a.city);
        console.log("Occupation : ", a.occupation)
        console.log("Mobile : ", a.mobile);
        console.log("Gender : ", a.gender)
        console.log("=============================")

    }
})


console.log("============ Only Banglore City Filtered Data ===");


data.map((a) => {
    if (a.city === 'banglore') {
        console.log("Name : ", a.name);
        console.log("Age : ", a.age);
        console.log("City : ", a.city);
        console.log("Occupation : ", a.occupation)
        console.log("Mobile : ", a.mobile);
        console.log("Gender : ", a.gender)
        console.log("=============================")
    }
})
