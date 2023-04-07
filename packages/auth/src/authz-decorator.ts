import { SetMetadata } from "@nestjs/common";

export const CheckAuthorization = (checkAuthz: boolean) =>
  SetMetadata("checkAuthorization", checkAuthz);
