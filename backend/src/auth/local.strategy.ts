import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

/* "This class extends the PassportStrategy class and overrides the validate method to validate the
user credentials."

The PassportStrategy class is a generic class that takes a StrategyOptions object as a type
parameter. The StrategyOptions object is an interface that defines the options that are passed to
the constructor of the Strategy class */

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "email",
    });
  }
} 