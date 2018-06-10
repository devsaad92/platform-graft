import jwt from 'jsonwebtoken';
import _ from 'lodash';
import bcrypt from 'bcrypt';

export const createTokens = async (user, secret, secret2) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, ['id', 'firstName', 'lastName', 'email']),
    },
    secret,
    {
      expiresIn: '1h',
    },
  );

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, ['id', 'firstName', 'lastName', 'email']),
    },
    secret2,
    {
      expiresIn: '3h',
    },
  );

  return [createToken, createRefreshToken];
};

export const refreshTokens = async (token, refreshToken, models, SECRET, SECRET2) => {
  let userId = 0;
  try {
    const { user: { id } } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await models.Medcin.findOne({ where: { id: userId }, raw: true });

  if (!user) {
    return {};
  }

  const refreshSecret = user.password + SECRET2;

  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(user, SECRET, refreshSecret);
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user: _.pick(user, ['id', 'firstName', 'lastName', 'email']),
  };
};

export const tryLogin = async (email, password, models, SECRET, SECRET2) => {
  const user = await models.Medcin.findOne({ where: { email }, raw: true });
  if (!user) {
    return {
      ok: false,
    };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return {
      ok: false,
    };
  }

  const refreshTokenSecret = user.password + SECRET2;

  const [token, refreshToken] = await createTokens(user, SECRET, refreshTokenSecret);

  return {
    ok: true,
    token,
    refreshToken,
  };
};

export const tryForgetPassword = async (email, transporter, models, SECRET) => {
  const user = await models.Medcin.findOne({ where: { email } });
  if (!user) throw new Error(`Could not find user with email: ${email}`);

  try {
    const emailToken = jwt.sign({ user: _.pick(user, 'id') }, SECRET, { expiresIn: '1h' });

    const url = `http://localhost:4200/session/reset/${emailToken}`;

    await transporter.sendMail({
      to: email,
      subject: 'Confirm Email',
      html: `Please click this email to confirm your email: <a href='${url}'>${url}</a>`,
    });
  } catch (e) {
    // console.log(e);
    throw new Error(`Could not: ${e}`);
  }

  return user;
};

export const tryResetPassword = async (userId, newPassword, models) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    await models.Medcin.update({ password: hashedPassword }, { where: { id: userId } });
    return true;
  } catch (e) {
    // throw new Error(`Could not: ${e}`);
    return false;
  }
};

