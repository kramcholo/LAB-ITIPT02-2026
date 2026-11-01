import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonModal, IonButtons} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonModal, IonButtons],
})
export class HomePage {
  students = [
{
  id: 1,
  name: 'Juan Dela Cruz',
  gender: 'Male',
  course: 'BS Information Technology',
  major: 'Web Development',
  section: 'BSIT-3F',
  average: 88,
  year: 3,

},
{
  id: 2,
  name: 'Maria Santos',
  gender: 'Female',
  course: 'BS Information Technology',
  major: 'Mobile App Development',
  section: 'BSIT-3A',
  average: 92,
  year: 3
},
{
  id: 3,
  name: 'Carlos Reyes',
  gender: 'Male',
  course: 'BS Information Technology',
  major: 'Data Science',
  section: 'BSIT-3B',
  average: 85,
  year: 3
},
{ 
  id: 4,
  name: 'Angela Garcia',
  gender: 'Female',
  course: 'BS Information Technology',
  major: 'Cybersecurity',
  section: 'BSIT-3C',
  average: 88,
  year: 3
},
{ 
  id: 5,
  name: 'Mark Villanueva',
  gender: 'Male',
  course: 'BS Information Technology',
  major: 'Cloud Computing',
  section: 'BSIT-3D',
  average: 87,
  year: 3
},
{
  id: 6,
  name: 'Sophia Mendoza',
  gender: 'Female',
  course: 'BS Information Technology',
  major: 'Artificial Intelligence',
  section: 'BSIT-3E',
  average: 90,
  year: 3
},
{
  id: 7,
  name: 'Daniel Bautista',
  gender: 'Male',
  course: 'BS Information Technology',
  major: 'Game Development',
  section: 'BSIT-3F',
  average: 86,
  year: 3
},
{
  id: 8,
  name: 'Beatrice Navarro',
  gender: 'Female',
  course: 'BS Information Technology',
  major: 'UI/UX Design',
  section: 'BSIT-3F',
  average: 75,
  year: 3
}
];

isModalOpen = false;
selectedStudent: any = null;

showStudentDetailsModal(student: any) {
  this.selectedStudent = student;
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}
  
  constructor() {}
}
