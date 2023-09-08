import { withIronSession } from 'iron-session';

async function handler(req, res) {
  const { username, password } = req.body;

  // Verificar as credenciais do administrador
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    // Autenticação bem-sucedida, criar a sessão
    req.session.set('user', { isAdmin: true }); // Pode incluir mais informações do usuário aqui
    await req.session.save();

    return res.status(200).send({ message: 'Login bem-sucedido' });
  } else {
    return res.status(401).send({ message: 'Credenciais inválidas' });
  }
}

export default withIronSession(handler, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'seed-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
