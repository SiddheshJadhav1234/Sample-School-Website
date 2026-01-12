import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Teacher from "./models/Teacher.js";
import Attendance from "./models/Attendance.js";
import Marks from "./models/Marks.js";
import Notice from "./models/Notice.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected for seeding");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await Student.deleteMany({});
    await Teacher.deleteMany({});
    await Attendance.deleteMany({});
    await Marks.deleteMany({});
    await Notice.deleteMany({});

    // Sample Students
    const students = [
      {
        name: "John Doe",
        email: "john.doe@student.com",
        rollNumber: "2024001",
        class: "10",
        section: "A",
        dateOfBirth: new Date("2008-05-15"),
        parentName: "Robert Doe",
        parentPhone: "9876543210",
        address: "123 Main St, City"
      },
      {
        name: "Jane Smith",
        email: "jane.smith@student.com",
        rollNumber: "2024002",
        class: "10",
        section: "A",
        dateOfBirth: new Date("2008-08-22"),
        parentName: "Michael Smith",
        parentPhone: "9876543211",
        address: "456 Oak Ave, City"
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@student.com",
        rollNumber: "2024003",
        class: "9",
        section: "B",
        dateOfBirth: new Date("2009-03-10"),
        parentName: "David Johnson",
        parentPhone: "9876543212",
        address: "789 Pine St, City"
      }
    ];

    const createdStudents = await Student.insertMany(students);
    console.log("Students seeded successfully");

    // Sample Teachers
    const teachers = [
      {
        name: "Dr. Sarah Wilson",
        email: "sarah.wilson@school.com",
        employeeId: "EMP001",
        subject: "Mathematics",
        classes: ["10", "9"],
        phone: "9876543220",
        qualification: "M.Sc Mathematics, B.Ed",
        experience: 8,
        salary: 50000
      },
      {
        name: "Mr. James Brown",
        email: "james.brown@school.com",
        employeeId: "EMP002",
        subject: "English",
        classes: ["10", "9", "8"],
        phone: "9876543221",
        qualification: "M.A English Literature, B.Ed",
        experience: 12,
        salary: 55000
      }
    ];

    await Teacher.insertMany(teachers);
    console.log("Teachers seeded successfully");

    // Sample Attendance (last 7 days)
    const attendanceData = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      createdStudents.forEach(student => {
        attendanceData.push({
          studentId: student._id,
          date: date,
          status: Math.random() > 0.1 ? 'present' : 'absent', // 90% attendance
          class: student.class,
          section: student.section,
          markedBy: "teacher1@school.com"
        });
      });
    }

    await Attendance.insertMany(attendanceData);
    console.log("Attendance seeded successfully");

    // Sample Marks
    const marksData = [];
    const subjects = ["Mathematics", "English", "Science", "History", "Geography"];
    const examTypes = ["unit-test", "mid-term", "final"];

    createdStudents.forEach(student => {
      subjects.forEach(subject => {
        examTypes.forEach(examType => {
          const maxMarks = 100;
          const obtainedMarks = Math.floor(Math.random() * 40) + 60; // 60-100 marks
          
          marksData.push({
            studentId: student._id,
            subject: subject,
            examType: examType,
            maxMarks: maxMarks,
            obtainedMarks: obtainedMarks,
            class: student.class,
            section: student.section,
            examDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date in last 30 days
            teacherId: "teacher1@school.com"
          });
        });
      });
    });

    await Marks.insertMany(marksData);
    console.log("Marks seeded successfully");

    // Sample Notices
    const notices = [
      {
        title: "Annual Sports Day",
        content: "Annual Sports Day will be held on December 15th, 2024. All students are requested to participate.",
        targetAudience: "all",
        priority: "high",
        publishedBy: "admin@school.com",
        expiryDate: new Date("2024-12-15")
      },
      {
        title: "Parent-Teacher Meeting",
        content: "Parent-Teacher meeting is scheduled for next Saturday. Please attend with your ward.",
        targetAudience: "parents",
        priority: "medium",
        publishedBy: "admin@school.com"
      },
      {
        title: "Holiday Notice",
        content: "School will remain closed on December 25th for Christmas celebration.",
        targetAudience: "all",
        priority: "medium",
        publishedBy: "admin@school.com"
      }
    ];

    await Notice.insertMany(notices);
    console.log("Notices seeded successfully");

    console.log("All sample data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

connectDB().then(() => {
  seedData();
});