import { Email } from '@/lib/helpers/sendEmail';

type registerMemberProps = {
  email: Email;
  member: any;
  callback: any;
  captchaToken: string;
};

const registerMember = async ({ email, member, callback, captchaToken }: registerMemberProps) => {
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
