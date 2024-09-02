import { Component } from '@angular/core';

interface GroupMarks {
  groupName: string;
  marks: number[];
}

@Component({
  selector: 'app-marker',
  templateUrl: './marker.page.html',
  styleUrls: ['./marker.page.scss'],
})
export class MarkerPage {
  groups: string[] = ['marker 1', 'marker 2', 'marker 3', 'marker 4','marker 5', 'marker 6', 'marker 7', 'marker 8', 'marker 9', 'marker 10'];
  markers: string[] = ['Group A', 'Group B', 'Group C'];

  marks: GroupMarks[][] = [
    [
      { groupName: 'marker 1', marks: [50, 70, 80] },
      { groupName: 'marker 2', marks: [70, 67, 69] },
      { groupName: 'marker 3', marks: [48, 61, 55] },
      { groupName: 'marker 4', marks: [36, 44, 57] },
      { groupName: 'marker 5', marks: [50, 70, 80] },
      { groupName: 'marker 6', marks: [70, 67, 69] },
      { groupName: 'marker 7', marks: [48, 61, 55] },
      { groupName: 'marker 8', marks: [36, 44, 57] },
      { groupName: 'marker 9', marks: [50, 70, 80] },
      { groupName: 'marker 10', marks: [70, 67, 69] }
    ],
    [
      { groupName: 'marker 1', marks: [55, 75, 85] },
      { groupName: 'marker 2', marks: [65, 72, 68] },
      { groupName: 'marker 3', marks: [52, 58, 60] },
      { groupName: 'marker 4', marks: [40, 48, 55] },
      { groupName: 'marker 5', marks: [50, 70, 80] },
      { groupName: 'marker 6', marks: [70, 67, 69] },
      { groupName: 'marker 7', marks: [48, 61, 55] },
      { groupName: 'marker 8', marks: [36, 44, 57] },
      { groupName: 'marker 9', marks: [50, 70, 80] },
      { groupName: 'marker 10', marks: [70, 67, 69] }
    ],
    [
      { groupName: 'marker 1', marks: [60, 65, 75] },
      { groupName: 'marker 2', marks: [68, 70, 72] },
      { groupName: 'marker 3', marks: [50, 55, 58] },
      { groupName: 'marker 4', marks: [42, 46, 52] },
      { groupName: 'marker 5', marks: [50, 70, 80] },
      { groupName: 'marker 6', marks: [70, 67, 69] },
      { groupName: 'marker 7', marks: [48, 61, 55] },
      { groupName: 'marker 8', marks: [36, 44, 57] },
      { groupName: 'marker 9', marks: [50, 70, 80] },
      { groupName: 'marker 10', marks: [70, 67, 69] }
    ],
  ];

  constructor() {}

  calculateAverage(markerMarks: GroupMarks[]): number {
    const allMarks: number[] = markerMarks.reduce((acc: number[], curr: GroupMarks) => acc.concat(curr.marks), []);
    const sum: number = allMarks.reduce((acc: number, curr: number) => acc + curr, 0);
    return Math.round(sum / allMarks.length);
  }
}
