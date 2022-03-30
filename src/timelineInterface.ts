interface DateObj {
  seconds: number;
  minutes: number;
  hours: number;
  mday: number;
  wday: number;
  mon: number;
  year: number;
  yday: number;
  weekday: string;
  month: string;
  timestamp: number;
}

interface WeekDay {
  dayno: number;
  fullname: string;
  shortname: string;
}

interface Course {
  id: number;
  fullname: string;
  shortname: string;
  idnumber: string;
  summary: string;
  summaryformat: number;
  startdate: number;
  enddate: number;
  visible: boolean;
  fullnamedisplay: string;
  viewurl: string;
  courseimage: string;
  progress: number;
  hasprogress: boolean;
  isfavourite: boolean;
  hidden: boolean;
  showshortname: boolean;
  coursecategory: string;
}

interface Event {
  id: number;
  name: string;
  description: string;
  descriptionformat: number;
  location: string;
  categoryid: any;
  groupid: any;
  userid: number;
  repeatid: any;
  eventcount: any;
  modulename: string;
  instance: number;
  eventtype: string;
  timestart: number;
  timeduration: number;
  timesort: number;
  visible: number;
  timemodified: number;
  icon: {
    key: string;
    component: string;
    alttext: string;
  };
  course: Course;
  canedit: boolean;
  candelete: boolean;
  deleteurl: string;
  editurl: string;
  viewurl: string;
  formattedtime: string;
  isactionevent: boolean;
  iscourseevent: boolean;
  iscategoryevent: boolean;
  groupname: any;
  normalisedeventtype: string;
  normalisedeventtypetext: "Course event";
  url: string;
  islastday: boolean;
  popupname: string;
  draggable: boolean;
}

interface Day {
  seconds: number;
  minutes: number;
  hours: number;
  mday: number;
  wday: number;
  year: number;
  yday: number;
  istoday: boolean;
  isweekend: boolean;
  timestamp: number;
  neweventtimestamp: number;
  viewdaylink: string;
  viewdaylinktitle: string;
  events: Event[];
  hasevents: boolean;
  calendareventtypes: string[];
  previousperiod: number;
  nextperiod: number;
  navigation: string;
  haslastdayofevent: boolean;
  popovertitle: string;
}

interface Week {
  postpadding: any[];
  padding: number[];
  days: Day[];
}

export default interface Timeline {
  categoryid: number;
  courseid: number;
  date: DateObj;
  daynames: WeekDay[];
  defaulteventcontext: number;
  includenavigation: boolean;
  initialeventsloaded: boolean;
  larrow: string;
  nextperiod: DateObj;
  nextperiodlink: string;
  nextperiodname: string;
  previousperiod: DateObj;
  previousperiodlink: string;
  previousperiodname: string;
  rarrow: string;
  url: string;
  view: string;
  weeks: Week[];
}
