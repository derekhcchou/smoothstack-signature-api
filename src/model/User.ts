
export interface User {
    primaryEmail: string;
    firstName: string;
    lastName: string;
    middleInitial?: string;
    title: string;
    phoneNumber: string;
    profileUrl?: string;
    teamsProfileUrl?: string;
    mailingAddress?: string;
    calendarUrl?: string;
    badgeUrls?: string[];
}