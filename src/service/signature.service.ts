import { getDynamoClient } from '@libs/dynamo';

export const getSignature = async (primaryEmail: string): Promise<string> => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: 'smoothstack-signature-user-table',
    Key: {
      primaryEmail,
    },
  };
  const data = await dynamoClient.get(params).promise();
  console.log(data);
  const { firstName, lastName, middleName, title, phoneNumber, profileUrl } = data.Item;
  return `<div style="max-width:600px; direction: ltr; " class="main_html date__2017_03_18___15_48 ui-sortable"> <div class="wisestamp_app main_sig ui-sortable-handle" id="tp7_stripped" style="max-width: 470px;"> <table border="0" cellspacing="0" cellpadding="0" style="width:470px;"> <tbody> <tr valign="top"> <td> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr valign="top"> <td style="text-align: initial; vertical-align: top; padding-right: 10px"> <img width="65" height="45" style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius: 0;" src="https://s3.amazonaws.com/ucwebapp.wisestamp.com/c5983973-cbb6-4140-8fb8-1f07d9fd618a/newlogo.format_png.resize_200x.png#logo" alt="photo"> </td><td style="text-align: initial; vertical-align: top;"> <span style="color: #45668e;font:12px Trebuchet MS, Verdana;letter-spacing:1px;">${firstName} ${middleName[0].toUpperCase()}. ${lastName}</span><br><span style="font:bold italic 12px Arial;color:#202020;"> <span>${title} - Smoothstack Inc.</span></span><br><div> <a href="tel:+55 81 999015996" style="color: #545454; font-size: 12px; text-decoration: none;"> ${phoneNumber}</a> <span style="color: #45668e; font-size: 12px; text-decoration: none;">||</span> <a href="${profileUrl}" target="_blank" style="color: #545454; font-size: 12px; text-decoration: none;"> ${profileUrl}</a> <div style="margin-top:5px;"> <a href="http://github.com/victorlaerte" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/github.png"></a>&nbsp; <a href="http://stackoverflow.com/users/1965189/victor-oliveira" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/stackoverflow.png"></a>&nbsp; <a href="http://www.facebook.com/victorlaerte" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/facebook.png"></a>&nbsp; <a href="http://Perfil públicohttps://br.linkedin.com/in/victor-laerte-oliveira-a9b81738" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/linkedin.png"></a>&nbsp; <a href="http://twitter.com/VictorLaerte" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/twitter.png"></a>&nbsp; <a href="http://www.youtube.com/channel/UCbzF_Br3GGM3yPdEO9VvJtg" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/youtube.png"></a>&nbsp; <a href="http://www.instagram.com/victorlaerte/" target="_blank"><img style="border-radius:0;moz-border-radius:0;khtml-border-radius:0;o-border-radius:0;webkit-border-radius:0;ms-border-radius:0;border: 0;width:16px; height:16px;" width="16" height="16" src="https://s3.amazonaws.com/images.wisestamp.com/icons_32/instagram.png"></a> </div></div></td></tr></tbody> </table> </td></tr></tbody> </table> </div></div>`;
};
