// // SRP
// // there should never be more than one reason for a class to change
// // Bad Implementation!!!
// // class Employee {
// //     function calculateSalary() {

// //     }

// //     function printReport() {

// //     }

// //     function SomeOtherTask() {

// //     }
// // }

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// class ReportPrinter {
//   printReport(employee) {
//     console.log(`Printing ${employee.name}`);
//   }
// }

// const employee = new Employee("Nexus", 2000);
// const reportPrinter = new ReportPrinter();
// reportPrinter.printReport(employee);
// //

// violates SRP 

// import React, { useEffect, useState } from 'react';

// const UserProfile = () => {
//     // State 
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//     //   Fetching User
//   useEffect(() => {
//     // Fetch user data when component mounts
//     const fetchUser = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://api.example.com/user/profile');
//         if (!response.ok) {
//           throw new Error('Failed to fetch user');
//         }
//         const data = await response.json();
//         setUser(data);
//       } catch (err) {
//         setError(err.message || 'Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) return <p>Loading user...</p>;
//   if (error) return <p>Error: {error}</p>;

// //   UI 
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//     </div>
//   );
// };

// export default UserProfile;
