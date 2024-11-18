import { Email } from '@/lib/helpers/sendEmail';

type registerMemberProps = {
  email: Email;
  member: any;
  callback: any;
  captchaToken: string;
};

/**
 * Registers a new member by sending a POST request to the server.
 *
 * @param {Object} params - The parameters for registering a member.
 * @param {string} params.email - The email of the member to register.
 * @param {Object} params.member - The member details to register.
 * @param {Function} params.callback - The callback function to handle the response.
 * @param {string} params.captchaToken - The captcha token for verification.
 *
 * @returns {Promise<void>} A promise that resolves when the registration is complete.
 */
const registerMember = async ({
  email,
  member,
  callback,
  captchaToken,
}: registerMemberProps): Promise<void> => {
  const registerMemberRequestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, member, captchaToken }),
  };

  const registerMemberRequest = await fetch('/api/register-member', registerMemberRequestData);
  const registerMemberResponse = {
    message: await registerMemberRequest.json(),
    status: registerMemberRequest.status,
  };

  callback(registerMemberResponse);
};

export { registerMember };
