import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@swiggy/config";
import { Logger } from "@swiggy/logger";
import { Like, Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { UserMetaData } from "@swiggy/auth";
import { CreateAddressDto, userAddressByIdDto } from "../dto/user-request.dto";
import { UserAddressEntity } from "../entity/user.address.entity";

@Injectable()
export class UserAddressService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(UserAddressEntity)
    private userAddressRepo: Repository<UserAddressEntity>
  ) {}

  async validateAuthorization(param: userAddressByIdDto, user: UserMetaData) {
    const { id } = param;
    const address = await this.userAddressRepo.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException();
    }
    if (address.user_id !== user.uid) {
      throw new UnauthorizedException();
    }
    return address;
  }

  async update(
    param: userAddressByIdDto,
    user: UserMetaData,
    body: CreateAddressDto
  ) {
    const address = await this.validateAuthorization(param, user);
    return this.userAddressRepo.save({
      ...address,
      ...body,
    });
  }

  async delete(param: userAddressByIdDto, user: UserMetaData) {
    const address = await this.validateAuthorization(param, user);
    this.userAddressRepo.delete({ id: address.id });
  }

  async create(
    body: CreateAddressDto,
    apiUser: UserMetaData
  ): Promise<UserAddressEntity> {
    const saveEntity = {
      ...body,
      user_id: apiUser.uid,
    };
    const createdAddress = await this.userAddressRepo.save(saveEntity);
    this.logger.log(
      `address created successfully ${JSON.stringify(createdAddress)}`
    );
    return createdAddress;
  }

  async fetchAllAddress(apiUser: UserMetaData) {
    return await this.userAddressRepo.find({
      where: {
        user_id: apiUser.uid,
      },
    });
  }
}
