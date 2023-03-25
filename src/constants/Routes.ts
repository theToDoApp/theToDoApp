export interface ScreenDetails {
  title: string;
  icon: string;
}

const Routes: ScreenDetails[] = [
  {
    title: 'Dashboard',
    icon: 'grid-outline',
  },
  {
    title: 'Tasks',
    icon: 'ios-reader-outline',
  },
  {
    title: 'Projects',
    icon: 'file-tray-outline',
  },
  {
    title: 'Calender',
    icon: 'calendar-outline',
  },
];

export {Routes};
