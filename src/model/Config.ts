export interface Config {
  companyLogoUrl: string;
  profileDefaultUrl: string;
  profileSize: number;
  badgeSize: number;
  companyLogoSize: number;
  employeeName: Styles;
  title: Styles;
  additionalFields: Styles;
  sections: HtmlSection;
}

export interface HtmlSection {
  signatureLayout: string;
  profileImageSection: string;
  phoneNumberSection: string;
  calendarSection: string;
  addressSection: string;
  companyLogoSection: string;
  badgeSection: string;
}

export interface Styles {
  font: string;
  size: number;
  weight: 'bold' | 'normal';
  color: string;
  italic?: boolean;
}
