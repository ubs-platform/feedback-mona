export interface IUserMessageDto {
  _id?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  fileUrls?: string[];
  type?: string;
  phoneNumber?: String;
  summary?: String;
  creationDate?: Date;
  status?: 'WAITING' | 'RESOLVED';
  reply?: string;
  relatedUrl?: string;
}
