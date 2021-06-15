import passport from 'passport';
import passportJwt from 'passport-jwt';
import { environment } from '.';
import { userModel } from '../database';

export const passportJwtConfig = () => {
  const jwtStrategy = passportJwt.Strategy;

  const extractStrategy = passportJwt.ExtractJwt;

  return passport.use(
    new jwtStrategy(
      {
        secretOrKey: environment.appSecretKey,
        jwtFromRequest: extractStrategy.fromAuthHeaderAsBearerToken(),
      },
      async (jwtPayload, done) => {
        try {
          const findUser = await userModel
            .findById(jwtPayload._id)
            .select('-password');

          if (!findUser) {
            return done('Unauthorized user', null);
          }

          return done(null, findUser);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
};
