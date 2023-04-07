import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-firebase-jwt";
import { ConfigService } from "@swiggy/config";
import { auth } from "firebase-admin";
import { FirebaseInstance } from "./firebase.service";

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  "firebase-auth"
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    console.log(this.configService);
  }

  validate(token: string) {
    FirebaseInstance.Instance;
    const user = auth()
      .verifyIdToken(token, true)
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException();
      });
    // req.user
    console.log(user);
    return user;
  }
}
