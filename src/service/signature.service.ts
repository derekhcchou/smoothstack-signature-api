import { Config } from '../model/Config';
import { User } from '../model/User';
import { getConfig } from './config.service';
import { getUser } from './user.service';

export const getSignature = async (primaryEmail: string): Promise<string> => {
  const userData = await getUser(primaryEmail);
  if (userData) {
    const configData = await getConfig();
    return constructSignature(userData, configData);
  }
  return undefined;
};

const constructSignature = (userData: User, configData: Config): string => {
  const { companyLogoUrl, profileDefaultUrl } = configData;
  const {
    signatureLayout,
    profileImageSection,
    phoneNumberSection,
    calendarSection,
    addressSection,
    companyLogoSection,
    badgeSection,
  } = configData.sections;

  let updatedLayout = signatureLayout;

  const { profileUrl, firstName, lastName, title, phoneNumber, calendarUrl, mailingAddress, badgeUrls } =
    userData;

  const resolvedProfUrl = profileUrl || profileDefaultUrl;
  const profileImg = profileImageSection.replace('[INSERT PROFILE_URL]', resolvedProfUrl);
  updatedLayout = updatedLayout.replace('[INSERT PROFILE_IMG]', profileImg);
  updatedLayout = updatedLayout.replace('[INSERT EMPLOYEE_FIRST_NAME]', firstName);
  updatedLayout = updatedLayout.replace('[INSERT EMPLOYEE_LAST_NAME]', lastName);
  updatedLayout = updatedLayout.replace('[INSERT EMPLOYEE_TITLE]', title);

  const phone = phoneNumber
    ? phoneNumberSection.replace(
        '[INSERT PHONE_NUMBER]',
        phoneNumber.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      )
    : undefined;
  const calendar = calendarUrl
    ? calendarSection.replace('[INSERT CALENDAR_URL]', calendarUrl).replace('[INSERT CALENDAR_URL]', calendarUrl)
    : undefined;
  let address = mailingAddress ? addressSection.replace('[INSERT MAILING_ADDRESS]', mailingAddress) : '';
  const additionalFieldSection = [phone, calendar].join(' | ') + address ;
  updatedLayout = updatedLayout.replace('[INSERT ADDITIONAL_FIELDS]', additionalFieldSection);
  const companyLogo = companyLogoSection.replace('[INSERT COMPANY_LOGO_URL]', companyLogoUrl || '');
  updatedLayout = updatedLayout.replace('[INSERT COMPANY_LOGO_IMG]', companyLogo);
  let badges = '';
  badgeUrls?.forEach((b) => {
    badges += badgeSection.replace('[INSERT BADGE_URL]', b);
  });
  updatedLayout = updatedLayout.replace('[INSERT BADGE_IMG]', badges);
  return updatedLayout;
};
