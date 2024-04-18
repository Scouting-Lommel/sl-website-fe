export default async function handler(request: any, response: any) {
  const formData = new FormData();

  formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
  formData.append('response', request.body.token!);
  formData.append('remoteip', request.headers['x-forwarded-host']!);

  const captchaRequest = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body: formData,
    method: 'POST',
  });

  const captchaResult = await captchaRequest.json();
  if (!captchaResult.success) {
    response.status(422).json(captchaResult);
    return;
  }

  response.status(200).json(captchaResult);
  return;
}
