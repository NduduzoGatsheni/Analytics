import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  lecturers = [
    { staffNo: '2245', fullName: 'Nduduzo Ndlovu', email: 'nduduzo@mut.ac.za',attendance: 75 },
    { staffNo: '42354', fullName: 'John Doe', email: 'nduduzo@mut.ac.za',attendance: 50 },
    { staffNo: '54372', fullName: 'Jane Smith', email: 'ayanda@mut.ac.za' ,attendance: 25},
  ];

  constructor() {}

  ngOnInit() {
    this.createCharts();
  }

  createCharts() {
    this.createLecturerAttendanceChart();
    this.createStudentAttendanceChart();
  }

  createLecturerAttendanceChart() {
    new Chart('lecturerAttendance', {
      type: 'bar',
      data: {
        labels: ['ICT', 'Management', 'Engineering', 'Accounting', 'Marketing'],
        datasets: [{
          label: 'Lecturer Attendance',
          data: [55, 45, 70, 61, 34],
          backgroundColor: '#FED145'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createStudentAttendanceChart() {
    new Chart('studentAttendance', {
      type: 'pie',
      data: {
        labels: ['Attending', 'Not Attending'],
        datasets: [{
          data: [70, 30],
          backgroundColor: ['#FED145', 'rgba(255, 99, 132, 0.8)']
        }]
      }
    });
  }
}