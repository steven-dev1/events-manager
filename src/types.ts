export type EventFormData = {
  title: string;
  date: string;
  starttime: string;
  endtime: string;
  location: string;
  capacity: number;
  description: string;
};

export interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  starttime: string;
  endtime: string;
  location: string;
  capacity: number;
}